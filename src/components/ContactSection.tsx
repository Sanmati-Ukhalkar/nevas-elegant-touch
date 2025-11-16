import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Neva's Hair & Beauty Lounge, Chandwad, MH",
      link: "https://maps.app.goo.gl/cN2UxzrGfkLbdr2e8",
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Sunday – Friday: 9:00 AM – 8:00 PM. Saturday Closed.",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 70404 20562",
      link: "tel:+917040420562",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-cream texture-overlay">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 relative inline-block">
            Visit Us
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></span>
          </h2>
          <p className="font-poppins text-base md:text-lg text-muted-foreground px-4">
            We'd love to welcome you to our salon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 bg-card rounded-2xl md:rounded-3xl shadow-gold hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-4">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-gold" />
              </div>
              <h3 className="font-poppins text-lg md:text-xl font-bold text-foreground mb-1.5 md:mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-poppins text-sm md:text-base text-muted-foreground hover:text-gold transition-colors"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="font-poppins text-sm md:text-base text-muted-foreground">{item.detail}</p>
              )}
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
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-poppins px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-full shadow-glow transition-all hover:scale-105 hover:ring-2 hover:ring-gold active:scale-95 min-h-[48px]"
            onClick={() => window.open("https://wa.me/917040420562?text=Hi%20Neva%27s%20Hair%20%26%20Beauty%20Lounge!%20I%20am%20%5BCustomer%20Name%5D%20and%20would%20like%20to%20book%20an%20appointment.", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Message Us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
