import { GoogleGenAI } from "@google/genai";

export async function generateBackground() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A subtle, modern, abstract background for a university AI research website. Minimal, Professional, Academic, Clean, High-tech but elegant. Not futuristic sci-fi, no heavy neon. Soft blue to deep navy mesh gradient. Very subtle neural network lines in background, faint glowing nodes. Slight depth blur, soft particles or data dots. Clean negative space in center. No text, no logos, no hard patterns. Color palette: Deep navy (#0f172a), Blue gradient (#2563eb), Soft cyan highlights (#38bdf8), White subtle glow. Mood: Intelligent, Calm, Research-driven, Trustworthy, European research aesthetic, Horizon Europe style. Resolution: 1920x1080, Ultra high quality, Soft lighting, Smooth gradient blending.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
