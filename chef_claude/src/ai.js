// ai.js

// Import the HfInference class from the Hugging Face Inference library
// Make sure you have installed this: npm install @huggingface/inference
import { HfInference } from '@huggingface/inference';

// --- API Key Initialization ---
// ⚠️ SECURITY NOTE: We are using import.meta.env to access the key loaded by Vite.
// This is ONLY safe for local development, as Vite exposes these keys to the browser.
// When deploying to a live website, this call MUST be moved to a secure backend server.
const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;

// Initialize the Hugging Face Inference client
const hf = new HfInference(HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`;

/**
 * Generates a recipe recommendation using the Mistral AI model based on the provided ingredients.
 * @param {string[]} ingredientsArr - An array of ingredients provided by the user.
 * @returns {Promise<string>} The generated recipe formatted in markdown text.
 */
export async function getRecipeFromMistral(ingredientsArr) {
    if (!HF_ACCESS_TOKEN) {
        return "ERROR: AI Model Key not found. Please check your .env file.";
    }
    
    const ingredientsString = ingredientsArr.join(", ");

    try {
        // You can use a smaller, faster model if performance is an issue:
        // const MODEL_NAME = "mistralai/Mistral-7B-Instruct-v0.1";
        const MODEL_NAME = "HuggingFaceH4/zephyr-7b-beta";

        const response = await hf.chatCompletion({
            model: MODEL_NAME, 
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe.` }
            ],
            parameters: {
                max_tokens: 1024,
                temperature: 0.7,
            }
        });

        const recipeText = response.choices[0]?.message?.content;

        if (!recipeText) {
            throw new Error("AI did not return a valid recipe text.");
        }

        return recipeText;

    } catch (error) {
        console.error("Error fetching recipe from Hugging Face AI:", error);
        // Ensure you return a helpful message if the model call fails
        return "Sorry, I couldn't fetch a recipe right now. Check your network connection or API key.";
    }
}
