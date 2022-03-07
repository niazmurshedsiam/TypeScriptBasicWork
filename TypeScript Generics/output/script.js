"use strict";
// import {Players} from './classes/Players.js';
// import { IsPlayers } from './interfaces/IsPlayers.js';
// const masrafi = new Players('Mash',34,'Bangladesh');
// let sakib: IsPlayers;
// sakib = new Players("Sakib",35,"Bangladesh");
// const Player:IsPlayers[]=[];
// Player.push(masrafi);
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Siam",
    age: 40,
    country: 'Bangladesh'
});
addID(user);
