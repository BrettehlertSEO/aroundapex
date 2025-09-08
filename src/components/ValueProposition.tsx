import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Heart } from "lucide-react";

export const ValueProposition = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Weekly Updates",
      description: "Every Thursday, get a curated roundup of what's happening in Apex this week and upcoming events."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Businesses",
      description: "Discover new restaurants, shops, and services. Support our local entrepreneurs and hidden gems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Events",
      description: "Never miss a farmers market, festival, town hall meeting, or neighborhood gathering again."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Neighbor to Neighbor",
      description: "Written by locals, for locals. Real stories and insights from people who call Apex home."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Join Around Apex?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're more than just a newsletter – we're your connection to the heart of Apex
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
              Join 500+ Apex Neighbors
            </h3>
            <p className="text-muted-foreground mb-6">
              "I love how Around Apex keeps me in the loop about everything happening in our town. 
              It's like having a neighbor who knows everyone and everything!" 
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white" />
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full border-2 border-white" />
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-white" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                - Sarah M., Apex Resident
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};