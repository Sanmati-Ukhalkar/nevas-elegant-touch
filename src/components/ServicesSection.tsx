import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { getServices, Service } from "@/lib/services";

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(getServices());
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setServices(getServices());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("servicesUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("servicesUpdated", handleStorageChange);
    };
  }, []);

  return (
    <section id="services" className="py-12 md:py-20 px-4 bg-gradient-cream texture-overlay">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 relative inline-block">
            Our Services
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></span>
          </h2>
          <p className="font-poppins text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our carefully curated selection of premium beauty and wellness services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-2xl md:rounded-3xl shadow-gold hover:shadow-glow transition-all duration-300 border-0">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <span className="inline-block px-2.5 md:px-3 py-0.5 md:py-1 bg-primary/90 text-primary-foreground text-xs font-poppins rounded-full mb-1.5 md:mb-2">
                      {service.category}
                    </span>
                    <h3 className="font-poppins text-xl md:text-2xl font-bold text-white">
                      {service.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-card">
                  <p className="font-poppins text-sm md:text-base text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-xl md:text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
