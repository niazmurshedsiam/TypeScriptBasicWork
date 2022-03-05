export class Players{
    constructor(
        private name:string,
        readonly age:number,
        public country:string
    ){}
    play(){
        console.log(`${this.name} from ${this.country} is playing.`);
    }

}
////////Object/////// 
interface RectenangleOption{
    width: number,
    length: number
}
function Rectenagle(option:RectenangleOption){
 let width = option.width;
 let length = option.length;
}
let RectenagleR={
    width:30,
    length:40,
    height:30

}

Rectenagle(RectenagleR);


///classes///

