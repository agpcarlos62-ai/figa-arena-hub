import { motion } from "framer-motion";
import { Globe, Users, Trophy, Swords } from "lucide-react";

const stats = [
  { icon: Globe, value: "30+", label: "Países" },
  { icon: Users, value: "+5.000", label: "Atletas" },
  { icon: Trophy, value: "100+", label: "Eventos" },
  { icon: Swords, value: "+15", label: "Modalidades" },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            A FILAM — Federação Internacional de Lutas e Artes Marciais — é uma entidade dedicada
            ao desenvolvimento, regulamentação e promoção das artes marciais em âmbito internacional.
            Com presença em mais de 30 países, trabalhamos para unir atletas, treinadores e
            federações sob os valores da disciplina, respeito e excelência esportiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold font-['Oswald'] text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
