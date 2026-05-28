"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { WORKS_V3, type WorkV3 } from "@/data/forge";
import { CaseStudyModal } from "@/components/sections/case-study-modal";

interface WorkCardProps {
  w: WorkV3;
  onOpen: (w: WorkV3) => void;
  taglineLabel: string;
  stampReceipt: string;
  stampMarquee: string;
  stampCaseStudy: string;
}

function WorkCard({ w, onOpen, taglineLabel, stampReceipt, stampMarquee, stampCaseStudy }: WorkCardProps) {
  const hasStudy = Boolean(w.study);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    if (hasStudy) onOpen(w);
  };

  const stamp = w.featured ? stampMarquee : hasStudy ? stampCaseStudy : stampReceipt;

  return (
    <article
      className={"work-card " + w.span + (hasStudy ? " has-study" : "")}
      onClick={handleClick}
      role={hasStudy ? "button" : undefined}
      tabIndex={hasStudy ? 0 : undefined}
      onKeyDown={(e) => {
        if (hasStudy && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onOpen(w);
        }
      }}
    >
      <div className="stamp">
        <span>
          № {w.id.toUpperCase()} · {w.year}
        </span>
        <span className="clay">{stamp}</span>
      </div>

      <div className="visual">
        {w.image ? (
          <Image
            src={w.image}
            alt={`${w.name} screenshot`}
            fill
            sizes={w.span === "span-12" ? "100vw" : w.span === "span-7" ? "58vw" : "42vw"}
            className="work-img"
          />
        ) : (
          <span className="placeholder-mark">{w.name.split(" ")[0]}</span>
        )}
        <a
          className="url-pill"
          href={w.url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {w.host}
        </a>
      </div>

      <h3>{w.name}</h3>
      <p className="tagline">{taglineLabel}</p>
      <div className="meta">
        <div className="tags">
          {w.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <span className={"metric" + (w.acid ? " acid" : "")}>{w.metric}</span>
      </div>
    </article>
  );
}

export function Works() {
  const [open, setOpen] = React.useState<WorkV3 | null>(null);
  const t = useTranslations("forge.works");
  const tTaglines = useTranslations("forge.works.taglines");

  return (
    <section id="works" className="section">
      <div className="forge-container">
        <header className="sec-head">
          <div className="marker">
            <span className="num">§ 03</span> {t("marker")}
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.raw("title") as string }} />
        </header>

        <div className="works-grid">
          {WORKS_V3.map((w) => (
            <WorkCard
              key={w.id}
              w={w}
              onOpen={setOpen}
              taglineLabel={tTaglines(w.taglineKey)}
              stampReceipt={t("stamps.receipt")}
              stampMarquee={t("stamps.marquee")}
              stampCaseStudy={t("stamps.caseStudy")}
            />
          ))}
        </div>
      </div>

      {open && <CaseStudyModal work={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
