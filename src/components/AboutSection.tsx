import { motion } from "framer-motion";
import aboutImage from "@/assets/about-salon.jpg";
const AboutSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-background/80">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-gold">
              <img src={aboutImage} alt="Neva's Hair & Beauty Lounge Interior" className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-glow">
              <p className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold">10+</p>
              <p className="font-poppins text-xs md:text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 relative inline-block">
            About Us
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"></span>
          </h2>
            <div className="space-y-3 md:space-y-4 font-poppins text-base md:text-lg text-muted-foreground">
              <p>
                Luxury. Comfort. Style. 15+ professionals. Personalized care, modern looks.
              </p>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/50">
                <p className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">500+</p>
                <p className="font-poppins text-xs md:text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/50">
                <p className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">5+</p>
                <p className="font-poppins text-xs md:text-sm text-muted-foreground">Expert Staff</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/50">
                <p className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">20+</p>
                <p className="font-poppins text-xs md:text-sm text-muted-foreground">Services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;