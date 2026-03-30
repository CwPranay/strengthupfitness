
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Gym interior"}
          fill
          className="object-cover object-center grayscale-[0.2]"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-left">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight animate-in fade-in slide-in-from-left-10 duration-700">
              BUILD <span className="text-primary italic">STRENGTH.</span><br />
              BUILD <span className="text-accent italic">DISCIPLINE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
              Train at Strength Up Fitness – Your Local Gym in Kalyan. Modern facilities, elite atmosphere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 rounded-none shadow-xl shadow-primary/20" asChild>
              <a href="https://wa.me/918879741567" target="_blank">
                <MessageCircle className="w-6 h-6 mr-2" />
                Join Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 rounded-none hover:bg-white/5" asChild>
              <a href="tel:8879741567">
                <Phone className="w-6 h-6 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center p-1">
          <div className="w-1.5 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
