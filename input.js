//DOB input
import inquirer from "inquirer";
import { compute } from "./compute.js";
export async function takeInput(){
    try{
    const result = await inquirer.prompt([
        {
            type:"input",
            message:'Enter your DOB in (YYYY-MM-DD) format',
            name:'dob'
        }
    ],'dob');
    console.log(result.dob);
    return result.dob;
    }
    catch(err){
        console.log('Error during user Input', err);
    }
}