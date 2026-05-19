"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_LINK =
  "https://wa.me/5521965647856?text=Olá!%20Vim%20pelo%20site%20e%20quero%20começar%20meu%20ritual%20com%20a%20Botica%20Raizeira.";
const IG_LINK = "https://www.instagram.com/boticaraizeira";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contato"
      ref={ref}
      className="py-12 md:py-20 bg-botanical-dark relative overflow-hidden"
    >
      {/* Gradiente radial de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(122,158,142,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Elemento decorativo — linhas botânicas */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-5"
        viewBox="0 0 256 256"
        fill="none"
        aria-hidden="true"
      >
        <path d="M128 240 C128 240 126 160 128 40" stroke="white" strokeWidth="1.5" />
        <ellipse cx="128" cy="140" rx="50" ry="80" fill="none" stroke="white" strokeWidth="1" />
        <ellipse cx="128" cy="100" rx="30" ry="50" fill="none" stroke="white" strokeWidth="0.7" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-5 rotate-180"
        viewBox="0 0 256 256"
        fill="none"
        aria-hidden="true"
      >
        <path d="M128 240 C128 240 126 160 128 40" stroke="white" strokeWidth="1.5" />
        <ellipse cx="128" cy="140" rx="50" ry="80" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.4em] uppercase text-gold font-light mb-8"
        >
          Comece agora
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-beige leading-tight mb-6"
        >
          Seu ritual começa
          <br />
          com uma{" "}
          <span className="italic text-sage-light">pausa.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <hr className="gold-rule w-24" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sage-light font-light leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Escolha seu produto, peça pelo WhatsApp ou siga o Instagram para
          conhecer mais sobre a Botica Raizeira. Estou aqui para ajudar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige text-botanical text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-warm-white transition-colors font-light inline-block"
          >
            Fale pelo WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-beige/30 text-beige text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-beige/10 transition-colors font-light inline-block"
          >
            Ver no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
