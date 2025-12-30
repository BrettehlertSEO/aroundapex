import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Around Apex</h3>
          <p className="text-primary-foreground/80 max-w-md mx-auto">
            Your connection to everything happening around Apex, NC
          </p>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60 mb-2">
            <Link 
              to="/privacy-policy" 
              className="hover:text-primary-foreground transition-colors underline"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <span>Made with <Heart className="w-4 h-4 text-accent inline" /> for the Apex community</span>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © 2025 Around Apex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};