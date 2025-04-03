//Call AI MODEL for predictions

import axios from "axios";
import ora from "ora";
import chalk from "chalk";
//API call 
export async function getPredictions(singleDigit){
    const URL='https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2';
    const prompt = `Act as a 10 year experienced numerology Person
    tell me the destiny of this number ${singleDigit}
    tell me the nature of this number and life path of this number
    `;
    console.log('Prompt is', prompt);
    try{
        const spinner = ora('Loading....');
        spinner.start();
    const response = await axios.post(URL,{
        inputs:prompt,
    },{    headers:{
                'Authorization' : 'Bearer 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',
                'Content-type' : 'application/json'
            }
    });
        spinner.stop();
        console.log(chalk.green.bold(response.data[0]?.generated_text));
    }
catch(err){
    console.log('Error ::::::', err);
}
}
