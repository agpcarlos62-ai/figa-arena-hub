import { motion } from "framer-motion";
import {
  Swords,
  Shield,
  Flame,
  Target,
  Medal,
  Zap,
  Dumbbell,
  Wind,
  Music,
  ShieldCheck,
} from "lucide-react";

const modalities = [
  { name: "Jiu-Jitsu", icon: Swords, desc: "A arte suave da luta no solo" },
  { name: "Muay Thai", icon: Flame, desc: "A arte das oito armas" },
  { name: "Kickboxing", icon: Zap, desc: "Potência em pés e punhos" },
  { name: "Karatê", icon: Target, desc: "O caminho das mãos vazias" },
  { name: "Judô", icon: Medal, desc: "O caminho da suavidade" },
  { name: "Taekwondo", icon: Wind, desc: "A arte dos chutes" },
  { name: "MMA", icon: Dumbbell, desc: "Artes marciais mistas" },
  { name: "Kung Fu", icon: Shield, desc: "Tradição milenar chinesa" },
  { name: "Capoeira", icon: Music, desc: "Luta e cultura brasileira" },
  { name: "Defesa Pessoal", icon: ShieldCheck, desc: "Proteção e segurança" },
];

const ModalitiesSection = () => {
  return (
    <section id="modalidades" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Nossas <span className="text-primary">Modalidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {modalities.map((mod, i) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-card border border-border rounded-sm p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-default"
            >
              <mod.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-['Oswald'] text-sm uppercase tracking-wider font-semibold mb-1 text-foreground">
                {mod.name}
              </h3>
              <p className="text-xs text-muted-foreground">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
