"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Escolha seu ritual",
    description:
      "Explore as categorias e produtos. Cada um tem uma intenção. Encontre o que ressoa com o que você precisa agora.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Peça pelo WhatsApp",
    description:
      "Entre em contato diretamente. Posso ajudar na escolha, explicar o modo de uso e até criar uma combinação personalizada para você.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Viva a experiência",
    description:
      "Receba seu produto com um guia de uso. Reserve um momento para si, siga o ritual e deixe a natureza fazer seu trabalho.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="flex flex-col gap-16">
          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center gap-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.4em] uppercase text-gold font-light"
            >
              Simples e intuitivo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-botanical"
            >
              Como funciona
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <hr className="gold-rule w-20" />
            </motion.div>
          </div>

          {/* Passos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Linha conectora desktop */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                  className="flex flex-col items-center text-center gap-5 relative"
                >
                  {/* Círculo com número */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center bg-warm-white">
                      <Icon
                        size={24}
                        className="text-botanical"
                        strokeWidth={1.2}
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 font-display text-xs text-gold tracking-widest">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-light text-botanical">
                    {step.title}
                  </h3>

                  <p className="text-ink-muted text-sm font-light leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
