"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, FileText } from "lucide-react";

import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export function Products() {
  const t = useTranslations("products");

  return (
    <section id="products" className="bg-background px-6 py-24">
      <div className="max-w-7xl w-full mx-auto">
        <motion.p
          className="text-muted-foreground font-display text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("label")}
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t("subtitle")}
        </motion.p>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.id}`}>
                <div
                  className={cn(
                    "group relative rounded-xl border border-border bg-card p-6",
                    "hover:border-emerald-500/50 hover:bg-card/80",
                    "transition-all duration-300 cursor-pointer h-full"
                  )}
                >
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {t("free")}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-emerald-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-emerald-500 transition-colors">
                    {t(`items.${product.id}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t(`items.${product.id}.subtitle`)}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {t(`items.${product.id}.description`)}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-medium text-emerald-500 group-hover:gap-2 transition-all">
                    {t("viewDetails")}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
