import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-primary text-primary-foreground" style={isHomePage ? {transform: 'translateY(-20%)'} : {}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Yuliia Cheporska Studio</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professionelle Kosmetik-, Laser- und Wellnessbehandlungen in München
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-rose-gold" />
                <a
                  href="https://maps.app.goo.gl/EV635LLg4rmykZ2e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
                >
                  Elsässer Straße 33, 81667 München
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-rose-gold" />
                <a 
                  href="tel:+4915206067810" 
                  className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
                >
                  +49 152 06067810
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-rose-gold" />
                <a 
                  href="mailto:Yulachip@icloud.com" 
                  className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
                >
                  Yulachip@icloud.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="flex flex-col space-y-2">
              <Link
                to="/kontakt"
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                Kontakt & Anfahrt
              </Link>
              <Link
                to="/impressum"
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutzerklaerung"
                className="text-sm text-primary-foreground/80 hover:text-rose-gold transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © 2024 Yuliia Cheporska Studio. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;