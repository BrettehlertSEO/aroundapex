import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { subscribeToNewsletter, validateEmail } from "@/lib/mailchimp";
import apexHero from "@/assets/apex-hero.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to send you the newsletter!",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await subscribeToNewsletter({ email });
      
      if (result.success) {
        toast({
          title: "Welcome to Around Apex! 🎉",
          description: result.message,
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to subscribe at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${apexHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Everything
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Around Apex
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
            Get the inside scoop on everything happening in our community. 
            Weekly updates on local events, businesses, and neighborhood news.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-glow transition-all duration-300 hover:scale-105"
              >
                {isLoading ? "Joining..." : "Join Free"}
              </Button>
            </div>
          </form>

          <p className="text-sm opacity-80">
            📧 Free weekly newsletter • 🚫 No spam • ✨ Unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white/50 rounded-full" />
      </div>
    </section>
  );
};