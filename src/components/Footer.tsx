import logoFilam from "@/assets/logo-filam.gif";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoFilam} alt="FILAM" className="h-10 w-auto" />
            <span className="font-['Oswald'] text-lg font-bold uppercase tracking-wider text-foreground">
              FILAM
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {["Início", "Quem Somos", "Modalidades", "Galeria", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FILAM — Federação Internacional de Lutas e Artes Marciais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
