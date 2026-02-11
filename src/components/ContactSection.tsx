import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            <span className="text-primary">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8">

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-['Oswald'] uppercase tracking-wider text-sm font-semibold mb-1">E-mail</h3>
                <p className="text-muted-foreground">filam.organizacao@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-['Oswald'] uppercase tracking-wider text-sm font-semibold mb-1">Telefone</h3>
                <p className="text-muted-foreground">+55 (21) 96863-0097</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-['Oswald'] uppercase tracking-wider text-sm font-semibold mb-1">Localização</h3>
                <p className="text-muted-foreground">Sede Internacional —
Rio de Janeiro, Brasil
Cubai - Emirados Árabes</p>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}>

            <input
              type="text"
              placeholder="Seu nome"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />

            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />

            <textarea
              rows={4}
              placeholder="Sua mensagem"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 font-['Oswald'] uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors rounded-sm">

              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>);

};

export default ContactSection;