import { Heart } from "lucide-react";

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
          <p className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60">
            Made with <Heart className="w-4 h-4 text-accent" /> for the Apex community
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            © 2025 Around Apex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};