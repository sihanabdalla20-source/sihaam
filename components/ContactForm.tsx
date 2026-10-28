"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

const emptyValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type ContactFormProps = {
  initialTour?: string;
};

export default function ContactForm({ initialTour }: ContactFormProps) {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const formRef = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState<FormValues>(() => ({
    ...emptyValues,
    subject: initialTour ? `Inquiry: ${initialTour}` : "",
    message: initialTour
      ? `I'd like to know more about the ${initialTour} package. Please share availability and pricing.`
      : "",
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (!initialTour) return;
    setValues((current) => {
      if (current.subject || current.message) return current;
      return {
        ...current,
        subject: `Inquiry: ${initialTour}`,
        message: `I'd like to know more about the ${initialTour} package. Please share availability and pricing.`,
      };
    });
  }, [initialTour]);

  const validate = (formValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    const phoneDigits = formValues.phone.replace(/\D/g, "");

    if (formValues.fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (formValues.subject.trim().length < 3) {
      nextErrors.subject = "Please add a short subject.";
    }

    if (formValues.message.trim().length < 20) {
      nextErrors.message = "Please tell us a little more (at least 20 characters).";
    }

    return nextErrors;
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        formRef.current
          ?.querySelector<HTMLElement>('[aria-invalid="true"]')
          ?.focus();
      });
      return;
    }

    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStatus("success");
      setValues(emptyValues);
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (field: keyof FormValues) =>
    `field ${errors[field] ? "field-error" : ""}`;

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="field-label">
            Full name <span className="text-teal-700">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your full name"
            className={fieldClass("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName ? (
            <p
              id="fullName-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
            >
              <AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email address <span className="text-teal-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            className={fieldClass("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p
              id="email-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
            >
              <AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="field-label">
            Phone number <span className="text-teal-700">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-required="true"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+252 61 000 0000"
            className={fieldClass("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p
              id="phone-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
            >
              <AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="field-label">
            Subject <span className="text-teal-700">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            aria-required="true"
            value={values.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            placeholder="Where would you like to go?"
            className={fieldClass("subject")}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject ? (
            <p
              id="subject-error"
              role="alert"
              className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
            >
              <AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message <span className="text-teal-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required="true"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us about your travel dates, group, interests and anything you'd like us to know."
          className={`${fieldClass("message")} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p
            id="message-error"
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs text-red-600"
          >
            <AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 border-t border-navy-900/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.68rem] leading-5 text-navy-900/45">
          Fields marked <span className="text-teal-700">*</span> are required.
          We only use your details to reply to this inquiry.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              Sending
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send inquiry
              <Send aria-hidden="true" className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {status === "success" ? (
        <div
          role="status"
          className="flex items-start gap-3 rounded-2xl border border-teal-500/20 bg-teal-50 p-4 text-sm text-teal-900"
        >
          <CheckCircle2
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
          />
          <p>
            Thank you — your inquiry has been sent. We&apos;ll be in touch
            shortly.
          </p>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
          />
          <p>
            Something went wrong while sending your inquiry. Nothing has been
            sent. Please try again or contact us directly.
          </p>
        </div>
      ) : null}

      {status === "unconfigured" ? (
        <div
          role="status"
          className="rounded-2xl border border-gold/35 bg-sand-100 p-5 text-sm leading-6 text-navy-900/75"
        >
          <div className="flex items-start gap-3">
            <AlertCircle
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-[#8a6a2f]"
            />
            <div>
              <p className="font-bold text-navy-950">
                Online sending isn&apos;t available at the moment.
              </p>
              <p className="mt-1">
                Your message has been checked, but nothing has been sent. Please
                reach us directly by email or WhatsApp and we&apos;ll take it
                from there.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={siteConfig.contact.email.href}
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-teal-600"
                >
                  <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                  Email us
                </a>
                <a
                  href={siteConfig.contact.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-navy-900 transition hover:border-navy-900"
                >
                  <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
