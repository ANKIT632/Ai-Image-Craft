import {surpriseMePrompts} from '../constant'


export function getRandomPrompt(promt){
    const randomIndex= Math.floor(Math.random()*surpriseMePrompts.length);

    const randomPromt=surpriseMePrompts[randomIndex];

    // if same then recall.
    if(randomPromt===promt )
     return getRandomPrompt(prompt);

    return randomPromt;



}