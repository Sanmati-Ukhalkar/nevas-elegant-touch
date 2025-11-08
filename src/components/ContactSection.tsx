import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Neva's Salon, MG Road, Nashik",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon–Sun: 9:00 AM – 8:00 PM",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 9876543210",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-cream texture-overlay">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="font-poppins text-lg text-muted-foreground">
            We'd love to welcome you to our salon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-card rounded-3xl shadow-gold hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-poppins text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Book via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
