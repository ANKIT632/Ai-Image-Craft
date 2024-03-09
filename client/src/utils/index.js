import {surpriseMePrompts} from '../constant'
import FileSaver from 'file-saver'

export function getRandomPrompt(promt){
    const randomIndex= Math.floor(Math.random()*surpriseMePrompts.length);

    const randomPromt=surpriseMePrompts[randomIndex];

    // if same then recall.
    if(randomPromt===promt )
     return getRandomPrompt(prompt);

    return randomPromt;

}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
}