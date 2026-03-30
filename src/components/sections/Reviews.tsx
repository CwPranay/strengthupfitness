
import { Star, Quote } from "lucide-react";

const reviews = [
  { text: "Best gym with good ambience and atmosphere", author: "Rahul M." },
  { text: "Machines are modern and easy to use", author: "Sneha K." },
  { text: "Great place for strength training and fitness", author: "Ajay S." },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="container mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase">MEMBER <span className="text-accent">VOICES.</span></h3>
          
          <div className="inline-flex items-center space-x-2 bg-primary px-6 py-2 rounded-none">
            <span className="text-background font-black text-2xl">4.7</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-background text-background" />
              ))}
            </div>
            <span className="text-background font-bold text-sm ml-2">Google Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-background p-10 relative border-l-4 border-primary shadow-xl">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-xl font-medium leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-primary" />
                <span className="font-black uppercase tracking-widest text-sm text-primary">{review.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
