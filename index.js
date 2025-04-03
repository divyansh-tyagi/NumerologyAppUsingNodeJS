#!/usr/bin/env node

//main entry file

import { takeInput } from "./input.js";
import { intro } from "./intro.js";
import { compute } from "./compute.js";
import { getPredictions } from "./gpt.js";
(async function (){                                        
    console.log(await intro());   
    const dob = await takeInput();   
    const singleDigit = compute(dob);
    console.log(singleDigit);
    getPredictions(singleDigit);
})();