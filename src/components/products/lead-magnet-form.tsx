"use client";

/**
 * Lead magnet email capture form
 * Integrates with ConvertKit for auto-delivery of PDFs
 */

import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { CheckCircle, Loader2, ArrowRight, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackMetaEvent, sendToCAPI } from "@/lib/analytics";

interface LeadMagnetFormProps {
  formId: string;
  productId: string;
  productTitle: string;
  className?: string;
  buttonText?: string;
  inline?: boolean;
  variant?: "default" | "gradient";
  showTrustText?: boolean;
  socialProof?: React.ReactNode;
  glass?: boolean;
}

export function LeadMagnetForm({
  formId,
  productId,
  productTitle,
  className,
  buttonText,
  inline = false,
  variant = "default",
  showTrustText = false,
  socialProof,
  glass = false,
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "text-center p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10",
          glass && "w3-glass-card",
          className
        )}
      >
        <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-foreground">
          {t("success.title")}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          {t("success.description")}
        </p>
      </motion.div>
    );
  }

  const isGradient = variant === "gradient";

  const formContent = (
    <>
      <form
        onSubmit={handleSubmit}
        className={cn(
          inline ? "flex flex-col sm:flex-row gap-3" : "space-y-4"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("form.emailPlaceholder")}
          required
          aria-label={t("form.emailPlaceholder")}
          className={cn(
            "px-4 py-3 rounded-lg border",
            glass
              ? "border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-sm"
              : "border-border bg-background",
            "text-foreground placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500",
            "min-h-[48px]",
            inline ? "flex-1" : "w-full"
          )}
        />
        <Button
          type="submit"
          size="lg"
          className={cn(
            "font-medium min-h-[48px] transition-all duration-300 motion-safe:transition-all",
            isGradient
              ? "w3-cta-gradient text-white border-0 hover:shadow-lg"
              : "bg-emerald-500 hover:bg-emerald-600 text-white",
            inline ? "px-6" : "w-full text-lg py-6"
          )}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              {buttonText || t("form.submitButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        {status === "error" && (
          <p className="text-sm text-center text-destructive col-span-full">
            {t("error.message")}
          </p>
        )}
      </form>

      {showTrustText && (
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
          <Lock className="w-3 h-3" />
          {t("form.trustText")}
        </p>
      )}

      {!showTrustText && !inline && (
        <p className="text-xs text-center text-muted-foreground">
          {t("form.privacyNote")}
        </p>
      )}

      {socialProof && <div className="flex justify-center">{socialProof}</div>}
    </>
  );

  if (glass) {
    return (
      <div className={cn("w3-glass-card p-6 space-y-4", className)}>
        {formContent}
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {formContent}
    </div>
  );
}
