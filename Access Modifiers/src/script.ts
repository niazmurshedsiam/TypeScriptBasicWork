class Players{
    constructor(
        private name:string,
        readonly age:number,
        public country:string
    ){}
    play(){
        console.log(`${this.name} from ${this.country} is playing.`);
    }

}
const masrafi = new Players('Mash',34,'Bangladesh');

const Player:Players[]=[];
Player.push(masrafi);