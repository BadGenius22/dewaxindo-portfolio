"use client";

/**
 * Lead magnet email capture form (Forge style)
 * Integrates with ConvertKit for auto-delivery of PDFs
 */

import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { CheckCircle, Loader2, ArrowRight, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { trackMetaEvent, sendToCAPI } from "@/lib/analytics";

interface LeadMagnetFormProps {
  formId: string;
  productId: string;
  productTitle: string;
  className?: string;
  buttonText?: string;
  /** Render email + button on one row (desktop). Defaults to stacked. */
  inline?: boolean;
  /** Show the "no spam, unsubscribe anytime" trust line under the form. */
  showTrustText?: boolean;
  socialProof?: React.ReactNode;
}

export function LeadMagnetForm({
  formId,
  productId,
  productTitle,
  className,
  buttonText,
  inline = false,
  showTrustText = false,
  socialProof,
}: LeadMagnetFormProps) {
  const t = useTranslations("leadMagnet");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
            email,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");

        // Track lead conversion
        const eventId = trackMetaEvent("Lead", {
          content_name: productTitle,
          content_category: "lead_magnet",
          content_ids: [productId],
          value: 0,
          currency: "USD",
        });

        sendToCAPI("Lead", eventId, {
          content_name: productTitle,
          content_category: "lead_magnet",
          content_ids: [productId],
        });
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("pk-form-success", className)}
      >
        <CheckCircle className="ic w-9 h-9 mx-auto" />
        <h3>{t("success.title")}</h3>
        <p>{t("success.description")}</p>
      </motion.div>
    );
  }

  return (
    <div className={cn("pk-form", className)}>
      <form onSubmit={handleSubmit} className={cn("pk-form-row", inline && "inline")}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("form.emailPlaceholder")}
          required
          aria-label={t("form.emailPlaceholder")}
          className="pk-input"
        />
        <button type="submit" className="pk-submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              {buttonText || t("form.submitButton")}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {status === "error" && <p className="pk-form-err">{t("error.message")}</p>}

      {showTrustText ? (
        <p className="pk-form-note">
          <Lock className="w-3 h-3" />
          {t("form.trustText")}
        </p>
      ) : (
        !inline && <p className="pk-form-note">{t("form.privacyNote")}</p>
      )}

      {socialProof && <div className="flex justify-center">{socialProof}</div>}
    </div>
  );
}
