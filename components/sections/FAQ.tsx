"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/data/faq";

function FAQItem({
  question,
  answer,
  index,
  inView,
}: {
  question: string;
  answer: string;
  index: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.06 }}
      className="border-b border-beige-deeper/60 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-light text-botanical group-hover:text-botanical-light transition-colors leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 w-7 h-7 border border-gold/30 group-hover:border-gold/70 flex items-center justify-center transition-colors">
          {open ? (
            <Minus size={13} className="text-gold" strokeWidth={1.5} />
          ) : (
            <Plus size={13} className="text-gold" strokeWidth={1.5} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-ink-muted text-sm font-light leading-relaxed pb-5 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="py-24 md:py-32 bg-beige">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className="flex flex-col gap-12">
          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center gap-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.4em] uppercase text-gold font-light"
            >
              Dúvidas frequentes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-botanical"
            >
              Perguntas & Respostas
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <hr className="gold-rule w-20" />
            </motion.div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col">
            {faqItems.map((item, i) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={i}
                inView={inView}
              />
            ))}
          </div>

          {/* Rodapé do FAQ */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center text-ink-muted text-sm font-light"
          >
            Não encontrou sua dúvida?{" "}
            <a
              href="https://wa.me/5521965647856"
              target="_blank"
              rel="noopener noreferrer"
              className="text-botanical underline underline-offset-4 hover:text-botanical-light transition-colors"
            >
              Fale comigo pelo WhatsApp.
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
