import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Oussema Chouikha. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Tunisia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;