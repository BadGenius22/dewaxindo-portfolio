"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import type { WorkV3 } from "@/data/forge";

interface CaseStudyModalProps {
  work: WorkV3;
  onClose: () => void;
}

export function CaseStudyModal({ work, onClose }: CaseStudyModalProps) {
  const t = useTranslations("forge.caseStudy");
  const s = work.study;

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!s) return null;

  return (
    <div
      className="cs-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cs-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cs-panel">
        <div className="cs-tape">
          <span>
            {t("file")} · {work.id.toUpperCase()} · {work.year}
          </span>
          <span className="cs-tape-mid">· {t("opened")} ·</span>
          <button className="cs-close" onClick={onClose} aria-label={t("closeLabel")}>
            [ ESC ]
          </button>
        </div>

        <div className="cs-body">
          <header className="cs-head">
            <div className="cs-meta">
              <div>
                <span className="cs-k">{t("project")}</span>
                <span className="cs-v">{work.name}</span>
              </div>
              <div>
                <span className="cs-k">{t("role")}</span>
                <span className="cs-v">{s.role}</span>
              </div>
              <div>
                <span className="cs-k">{t("window")}</span>
                <span className="cs-v">{s.window}</span>
              </div>
              <div>
                <span className="cs-k">{t("liveAt")}</span>
                <span className="cs-v">
                  <a href={work.url} target="_blank" rel="noreferrer">
                    {work.host} ↗
                  </a>
                </span>
              </div>
            </div>
            <h2 id="cs-title" className="cs-title">
              {work.name}
            </h2>
          </header>

          <section className="cs-section">
            <h3 className="cs-h3">
              <span className="cs-h3-n">01</span> {t("challenge")}
            </h3>
            <p className="cs-prose">{s.challenge}</p>
          </section>

          <section className="cs-section">
            <h3 className="cs-h3">
              <span className="cs-h3-n">02</span> {t("built")}
            </h3>
            <ul className="cs-list">
              {s.contributions.map((c, i) => (
                <li key={i}>
                  <span className="cs-tick">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="cs-section">
            <h3 className="cs-h3">
              <span className="cs-h3-n">03</span> {t("outcomes")}
            </h3>
            <div className="cs-results">
              {s.results.map((r, i) => (
                <div key={i} className="cs-stat">
                  <span className="cs-stat-k">{r.k}</span>
                  <span className="cs-stat-v">{r.v}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cs-section">
            <h3 className="cs-h3">
              <span className="cs-h3-n">04</span> {t("stack")}
            </h3>
            <div className="cs-stack">
              {s.stack.map((tag) => (
                <span key={tag} className="cs-chip">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <footer className="cs-foot">
            <span>{t("endOfFile")}</span>
            <a className="cs-cta" href={work.url} target="_blank" rel="noreferrer">
              {t("visit")} {work.host} ↗
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
