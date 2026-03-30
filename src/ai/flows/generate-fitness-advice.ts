'use server';
/**
 * @fileOverview A Genkit flow that provides concise fitness advice or a basic exercise recommendation
 * based on a user's selected fitness goal.
 *
 * - generateFitnessAdvice - A function that handles the generation of fitness advice.
 * - GenerateFitnessAdviceInput - The input type for the generateFitnessAdvice function.
 * - GenerateFitnessAdviceOutput - The return type for the generateFitnessAdvice function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateFitnessAdviceInputSchema = z.object({
  goal: z
    .string()
    .describe(
      "The user's primary fitness goal, e.g., \"build strength\", \"improve cardio\", \"lose weight\"."
    ),
});
export type GenerateFitnessAdviceInput = z.infer<
  typeof GenerateFitnessAdviceInputSchema
>;

const GenerateFitnessAdviceOutputSchema = z.object({
  advice: z
    .string()
    .describe('A concise piece of AI-generated advice or a basic exercise recommendation.'),
});
export type GenerateFitnessAdviceOutput = z.infer<
  typeof GenerateFitnessAdviceOutputSchema
>;

export async function generateFitnessAdvice(
  input: GenerateFitnessAdviceInput
): Promise<GenerateFitnessAdviceOutput> {
  return generateFitnessAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFitnessAdvicePrompt',
  input: { schema: GenerateFitnessAdviceInputSchema },
  output: { schema: GenerateFitnessAdviceOutputSchema },
  prompt: `You are a highly knowledgeable fitness expert at Strength Up Fitness. Your goal is to provide concise, actionable advice or a basic exercise recommendation based on the user's primary fitness goal.

Keep the advice brief (1-2 sentences) and encouraging. Focus on a single, clear recommendation or tip.

User's Fitness Goal: {{{goal}}}`,
});

const generateFitnessAdviceFlow = ai.defineFlow(
  {
    name: 'generateFitnessAdviceFlow',
    inputSchema: GenerateFitnessAdviceInputSchema,
    outputSchema: GenerateFitnessAdviceOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
