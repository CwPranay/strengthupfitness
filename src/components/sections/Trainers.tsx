
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const trainers = [
  {
    name: "Vikram Singh",
    role: "Head Strength Coach",
    imgId: "trainer-1",
  },
  {
    name: "Arjun Deshmukh",
    role: "Bodybuilding Specialist",
    imgId: "trainer-2",
  },
];

export function Trainers() {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="container mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Expert Staff</h2>
          <h3 className="text-4xl md:text-6xl font-black">ELITE <span className="text-accent italic">COACHES.</span></h3>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {trainers.map((trainer) => {
            const img = PlaceHolderImages.find((i) => i.id === trainer.imgId);
            return (
              <div key={trainer.name} className="w-full max-w-sm group space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden border-l-4 border-primary">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={trainer.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-ai-hint={img?.imageHint}
                  />
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-3xl font-black">{trainer.name}</h4>
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">{trainer.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
