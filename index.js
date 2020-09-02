var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];
function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}
var petsWithAge = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);
  petsWithAge.push(pet);
}
console.log(petsWithAge);
var dogs = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);
var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");

//***********************************************ES6********************************************************

let pets = [{ name: "Max", type: "dog", bornOn: 2018 },
{ name: "Angel", type: "cat", bornOn: 2015 },
{ name: "Jasper", type: "dog", bornOn: 2016 },]
const getAge = (pet) =>{return new Date().getFullYear() - pet.bornOn}
const petsWithAge = () => 
{	return pets.filter((pet)=>{	return pet.age = getAge(pet)})}
console.log(petsWithAge())
const dogs = () =>{return pets.filter((pet)=>{	return pet.type == "dog"})}
console.log(dogs())
const Jasper = () => {return pets.find(pet=>{return pet.name == "Jasper"})}
console.log(`Jasper is  ${Jasper().age} years old`);