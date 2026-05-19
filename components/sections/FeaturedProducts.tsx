"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { featuredProducts } from "@/data/products";

const WA_BASE =
  "https://wa.me/5521965647856?text=Olá!%20Tenho%20interesse%20no%20produto%3A%20";

export default function FeaturedProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="produtos" className="py-16 md:py-32 section-alt">
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
              Destaques da Botica
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-botanical"
            >
              Produtos em Destaque
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <hr className="gold-rule w-20" />
            </motion.div>
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {featuredProducts.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="group flex flex-col bg-warm-white border border-beige-deeper/60 hover:border-gold/30 transition-all duration-400 hover:shadow-md"
              >
                {/* Imagem do produto */}
                <div
                  className="aspect-square md:aspect-[4/5] relative overflow-hidden"
                  style={{ background: product.image ? undefined : product.imagePlaceholder }}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
                      <svg viewBox="0 0 60 80" fill="none" className="w-12 h-16" aria-hidden="true">
                        <path d="M30 75 C30 75 29 50 30 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                        <ellipse cx="30" cy="38" rx="14" ry="22" fill="none" stroke="white" strokeWidth="0.9" />
                      </svg>
                      <p className="text-white text-xs tracking-widest font-light">[foto]</p>
                    </div>
                  )}

                  {/* Tag categoria */}
                  <span className="absolute top-3 left-3 bg-warm-white/90 text-botanical text-xs tracking-[0.15em] uppercase px-2.5 py-1 font-light">
                    {product.category}
                  </span>
                </div>

                {/* Conteúdo do card */}
                <div className="flex flex-col gap-2 p-3 md:p-5 flex-1">
                  <h3 className="font-display text-base md:text-xl font-light text-botanical leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-ink-muted text-sm font-light leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Ingredientes como tags */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {product.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="text-xs text-ink-light border border-beige-deeper/80 px-2 py-0.5 font-light"
                      >
                        {ing}
                      </span>
                    ))}
                    {product.ingredients.length > 3 && (
                      <span className="text-xs text-ink-light font-light px-1">
                        +{product.ingredients.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Indicação sensorial */}
                  <p className="text-xs text-sage font-light italic border-l-2 border-sage/30 pl-3 mt-1 leading-relaxed">
                    {product.sensorialNote}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-3">
                    <a
                      href={`${WA_BASE}${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center border border-botanical text-botanical text-xs tracking-[0.2em] uppercase py-2.5 hover:bg-botanical hover:text-beige transition-colors font-light"
                    >
                      Pedir pelo WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Link para ver mais */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <a
              href="https://wa.me/5521965647856?text=Olá!%20Gostaria%20de%20ver%20o%20catálogo%20completo%20da%20Botica%20Raizeira."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-[0.3em] uppercase text-ink-muted hover:text-botanical transition-colors font-light border-b border-gold/40 pb-0.5"
            >
              Ver catálogo completo pelo WhatsApp →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
