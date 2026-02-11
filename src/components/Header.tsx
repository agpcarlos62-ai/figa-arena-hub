import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoFilam from "@/assets/logo-filam.gif";

const navLinks = [
{ label: "Início", href: "#inicio" },
{ label: "Quem Somos", href: "#quem-somos" },
{ label: "Modalidades", href: "#modalidades" },
{ label: "Galeria", href: "#galeria" },
{ label: "Contato", href: "#contato" }];


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoFilam} alt="FILAM" className="h-12 w-auto" />
          <span className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-foreground">
            FILAM - FEDERAÇÃO INTERNACIONAL DE LUTAS E ARTES MARCIAIS        
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-['Oswald'] text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">

              {link.label}
            </a>
          )}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu">

          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-background border-b border-border">

            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-['Oswald'] text-lg uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">

                  {link.label}
                </a>
            )}
            </div>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

};

export default Header;