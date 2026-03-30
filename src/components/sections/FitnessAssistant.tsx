
"use client";

import { useState } from "react";
import { Sparkles, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateFitnessAdvice } from "@/ai/flows/generate-fitness-advice";

const goals = [
  "Build Strength",
  "Lose Weight",
  "Improve Cardio",
  "Body Flexibility",
  "General Wellness",
];

export function FitnessAssistant() {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    if (!selectedGoal) return;
    setLoading(true);
    setAdvice("");
    try {
      const result = await generateFitnessAdvice({ goal: selectedGoal });
      setAdvice(result.advice);
    } catch (error) {
      setAdvice("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-accent/5">
      <div className="container mx-auto max-w-4xl">
        <Card className="rounded-none border-l-8 border-primary bg-secondary/30 overflow-hidden">
          <CardHeader className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-primary">
              <Sparkles className="w-5 h-5 fill-primary" />
              <span className="font-black uppercase tracking-[0.2em] text-sm">AI Powered</span>
            </div>
            <CardTitle className="text-3xl md:text-5xl font-black italic">FITNESS GOAL <span className="text-accent">ASSISTANT.</span></CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Choose your primary goal and let our AI provide a quick starting point for your journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`px-6 py-3 font-bold uppercase tracking-widest text-xs border transition-all ${
                    selectedGoal === goal
                      ? "bg-primary border-primary text-background"
                      : "bg-background/50 border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>

            <Button
              size="lg"
              disabled={!selectedGoal || loading}
              onClick={getAdvice}
              className="w-full md:w-auto px-10 h-14 font-black italic rounded-none"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {loading ? "GENERATING..." : "GET AI ADVICE"}
            </Button>

            {advice && (
              <div className="p-8 bg-background/80 border border-primary/20 animate-in fade-in slide-in-from-top-4">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground">
                  &ldquo;{advice}&rdquo;
                </p>
                <div className="mt-4 text-xs font-black uppercase tracking-widest text-primary italic">
                  Suggested for you at Strength Up Fitness
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
