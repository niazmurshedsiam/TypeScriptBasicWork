import {IsPlayers} from '../interfaces/IsPlayers.js';
export class Players implements IsPlayers{
    constructor(
        public name:string,
        private age:number,
        readonly country:string
    ){}
    getProperty(){
        return this.age;
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing.`);
    }

}


