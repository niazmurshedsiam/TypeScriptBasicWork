class Players{
    private name:string;
    readonly age:number;
    country:string
    constructor(name:string,age:number,country:string){
        this.name = name;
        this.age = age;
        this.country = country
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing.`);
    }

}
const masrafi = new Players('Mash',34,'Bangladesh');

const Player:Players[]=[];
Player.push(masrafi);