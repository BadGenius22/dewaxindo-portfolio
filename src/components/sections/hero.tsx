"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import {
  RECEIPT_CYCLE,
  AUDIT_STAMPS,
  MARQUEE_TERMS,
  FORGE_EMAIL,
} from "@/data/forge";

function LiveBlock() {
  const [block, setBlock] = React.useState(22049837);
  React.useEffect(() => {
    const id = setInterval(() => setBlock((b) => b + 1), 12000);
    return () => clearInterval(id);
  }, []);
  return <>#{block.toLocaleString()}</>;
}

function useReceipt() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % RECEIPT_CYCLE.length), 8000);
    return () => clearInterval(id);
  }, []);
  return { ...RECEIPT_CYCLE[i], idx: i };
}

const BAR_HEIGHTS = [18, 22, 14, 22, 16, 22, 14, 22, 18, 22, 14, 18, 22, 14, 22];
const BAR_WIDTHS: Record<number, number> = { 2: 4, 5: 3, 8: 2, 12: 4 };

export function Hero() {
  const r = useReceipt();
  const t = useTranslations("forge.hero");
  const tReceipt = useTranslations("forge.receipt");
  const tAudit = useTranslations("forge.audit");

  return (
    <section id="top" className="hero">
      <div className="hero-eyebrow">
        <span>DEWANGGA PRAXINDO</span>
        <span>—</span>
        <span>DEFI SMART CONTRACT ENGINEER</span>
        <span>—</span>
        <span>EST. 2022</span>
      </div>

      <h1 className="hero-headline">
        <span className="row">SHIPPING</span>
        <span className="row">
          <span className="clay">SMART</span> CONTRACTS
        </span>
        <span className="row">
          <span className="outline">REAL MONEY</span>
        </span>
        <span className="row">
          TRUSTS<span style={{ color: "var(--clay)" }}>.</span>
        </span>
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
            <span className="k">{tReceipt("chain")}</span>
            <span className="v">{r.chain}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("tvl")}</span>
            <span className="v bigmoney">{r.tvl}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("audit")}</span>
            <span className="v em">{r.audit}</span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("block")}</span>
            <span className="v">
              <LiveBlock />
            </span>
          </div>
          <div className="row">
            <span className="k">{tReceipt("address")}</span>
            <span className="v">
              {r.explorerUrl ? (
                <a
                  className="copy-btn"
                  href={r.explorerUrl}
                  target="_blank"
                  rel="noreferrer"
                  title={tReceipt("openExplorer")}
                >
                  {r.addr} <span className="copy-ico">↗</span>
                </a>
              ) : (
                <span>{r.addr}</span>
              )}
            </span>
          </div>
          <div className="barcode">
            <div className="bars">
              {BAR_HEIGHTS.map((h, i) => (
                <span key={i} style={{ height: h, width: BAR_WIDTHS[i] ?? undefined }} />
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

      <div className="audit-row" aria-label={tAudit("ariaLabel")}>
        {AUDIT_STAMPS.map((s, i) => (
          <div key={i} className="audit-stamp">
            <div className="audit-stamp-inner">
              <span className="as-t">
                Peck
                <br />
                Shield
              </span>
              <span className="as-mid">AUDIT</span>
              <span className="as-d">{s.date}</span>
            </div>
            <span className="as-label">{s.label}</span>
          </div>
        ))}
        <div className="audit-tally">
          <span className="at-num">3 / 3</span>
          <span
            className="at-lbl"
            dangerouslySetInnerHTML={{ __html: tAudit("tally") as string }}
          />
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((dup) => (
            <React.Fragment key={dup}>
              {MARQUEE_TERMS.map((term) => (
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
