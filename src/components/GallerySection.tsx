import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const galleryItems = [
  { title: "Campeonato Internacional 2024", category: "Competição" },
  { title: "Seminário de Jiu-Jitsu", category: "Treinamento" },
  { title: "Graduação de Atletas", category: "Cerimônia" },
  { title: "Copa FILAM de Muay Thai", category: "Competição" },
  { title: "Workshop de Defesa Pessoal", category: "Treinamento" },
  { title: "Encontro Internacional", category: "Evento" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            <span className="text-primary">Galeria</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-video bg-secondary/50 border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <Camera className="w-10 h-10 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
                <h3 className="font-['Oswald'] text-sm uppercase tracking-wider font-semibold text-foreground">
                  {item.title}
                </h3>
                <span className="text-xs text-primary mt-1">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
