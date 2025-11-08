import { motion } from "framer-motion";
import aboutImage from "@/assets/about-salon.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background/80">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-gold">
              <img
                src={aboutImage}
                alt="Neva's Salon Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-3xl shadow-glow"
            >
              <p className="font-poppins text-5xl font-bold">10+</p>
              <p className="font-poppins text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            About Us
          </h2>
            <div className="space-y-4 font-poppins text-lg text-muted-foreground">
              <p>
                At Neva's Salon, we specialize in delivering premium salon experiences with attention to every detail. Our curated menu offers a touch of luxury for every guest.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl bg-secondary/50">
                <p className="font-poppins text-3xl font-bold text-primary mb-1">500+</p>
                <p className="font-poppins text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-secondary/50">
                <p className="font-poppins text-3xl font-bold text-primary mb-1">15+</p>
                <p className="font-poppins text-sm text-muted-foreground">Expert Staff</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-secondary/50">
                <p className="font-poppins text-3xl font-bold text-primary mb-1">20+</p>
                <p className="font-poppins text-sm text-muted-foreground">Services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
