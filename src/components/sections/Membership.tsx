
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym Access", "Locker Facility", "Cardio Training"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹1499",
    features: ["Gym Access", "Locker Facility", "Cardio Training", "Personal Consultation", "Strength Training"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1999",
    features: ["Unlimited Access", "Locker Facility", "Cardio & Strength", "Personal Training", "Diet Plan Assistance"],
    popular: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="section-padding bg-secondary/20">
      <div className="container mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary italic">Plans</h2>
          <h3 className="text-4xl md:text-6xl font-black">SELECT YOUR <span className="text-accent italic">TIER.</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative rounded-none border-t-8 flex flex-col ${
                plan.popular ? "border-primary scale-105 z-10 shadow-2xl bg-card" : "border-border bg-secondary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-xs font-black uppercase tracking-widest px-4 py-1">
                  Best Value
                </div>
              )}
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-3xl font-black">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-black text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-10 pt-6">
                <Button
                  className={`w-full h-12 text-lg font-bold rounded-none ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
                  }`}
                  asChild
                >
                  <a href="https://wa.me/918879741567">Get Started</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
