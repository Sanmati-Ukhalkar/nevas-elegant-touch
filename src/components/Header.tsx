import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-card/90 backdrop-blur-sm shadow-md py-3 px-4 md:py-4 md:px-6 sticky top-0 z-50"
    >
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center">
        <img 
          src={logo} 
          alt="Neva's Salon" 
          className="h-12 md:h-16 lg:h-20 w-auto"
        />
      </div>
    </motion.header>
  );
};

export default Header;
