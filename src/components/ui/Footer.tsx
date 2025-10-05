import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import VinFinText from "./VinFinText";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                <span className="text-white">Vin</span>
                <span className="text-vinfin-light">Fin</span>
                <span className="text-primary-foreground ml-1">Consultancy Services</span>
              </span>
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner in financial success. Expert guidance for students, professionals, and businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/vinfin" 
                className="hover:text-accent transition-colors touch-target flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://instagram.com/vinfin" 
                className="hover:text-accent transition-colors touch-target flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://linkedin.com/company/vinfin" 
                className="hover:text-accent transition-colors touch-target flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://twitter.com/vinfin" 
                className="hover:text-accent transition-colors touch-target flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-1">Home</Link></li>
              <li><Link to="/about" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-1">About Us</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-1">Services</Link></li>
              <li><Link to="/apply" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-1">Apply</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-1">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
              <p className="break-words">Hyderabad, Telangana, India</p>
              <p><a href="tel:+919876543210" className="hover:text-accent transition-colors">+91-9876543210</a></p>
              <p className="break-all"><a href="mailto:info@vinfinconsultancy.com" className="hover:text-accent transition-colors">info@vinfinconsultancy.com</a></p>
              <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-primary-foreground/80 text-center md:text-left">
            © 2025 <span className="text-primary-foreground/80">
              <span className="text-white">Vin</span>
              <span className="text-vinfin-light">Fin</span>
              <span className="text-primary-foreground/80 ml-1">Consultancy Services</span>
            </span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/privacy" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs sm:text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/70 mb-2">
            BUILT BY <a 
              href="https://reviewrv25.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary-foreground hover:text-accent transition-colors"
            >
              REVIEW AI TECH AND SOLUTIONS
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 text-xs text-primary-foreground/60">
            <span className="hidden sm:inline">Need a website for yourself? Contact us now at</span>
            <span className="sm:hidden">Need a website? Contact:</span>
            <a href="mailto:business@reviewrv25.com" className="text-accent hover:underline break-all">
              business@reviewrv25.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+918341105135" className="text-accent hover:underline whitespace-nowrap">
              +91 8341105135
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href="https://reviewrv25.com/webpages/contact.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;