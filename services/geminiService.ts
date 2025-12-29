import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ProjectBrief } from '../types';

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    throw new Error("API Key is required");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCreativeBrief = async (
  projectDescription: string,
  industry: string
): Promise<ProjectBrief> => {
  const ai = getAiClient();

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      summary: {
        type: Type.STRING,
        description: "A professional executive summary of the project based on the user's rough description.",
      },
      recommendedStyle: {
        type: Type.STRING,
        description: "The recommended 3D animation style (e.g., Photorealistic, Low Poly, Abstract Motion Graphics) with a short rationale.",
      },
      estimatedTimeline: {
        type: Type.STRING,
        description: "A realistic estimated timeline range (e.g., 2-4 weeks).",
      },
      technicalRequirements: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of likely technical assets or requirements needed (e.g., CAD files, Brand Guidelines, Storyboard).",
      },
      budgetTier: {
        type: Type.STRING,
        description: "Estimated budget tier (e.g., $$ - Moderate, $$$ - Premium) based on complexity.",
      },
    },
    required: ["summary", "recommendedStyle", "estimatedTimeline", "technicalRequirements", "budgetTier"],
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Act as a Senior Creative Director for a high-end 3D animation studio (Austin Visuals).
        The client belongs to the ${industry} industry.
        Their rough project idea is: "${projectDescription}".

        Analyze this request and generate a structured preliminary creative brief.
        Be professional, encouraging, and realistic about 3D production standards.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: "You are an expert 3D production consultant. Your goal is to turn vague client ideas into actionable, professional production briefs.",
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as ProjectBrief;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};