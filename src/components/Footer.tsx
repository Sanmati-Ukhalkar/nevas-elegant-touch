import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground/95 text-background py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-poppins text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">
              Neva's Salon
            </h3>
            <p className="font-poppins text-xs md:text-sm opacity-80">
              Where Beauty Meets Elegance
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-poppins text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-xs md:text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition-colors active:text-primary/80">
                  Services
                </a>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary transition-colors active:text-primary/80">
                  Staff Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-poppins text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com/nevasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors active:text-primary/80 p-2 -m-2"
              >
                <Instagram className="w-6 h-6 md:w-6 md:h-6" />
              </a>
              <a
                href="https://facebook.com/nevasalon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors active:text-primary/80 p-2 -m-2"
              >
                <Facebook className="w-6 h-6 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 md:pt-8 text-center">
          <p className="font-poppins text-xs md:text-sm opacity-70 px-4">
            © 2025 Neva's Salon. Designed with grace and detail.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
