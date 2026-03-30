
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const highlights = [
  "Friendly Trainers",
  "Good Workout Atmosphere",
  "Variety of Equipment",
  "Supportive Community",
];

export function About() {
  const aboutImg = PlaceHolderImages.find((img) => img.id === "about-gym");

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-none overflow-hidden border-r-8 border-b-8 border-primary">
            <Image
              src={aboutImg?.imageUrl || ""}
              alt={aboutImg?.description || "Gym weights"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              data-ai-hint={aboutImg?.imageHint}
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-black">MORE THAN JUST A <span className="text-accent italic">GYM.</span></h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strength Up Fitness is a dedicated local gym focused on helping members improve strength, fitness, and overall health in a supportive environment.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center space-x-3 p-4 bg-secondary/50 border border-border">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
