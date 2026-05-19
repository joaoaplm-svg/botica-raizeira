"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, HandHeart, Eye, Feather, MessageCircle, ShieldCheck } from "lucide-react";

const differentials = [
  {
    icon: HandHeart,
    title: "Preparo Artesanal",
    description:
      "Cada produto é feito à mão, com atenção e intenção. Sem produção em larga escala, sem pressa.",
  },
  {
    icon: Leaf,
    title: "Curadoria de Ervas",
    description:
      "Ingredientes selecionados por qualidade, origem e potencial sensorial. Não por tendência.",
  },
  {
    icon: Eye,
    title: "Estética Premium Natural",
    description:
      "Beleza que respeita a matéria-prima. Visual cuidado, embalagem com intenção, presença que agrada.",
  },
  {
    icon: Feather,
    title: "Espiritualidade Leve",
    description:
      "Uma abordagem acolhedora, sem dogma. A natureza como linguagem, não como religião.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento com Cuidado",
    description:
      "Conversa real, ajuda na escolha e acompanhamento. Cada cliente é único.",
  },
  {
    icon: ShieldCheck,
    title: "Comunicação Responsável",
    description:
      "Sem promessas milagrosas. Honestidade sobre o que os produtos fazem e sobre o que não fazem.",
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 md:py-32 section-alt">
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
              Por que a Botica Raizeira
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-light text-botanical"
            >
              Nossos Diferenciais
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <hr className="gold-rule w-20" />
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-beige-deeper/40">
            {differentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="bg-beige p-8 flex flex-col gap-4 group hover:bg-warm-white transition-colors"
                >
                  <Icon
                    size={22}
                    className="text-sage group-hover:text-botanical transition-colors"
                    strokeWidth={1.2}
                  />
                  <h3 className="font-display text-xl font-light text-botanical leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm font-light leading-relaxed">
                    {item.description}
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
