"use client";

/**
 * Lead magnet email capture form
 * Integrates with ConvertKit for auto-delivery of PDFs
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { CheckCircle, Loader2, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  trackMetaEvent,
  sendToCAPI,
  trackViewContent,
} from "@/lib/analytics";

interface LeadMagnetFormProps {
  formId: string;
  productId: string;
  productTitle: string;
}

export function LeadMagnetForm({
  formId,
  productId,
  productTitle,
}: LeadMagnetFormProps) {
  const t = useTranslations("leadMagnet");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Track ViewContent on mount
  useEffect(() => {
    const eventId = trackViewContent(
      productId,
      "lead_magnet",
      productTitle,
      0,
      "USD"
    );

    sendToCAPI("ViewContent", eventId, {
      content_ids: [productId],
      content_type: "lead_magnet",
      content_name: productTitle,
      value: 0,
      currency: "USD",
    });
  }, [productId, productTitle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
            first_name: name,
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
        className="text-center p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10"
      >
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-medium text-foreground">
          {t("success.title")}
        </h3>
        <p className="text-muted-foreground mt-2">{t("success.description")}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("form.namePlaceholder")}
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-border bg-background",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-primary/50"
        )}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("form.emailPlaceholder")}
        required
        className={cn(
          "w-full px-4 py-3 rounded-lg border border-border bg-background",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-primary/50"
        )}
      />
      <Button
        type="submit"
        size="lg"
        className="w-full text-lg py-6"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Download className="mr-2 h-5 w-5" />
            {t("form.submitButton")}
          </>
        )}
      </Button>
      {status === "error" && (
        <p className="text-sm text-center text-destructive">
          {t("error.message")}
        </p>
      )}
      <p className="text-xs text-center text-muted-foreground">
        {t("form.privacyNote")}
      </p>
    </form>
  );
}
