"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Package, Send, CheckCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Products() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list!");
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <section
      id="products"
      className="bg-background px-6 py-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.p
          className="text-muted-foreground font-display text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Digital Products
        </motion.p>

        {/* Coming Soon Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-xl border border-border bg-card p-6 md:p-12 text-center">
            {/* Animated Icon */}
            <motion.div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Package className="w-8 h-8 text-primary" />
            </motion.div>

            <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
              Coming Soon
            </h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              I&apos;m working on digital products to help you accelerate your Web3 journey.
              Templates, guides, and resources — all coming soon.
            </p>

            {/* Email Form */}
            <div className="mt-8">
              {status === "success" ? (
                <motion.div
                  className="flex items-center justify-center gap-2 text-emerald-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{message}</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className={cn(
                      "flex-1 px-4 py-3 rounded-lg border border-border bg-background",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                      "transition-all"
                    )}
                  />
                  <Button type="submit" size="lg" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Notify Me
                      </>
                    )}
                  </Button>
                </form>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-500">{message}</p>
              )}
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
