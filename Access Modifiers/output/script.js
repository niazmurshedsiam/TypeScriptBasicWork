"use strict";
class Players {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing.`);
    }
}
const masrafi = new Players('Mash', 34, 'Bangladesh');
const Player = [];
Player.push(masrafi);
