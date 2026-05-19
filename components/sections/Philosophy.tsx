"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="filosofia"
      ref={ref}
      className="py-24 md:py-36 section-alt relative overflow-hidden"
    >
      {/* Decoração de fundo — círculo sutil */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(201,184,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] uppercase text-gold font-light mb-8"
        >
          Nossa Filosofia
        </motion.p>

        {/* Ornamento superior */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 justify-center mb-10"
        >
          <hr className="gold-rule flex-1 max-w-24" />
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
            <path d="M12 2 C12 2 11 8 12 12 C13 8 12 2 12 2Z" fill="#C9A96E" opacity="0.7" />
            <path d="M12 12 C8 10 4 11 2 14 C6 14 10 13 12 12Z" fill="#C9A96E" opacity="0.5" />
            <path d="M12 12 C16 10 20 11 22 14 C18 14 14 13 12 12Z" fill="#C9A96E" opacity="0.5" />
          </svg>
          <hr className="gold-rule flex-1 max-w-24" />
        </motion.div>

        {/* Manifesto — texto principal */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-botanical leading-tight tracking-tight mb-10"
        >
          Acreditamos que cuidar de si
          <br />
          é um ato de{" "}
          <span className="italic text-sage">presença</span>,<br />
          não de perfeição.
        </motion.blockquote>

        {/* Linha dourada central */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center mb-10"
        >
          <hr className="gold-rule w-32" />
        </motion.div>

        {/* Texto manifesto — parágrafos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col gap-4 text-ink-muted font-light leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            As plantas guardam memórias que o tempo não apaga. A sabedoria das
            ervas é ancestral, mas o ritual de hoje precisa ser seu, no tempo
            que você tem, com a intenção que você carrega.
          </p>
          <p>
            Cada produto da Botica Raizeira é um convite: pare, respire, sinta.
            A natureza não tem pressa. E às vezes, você também não precisa ter.
          </p>
        </motion.div>

        {/* Três pilares */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {["Natureza", "Intenção", "Cuidado"].map((pilar) => (
            <div key={pilar} className="flex flex-col items-center gap-3">
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-gold to-transparent" />
              <p className="text-xs tracking-[0.3em] uppercase text-ink-muted font-light">
                {pilar}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
