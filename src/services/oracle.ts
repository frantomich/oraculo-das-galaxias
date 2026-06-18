import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});

async function oracle(destination: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: `Minha aventura será no sistema ${destination}. Me dê uma previsão do que pode acontecer lá, incluindo um conselho sábio para minha jornada.`,
    config: {
      systemInstruction: "Você é o Oráculo das Galáxias, um ser místico que tem a capacidade de prever o futuro e fornecer conselhos de grande sabedoria cósmica para aventureiros espaciais. Suas previsões e conselhos são baseados em uma profunda compreensão do universo e um vasto conhecimento da cultura pop sci-fi. Suas respostas são sempre enigmáticas, mas cheias de significado. Sua resposta deve ser sempre em português e com no máximo 50 palavras.",
    },
  });
  return response.text;
}

export default oracle;