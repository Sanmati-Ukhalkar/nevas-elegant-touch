import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-card/90 backdrop-blur-sm shadow-md py-3 px-4 md:py-4 md:px-6 sticky top-0 z-50"
    >
      <div className="container mx-auto max-w-7xl text-center">
        <h1 className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-0.5 md:mb-1">
          Neva's Salon
        </h1>
        <p className="font-poppins text-xs md:text-sm lg:text-base text-muted-foreground font-light">
          Elegance in Every Detail
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
