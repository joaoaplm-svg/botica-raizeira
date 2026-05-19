import { MessageCircle } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const WA_LINK = "https://wa.me/5521965647856";
const IG_LINK = "https://www.instagram.com/boticaraizeira";

const navLinks = [
  { label: "Início", href: "#topo" },
  { label: "A Marca", href: "#marca" },
  { label: "Filosofia", href: "#filosofia" },
  { label: "Produtos", href: "#produtos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-botanical-dark text-sage-light">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna da marca */}
          <div className="flex flex-col gap-5">
            <div>
              <Image
                src="/logo.jpeg"
                alt="Botica Raizeira"
                width={72}
                height={72}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-sage-light/80 max-w-xs">
              Fitoterapia, banhos botânicos e preparos artesanais para rituais
              de autocuidado e bem-estar sensorial.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-sage/30 flex items-center justify-center hover:border-gold/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-sage/30 flex items-center justify-center hover:border-gold/60 hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} strokeWidth={1.2} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-light mb-2">
              Navegação
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light text-sage-light/70 hover:text-sage-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-light mb-2">
              Fale comigo
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-sage-light/70 hover:text-sage-light transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-sage-light/70 hover:text-sage-light transition-colors"
            >
              @boticaraizeira
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <hr className="gold-rule opacity-20 mb-8" />

        {/* Rodapé inferior */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-xs font-light text-sage-light/50">
            © {new Date().getFullYear()} Botica Raizeira. Todos os direitos
            reservados.
          </p>
          <p className="text-xs font-light text-sage-light/40 max-w-sm text-left sm:text-right leading-relaxed">
            Produtos para autocuidado e bem-estar sensorial. Não substituem
            orientação médica, psicológica ou terapêutica.
          </p>
        </div>
      </div>
    </footer>
  );
}
