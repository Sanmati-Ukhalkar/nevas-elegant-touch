import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2b1d17] text-[#d6c0a6] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              Neva's Salon
            </h3>
            <p className="font-poppins text-sm opacity-80">
              Where Beauty Meets Elegance
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary transition-colors">
                  Staff Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nevasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/nevasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d6c0a6]/20 pt-8 text-center">
          <p className="font-poppins text-sm opacity-70">
            © 2025 Neva's Salon. Designed with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
