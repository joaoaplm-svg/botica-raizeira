"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Flame, Wind, FlaskConical, Gift, Leaf } from "lucide-react";
import { categories } from "@/data/categories";

const iconMap: Record<string, React.ElementType> = {
  Droplets,
  Flame,
  Wind,
  FlaskConical,
  Gift,
  Leaf,
};

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="categorias" className="py-16 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="flex flex-col gap-16">
          {/* Cabeçalho da seção */}
          <div className="flex flex-col items-center text-center gap-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.4em] uppercase text-gold font-light"
            >
              O que você encontra aqui
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-botanical"
            >
              Categorias
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <hr className="gold-rule w-20" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-ink-muted font-light max-w-xl leading-relaxed"
            >
              Preparos artesanais organizados por tipo de ritual e experiência
              sensorial.
            </motion.p>
          </div>

          {/* Grid de categorias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const Icon = iconMap[cat.icon] ?? Leaf;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group border border-beige-dark hover:border-gold/40 bg-warm-white p-7 flex flex-col gap-4 cursor-default transition-all duration-300 hover:shadow-sm"
                >
                  {/* Ícone */}
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 group-hover:border-gold/60 transition-colors">
                    <Icon size={18} className="text-botanical group-hover:text-gold transition-colors" strokeWidth={1.2} />
                  </div>

                  {/* Nome */}
                  <h3 className="font-display text-xl font-light text-botanical tracking-tight">
                    {cat.name}
                  </h3>

                  {/* Linha */}
                  <hr className="gold-rule w-12 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Descrição */}
                  <p className="text-ink-muted text-sm font-light leading-relaxed">
                    {cat.description}
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
