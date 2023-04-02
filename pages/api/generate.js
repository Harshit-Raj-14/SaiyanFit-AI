import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "";
const generateAction = async (req, res) => {
  // Run first prompt
  //console.log(`API: ${basePromptPrefix}${req.body.userInput}`)
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,

    prompt: `name : ${req.body.name}
    Height : ${req.body.height} cm
    Weight : ${req.body.weight} kg
    Age : ${req.body.age} years
    Diseases : ${req.body.ailments}
    Goal : ${req.body.userInput}
    
    Create a creative dialogue tutorial by dragon ball Z Goku(where only he speaks(!important)) who is now my Personal Fitness Trainer & Dietitian. 
    Create a daily meal plan.( preapre a detailed schedule from Mon to Sun and time speciifc)(${req.body.country} - ${req.body.preference})
    Create a Workout Plan.(general)
    Create Health goals. (be funny motivating + add a funny quick advice quote tip)\n`,

    temperature: 0.7,
    max_tokens: 1000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
