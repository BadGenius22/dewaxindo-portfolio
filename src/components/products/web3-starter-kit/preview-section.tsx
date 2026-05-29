"use client";

/**
 * Preview section - accordion of ebook contents (Forge)
 */

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "./fade-in";

export function PreviewSection() {
  const t = useTranslations("web3StarterKit");

  const steps = [0, 1, 2, 3, 4];

  return (
    <section className="pk-sec" aria-labelledby="preview-heading">
      <div className="pk-wrap">
        <FadeIn>
          <div className="pk-sec-head">
            <h2 id="preview-heading" className="pk-h2">
              {t("peekInside.title")}
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="pk-acc">
            <Accordion type="single" collapsible className="w-full">
              {steps.map((index) => (
                <AccordionItem
                  key={index}
                  value={`step-${index}`}
                  className="pk-acc-item"
                >
                  <AccordionTrigger className="pk-acc-trigger text-left hover:no-underline">
                    {t(`peekInside.steps.${index}`)}
                  </AccordionTrigger>
                  <AccordionContent className="pk-acc-content">
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
