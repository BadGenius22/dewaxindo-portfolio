"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  RECEIPT_CYCLE,
  RECEIPT_BARS,
  DISCIPLINES,
  STACK_TERMS,
  FORGE_EMAIL,
} from "@/data/forge";

function BuildCounter() {
  const [build, setBuild] = React.useState(1287);
  React.useEffect(() => {
    const id = setInterval(() => setBuild((b) => b + 1), 12000);
    return () => clearInterval(id);
  }, []);
  return <>#{build.toLocaleString()}</>;
}

function useReceipt() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % RECEIPT_CYCLE.length), 8000);
    return () => clearInterval(id);
  }, []);
  return { ...RECEIPT_CYCLE[i], idx: i };
}

export function Hero() {
  const r = useReceipt();
  const t = useTranslations("forge.hero");
  const tReceipt = useTranslations("forge.receipt");
  const tDisc = useTranslations("forge.disciplines");

  return (
    <section id="top" className="hero">
      <div className="hero-eyebrow">
        <span>{t("eyebrowName")}</span>
        <span className="star">✦</span>
        <span>{t("eyebrowRole")}</span>
        <span className="star">✦</span>
        <span>{t("eyebrowEst")}</span>
      </div>

      <h1 className="hero-headline">
        <span className="sr-only">{t("srHeadline")}</span>
        <span
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: t.raw("headline") as string }}
        />
      </h1>

      <div className="hero-stage">
        <div className="hero-left">
          <p
            className="hero-lede"
            dangerouslySetInnerHTML={{ __html: t.raw("lede") as string }}
          />
          <div className="hero-ctas">
            <a className="hero-cta primary" href={`mailto:${FORGE_EMAIL}`}>
              {t("ctaPrimary")} <span className="hc-ico">↗</span>
            </a>
            <a className="hero-cta ghost" href="#works">
              {t("ctaGhost")} <span className="hc-ico">→</span>
            </a>
          </div>
        </div>

        <aside className="receipt" key={r.idx}>
          <div className="stamp">{tReceipt("deployed")}</div>
          <div className="rcpt-head">
            <span className="t">{tReceipt("title")}</span>
            <span className="l">{tReceipt("live")}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("project")}</span>
            <span className="v">{r.project}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("stack")}</span>
            <span className="v">{r.stack}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("scale")}</span>
            <span className="v bigmoney">{r.scale}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("status")}</span>
            <span className="v em">{r.status}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("build")}</span>
            <span className="v">
              <BuildCounter />
            </span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("commit")}</span>
            <span className="v">
              <button className="copy-btn" data-copy={r.hash} title={tReceipt("copyCommit")}>
                {r.hash} <span className="copy-ico">⎘</span>
              </button>
            </span>
          </div>
          <div className="barcode">
            <div className="bars">
              {RECEIPT_BARS.map((bar, i) => (
                <span key={i} style={{ height: bar.h, width: bar.w ?? undefined }} />
              ))}
            </div>
            <span style={{ color: "var(--ink-3)" }}>DWX·MMXXVI</span>
          </div>

          <div className="rcpt-cycle" aria-hidden="true">
            {RECEIPT_CYCLE.map((_, i) => (
              <span key={i} className={"rc-dot" + (i === r.idx ? " on" : "")} />
            ))}
          </div>
        </aside>
      </div>

      <div className="disc-strip" aria-label={tDisc("ariaLabel")}>
        {DISCIPLINES.map((d) => (
          <div key={d.key} className="disc">
            <span className="d-n">{d.n}</span>
            <span className="d-t">{tDisc(`${d.key}.title`)}</span>
            <span className="d-s">{d.sub}</span>
          </div>
        ))}
        <div className="disc-tally">
          <span className="at-num">1 / 3</span>
          <span
            className="at-lbl"
            dangerouslySetInnerHTML={{ __html: tDisc.raw("tally") as string }}
          />
        </div>
      </div>

      <div className="stackline" aria-hidden="true">
        <div className="track">
          {[0, 1].map((dup) => (
            <React.Fragment key={dup}>
              {STACK_TERMS.map((term) => (
                <React.Fragment key={term}>
                  <span>{term}</span>
                  <span className="star">✦</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
