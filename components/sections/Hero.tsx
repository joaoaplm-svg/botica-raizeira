"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/5521965647856?text=Olá!%20Vim%20pelo%20site%20da%20Botica%20Raizeira%20e%20gostaria%20de%20conhecer%20os%20produtos.";

/* SVG botânico decorativo inline */
function BotanicalSVG() {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Hastes */}
      <path d="M210 480 C210 480 208 320 210 160" stroke="#2D4A3E" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M210 340 C180 310 140 305 110 310" stroke="#2D4A3E" strokeWidth="1" strokeLinecap="round" />
      <path d="M210 290 C240 265 280 258 308 265" stroke="#2D4A3E" strokeWidth="1" strokeLinecap="round" />
      <path d="M210 380 C185 355 155 352 132 358" stroke="#7A9E8E" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M210 240 C235 218 265 212 290 218" stroke="#7A9E8E" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M210 420 C230 400 260 396 282 402" stroke="#2D4A3E" strokeWidth="0.7" strokeLinecap="round" />

      {/* Folhas esquerdas */}
      <ellipse cx="110" cy="308" rx="28" ry="12" transform="rotate(-20 110 308)" fill="#2D4A3E" opacity="0.15" />
      <ellipse cx="108" cy="307" rx="22" ry="9" transform="rotate(-20 108 307)" fill="none" stroke="#2D4A3E" strokeWidth="0.8" />
      <ellipse cx="132" cy="356" rx="22" ry="9" transform="rotate(-25 132 356)" fill="#7A9E8E" opacity="0.12" />
      <ellipse cx="130" cy="355" rx="17" ry="7" transform="rotate(-25 130 355)" fill="none" stroke="#7A9E8E" strokeWidth="0.7" />

      {/* Folhas direitas */}
      <ellipse cx="308" cy="263" rx="28" ry="12" transform="rotate(15 308 263)" fill="#2D4A3E" opacity="0.15" />
      <ellipse cx="306" cy="262" rx="22" ry="9" transform="rotate(15 306 262)" fill="none" stroke="#2D4A3E" strokeWidth="0.8" />
      <ellipse cx="282" cy="400" rx="22" ry="9" transform="rotate(20 282 400)" fill="#7A9E8E" opacity="0.12" />
      <ellipse cx="280" cy="399" rx="17" ry="7" transform="rotate(20 280 399)" fill="none" stroke="#7A9E8E" strokeWidth="0.7" />
      <ellipse cx="290" cy="216" rx="18" ry="7" transform="rotate(12 290 216)" fill="none" stroke="#2D4A3E" strokeWidth="0.7" />

      {/* Flores / botões */}
      <circle cx="210" cy="155" r="14" fill="#C9B8D4" opacity="0.5" />
      <circle cx="210" cy="155" r="8" fill="#C9B8D4" opacity="0.7" />
      <circle cx="210" cy="155" r="3" fill="#A899B6" />

      {/* Pequenos detalhes */}
      <circle cx="174" cy="330" r="3" fill="#C9A96E" opacity="0.6" />
      <circle cx="248" cy="282" r="3" fill="#C9A96E" opacity="0.6" />
      <circle cx="160" cy="378" r="2" fill="#C9B8D4" opacity="0.5" />
      <circle cx="265" cy="410" r="2" fill="#C9B8D4" opacity="0.5" />

      {/* Linha de solo decorativa */}
      <path d="M120 482 C165 478 255 478 300 482" stroke="#C9A96E" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay } as { duration: number; delay: number },
  }),
};

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative bg-beige overflow-hidden md:min-h-screen md:flex md:items-center"
    >
      {/* Gradiente de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(122,158,142,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(201,184,212,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* ── MOBILE: logo centralizada em cima, texto embaixo ── */}
        <div className="md:hidden flex flex-col items-center pt-20 pb-6 gap-5">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-48 h-48"
          >
            <Image
              src="/logo.jpeg"
              alt="Botica Raizeira"
              fill
              className="object-contain drop-shadow-lg rounded-full"
              priority
            />
          </motion.div>

          {/* Texto */}
          <div className="flex flex-col gap-4 w-full">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-[10px] tracking-[0.35em] uppercase text-gold font-light text-center"
            >
              Fitoterapia · Autocuidado · Ritual Natural
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="font-display text-5xl font-light text-botanical leading-[0.95] tracking-tight text-center"
            >
              Ritual.
              <br />
              <span className="italic text-sage">Natureza.</span>
              <br />
              Presença.
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <hr className="gold-rule w-16" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="text-ink-muted text-sm leading-relaxed font-light text-center"
            >
              Preparos artesanais de ervas, banhos botânicos e produtos naturais
              para momentos de cuidado consciente.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="flex gap-3 justify-center flex-wrap"
            >
              <a
                href="#produtos"
                className="bg-botanical text-beige text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-botanical-light transition-colors font-light"
              >
                Conhecer os produtos
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-botanical text-botanical text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-botanical hover:text-beige transition-colors font-light"
              >
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── DESKTOP: grid 2 colunas ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center py-16">
          {/* Conteúdo textual */}
          <div className="flex flex-col gap-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-xs tracking-[0.4em] uppercase text-gold font-light"
            >
              Fitoterapia · Autocuidado · Ritual Natural
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="font-display text-7xl lg:text-8xl font-light text-botanical leading-[0.95] tracking-tight"
            >
              Ritual.
              <br />
              <span className="italic text-sage">Natureza.</span>
              <br />
              Presença.
            </motion.h1>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
              <hr className="gold-rule w-24" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="text-ink-muted text-base leading-relaxed font-light max-w-md"
            >
              Preparos artesanais de ervas, banhos botânicos e produtos naturais
              para momentos de cuidado consciente e reconexão com a natureza.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#produtos"
                className="bg-botanical text-beige text-xs tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-botanical-light transition-colors font-light inline-block"
              >
                Conhecer os produtos
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-botanical text-botanical text-xs tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-botanical hover:text-beige transition-colors font-light inline-block"
              >
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Logo hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "min(480px, 95vw)",
                height: "min(480px, 95vw)",
                background:
                  "radial-gradient(circle, rgba(201,169,110,0.10) 0%, rgba(201,184,212,0.06) 45%, transparent 70%)",
              }}
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[340px] h-[340px]"
            >
              <Image
                src="/logo.jpeg"
                alt="Botica Raizeira — Árvore da Vida"
                fill
                className="object-contain drop-shadow-lg rounded-full"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-warm-white border border-gold/30 px-5 py-3 shadow-sm whitespace-nowrap"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-gold font-light text-center">
                Preparo Artesanal
              </p>
              <p className="font-display text-botanical text-base font-light mt-0.5 text-center">
                com intenção
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Seta scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-ink-light font-light">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
