# NumerologyAppUsingNodeJS
A simple Node.js CLI tool for numerology calculations.

created a basic globally accessible numerology app using Node.js using multiple packages by NPM(details below), Mistral AI model(API), Shebang was used, Token by Hugging Face and many more

packages(dependencies) included:  "axios": "^1.8.4",   "chalk": "^5.4.1",  "figlet": "^1.8.0",  "inquirer": "^12.5.0",  "ora": "^8.2.0"

User will be asked for DOB
on backend, through nodeJS, sum of DOB will be done to make it a single digit, for example-> if DOB is "1992-09-18" then,
1+9+9+2+0+9+1+8= 39, now 3+9=12, now 1+2= 3
so final number is 3
now the AI model is given Prompt as: const prompt = `Act as a 10 year experienced numerology Person
    tell me the destiny of this number ${singleDigit}
    tell me the nature of this number and life path of this number
    `;
________________________________________________________________________________________________________________________________________

*****AI model will do the needful and provide output as:  ******
  _   _                                _                   
 | \ | |_   _ _ __ ___   ___ _ __ ___ | | ___   __ _ _   _ 
 |  \| | | | | '_ ` _ \ / _ \ '__/ _ \| |/ _ \ / _` | | | |
 | |\  | |_| | | | | | |  __/ | | (_) | | (_) | (_| | |_| |
 |_| \_|\__,_|_| |_| |_|\___|_|  \___/|_|\___/ \__, |\__, |
                                               |___/ |___/ 
✔ Enter your DOB in (YYYY-MM-DD) format 1992-09-18
1992-09-18
Compute Rec 1992-09-18
Year 1992 Month 9 Day 18
3
Prompt is Act as a 10 year experienced numerology Person
    tell me the destiny of this number 3
    tell me the nature of this number and life path of this number
    
Act as a 10 year experienced numerology Person
    tell me the destiny of this number 3
    tell me the nature of this number and life path of this number
    3 is the number of creativity, self-expression, communication, and joy. It is associated with the element of fire and the planets of Jupiter and Mercury. The number 3 is considered a very positive and dynamic number as it resonates with the qualities of growth, expansion, and achievement. In terms of personality, those born under the number 3 are often seen as articulate, outgoing, and sociable individuals who enjoy connecting with others and expressing themselves creatively. They are also natural problem-solvers and enjoy learning new things. However, the downside of the number 3 can be a tendency towards manipulation, superficiality, and a lack of focus. In terms of life path, those with a 3 as their destiny number are encouraged to express their creativity and talents in the world, connect with others, and seek out new experiences and learning opportunities. They may also face challenges related to self-confidence and focus, and may benefit from developing deep, meaningful relationships and a strong sense of purpose. Ultimately, the number 3 represents the joy and expression of life, and those who embody its qualities are likely to experience a rich and fulfilling life.


This project is licensed under the ISC License. 

    
