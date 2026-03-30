
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const galleryImages = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5", "gallery-6"
];

export function Gallery() {
  return (
    <section className="section-padding">
      <div className="container mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Our Facility</h2>
          <h3 className="text-4xl md:text-6xl font-black">GYM <span className="text-accent italic">PREVIEW.</span></h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((id) => {
            const img = PlaceHolderImages.find((i) => i.id === id);
            return (
              <div key={id} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img?.imageUrl || ""}
                  alt={img?.description || "Gym gallery"}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={img?.imageHint}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-background font-black text-xl uppercase tracking-tighter italic">Strength Up</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
