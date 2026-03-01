import { motion } from "framer-motion";
import gallery1 from "@/assets/ARTHUR.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { title: "Campeonato Internacional 2024", category: "Competição", image: gallery1 },
  { title: "Seminário de Jiu-Jitsu", category: "Treinamento", image: gallery2 },
  { title: "Graduação de Atletas", category: "Cerimônia", image: gallery3 },
  { title: "Copa FILAM de Muay Thai", category: "Competição", image: gallery4 },
  { title: "Workshop de Defesa Pessoal", category: "Treinamento", image: gallery5 },
  { title: "Encontro Internacional", category: "Evento", image: gallery6 },
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
              className="group relative aspect-video rounded-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
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
