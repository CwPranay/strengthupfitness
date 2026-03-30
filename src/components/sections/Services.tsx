
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const services = [
  {
    title: "Strength Training",
    desc: "Build muscle and improve bone density with our expert equipment and guidance.",
    imgId: "service-strength",
  },
  {
    title: "Cardio Training",
    desc: "Boost your heart health and stamina with our modern cardiovascular machines.",
    imgId: "service-cardio",
  },
  {
    title: "Weight Loss",
    desc: "Dedicated weight management plans tailored to your specific body goals.",
    imgId: "gallery-1",
  },
  {
    title: "Personal Coaching",
    desc: "One-on-one sessions with professional trainers to accelerate your results.",
    imgId: "trainer-1",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Services</h2>
          <h3 className="text-4xl md:text-6xl font-black">WHAT WE <span className="text-accent italic">OFFER.</span></h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const img = PlaceHolderImages.find((i) => i.id === service.imgId);
            return (
              <div key={service.title} className="group relative overflow-hidden bg-secondary/30">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    data-ai-hint={img?.imageHint}
                  />
                </div>
                <div className="p-8 space-y-2">
                  <h4 className="text-2xl font-black group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
