"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Início", href: "#topo" },
  { label: "A Marca", href: "#marca" },
  { label: "Filosofia", href: "#filosofia" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const WA_LINK =
  "https://wa.me/5521965647856?text=Olá!%20Vim%20pelo%20site%20da%20Botica%20Raizeira%20e%20gostaria%20de%20conhecer%20os%20produtos.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-beige/95 backdrop-blur-sm shadow-sm shadow-gold/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#topo" className="group">
            <Image
              src="/logo.jpeg"
              alt="Botica Raizeira"
              width={64}
              height={64}
              className="rounded-full object-cover transition-opacity group-hover:opacity-85"
              priority
            />
          </a>

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-ink-muted hover:text-botanical transition-colors font-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-botanical text-beige text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-botanical-light transition-colors font-light"
          >
            Fale pelo WhatsApp
          </a>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-botanical p-1"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-botanical-dark/50 z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-beige z-50 flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/logo.jpeg"
                  alt="Botica Raizeira"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-ink-muted hover:text-botanical transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm tracking-[0.2em] uppercase text-ink-muted hover:text-botanical transition-colors font-light border-b border-beige-dark pb-4"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <hr className="gold-rule mb-8" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-botanical text-beige text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-botanical-light transition-colors font-light w-full"
                >
                  Fale pelo WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
