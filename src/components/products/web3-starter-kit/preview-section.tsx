"use client";

/**
 * Preview section with accordion showing ebook contents
 */

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";
import { FadeIn } from "./fade-in";

export function PreviewSection() {
  const t = useTranslations("web3StarterKit");

  const steps = [0, 1, 2, 3, 4];

  return (
    <section
      className="py-12 md:py-20 px-4 relative z-10"
      aria-labelledby="preview-heading"
    >
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <h2
            id="preview-heading"
            className="font-[family-name:var(--font-space-grotesk)] text-[24px] md:text-[32px] font-semibold text-center mb-10 text-[var(--w3-text-primary)]"
          >
            {t("peekInside.title")}
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="w3-card p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {steps.map((index) => (
                <AccordionItem
                  key={index}
                  value={`step-${index}`}
                  className="border-[var(--w3-border)]"
                >
                  <AccordionTrigger className="text-left text-[var(--w3-text-secondary)] hover:text-[var(--w3-text-primary)] hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-base md:text-lg">
                        {t(`peekInside.steps.${index}`)}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--w3-text-muted)] pl-11">
                    {t(`whatsInside.benefits.${index}`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
