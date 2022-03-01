type stringNumber= string | number;
type UserType = {name:string,age:number};
const userDetails = (id:stringNumber,user:UserType)=>{
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};