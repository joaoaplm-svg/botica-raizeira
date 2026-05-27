"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

/* Ornamento folha SVG pequeno */
function LeafOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M20 55 C20 55 19 35 20 10" stroke="#C9A96E" strokeWidth="0.8" strokeLinecap="round" />
      <ellipse cx="20" cy="28" rx="10" ry="18" fill="none" stroke="#C9A96E" strokeWidth="0.7" opacity="0.6" />
      <path d="M20 28 C14 22 12 14 14 8" stroke="#C9A96E" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
      <path d="M20 28 C26 22 28 14 26 8" stroke="#C9A96E" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function BrandPresentation() {
  const { ref, inView } = useReveal();

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number], delay: i * 0.15 },
    }),
  };

  return (
    <section id="marca" className="py-10 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Imagem / placeholder visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-video md:aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/brand/foto-da-marca.png"
                alt="Ervas e preparos artesanais da Botica Raizeira"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Canto decorativo externo — oculto em mobile para evitar overflow horizontal */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30" />
            <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 border border-gold/20" />
          </motion.div>

          {/* Conteúdo textual */}
          <div className="flex flex-col gap-7 order-1 md:order-2 items-center md:items-start text-center md:text-left">
            <motion.p
              custom={0}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-xs tracking-[0.4em] uppercase text-gold font-light"
            >
              Sobre a Marca
            </motion.p>

            <motion.h2
              custom={1}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-display text-5xl md:text-6xl font-light text-botanical leading-tight"
            >
              A Botica
              <br />
              <span className="italic">Raizeira</span>
            </motion.h2>

            <motion.div
              custom={2}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <hr className="gold-rule w-16" />
            </motion.div>

            <motion.p
              custom={3}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-ink-muted leading-relaxed font-light"
            >
              {/* Texto placeholder — substituir pelo texto final da marca */}
              A Botica Raizeira nasceu do encontro entre a sabedoria das ervas e
              a vida contemporânea. Cada produto é preparado com atenção,
              cuidado e presença, para que o ritual de autocuidado seja também
              um momento de pausa e reconexão.
            </motion.p>

            <motion.p
              custom={4}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-ink-muted leading-relaxed font-light"
            >
              Trabalho com ervas, flores, sais e plantas selecionadas para criar
              preparos que falam à pele, ao olfato e às emoções. Não é magia.
              é natureza organizada com intenção.
            </motion.p>

            <motion.div
              custom={5}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-4 pt-2"
            >
              <LeafOrnament className="w-6 h-9" />
              <p className="font-display text-botanical text-xl font-light italic">
                "Natureza como linguagem de cuidado."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
