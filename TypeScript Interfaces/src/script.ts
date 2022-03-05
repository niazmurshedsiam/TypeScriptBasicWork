import {Players} from './classes/Players.js';
import { IsPlayers } from './interfaces/IsPlayers.js';
const masrafi = new Players('Mash',34,'Bangladesh');
let sakib: IsPlayers;
sakib = new Players("Sakib",35,"Bangladesh");

const Player:IsPlayers[]=[];
Player.push(masrafi);