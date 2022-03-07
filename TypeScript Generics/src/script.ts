// import {Players} from './classes/Players.js';
// import { IsPlayers } from './interfaces/IsPlayers.js';
// const masrafi = new Players('Mash',34,'Bangladesh');
// let sakib: IsPlayers;
// sakib = new Players("Sakib",35,"Bangladesh");

// const Player:IsPlayers[]=[];
// Player.push(masrafi);
const addID = <T extends {
    name:string;
    age:number;
}>(obj:T)=>{
    let id = Math.floor(Math.random() * 100);
    return {...obj,id};
};

let user = addID({
    name: "Siam",
    age:40,
    country: 'Bangladesh'
});
addID(user);

