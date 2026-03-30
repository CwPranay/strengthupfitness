
import { Users, Star, Dumbbell, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Active Members", value: "90+", icon: Users },
  { label: "Rating", value: "4.7 ⭐", icon: Star },
  { label: "Equipment", value: "Modern", icon: Dumbbell },
  { label: "Trainers", value: "Expert", icon: ShieldCheck },
];

export function Trust() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center text-background">
              <stat.icon className="w-8 h-8 mb-3 opacity-80" />
              <span className="text-3xl md:text-4xl font-black">{stat.value}</span>
              <span className="text-sm font-bold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
