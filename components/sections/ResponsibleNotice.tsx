"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Info } from "lucide-react";

export default function ResponsibleNotice() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="py-14 bg-botanical">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 items-start"
        >
          <Info
            size={18}
            className="text-sage-light flex-shrink-0 mt-0.5"
            strokeWidth={1.2}
          />
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-light">
              Uso Consciente e Responsável
            </p>
            <p className="text-sage-light text-sm font-light leading-relaxed">
              Os produtos da Botica Raizeira são desenvolvidos para fins de
              autocuidado, bem-estar sensorial e experiência com a natureza.{" "}
              <strong className="font-normal text-beige/80">
                Não substituem orientação médica, psicológica, nutricional ou
                terapêutica.
              </strong>{" "}
              Em caso de condições de saúde, use apenas com acompanhamento
              profissional. Para uso em gestantes, lactantes ou crianças,
              consulte um profissional antes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
