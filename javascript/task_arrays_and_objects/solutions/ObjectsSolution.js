/**
 * In these tasks you will need to manipulate the object below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

 dog = {
    name: "Poppy",
    age: 4,
    breed: "Springer Spaniel",
    colours: ["white", "brown"],
}

cat = {
    name: "Morris",
    age: 9,
    breed: "European Shorthair",
    colours: ["black", "white"]
}

tortoise = {
    name: "Ella",
    age: 7,
    breed: "Eastern Hermanns",
    colours: ["yellow", "brown", "black"]
}


/**
 * Q1. What's the name of the dog?
 */

dogName=dog.name;

console.log("The dog's name is " + dogName);


/**
 * Q2. What breed is the cat?
 */


catBreed=cat.breed;

console.log("The cat is a " + catBreed);



/**
 * Q3. It's the tortoise's birthday! Add one to her current age.
 */


tortoiseNewAge = tortoise.age + 1;
console.log(tortoiseNewAge);






/**
 * Q4. How many different colours is Poppy?
 */

 
dogColourCount = dog.colours.length;

console.log("The dog has " + dogColourCount + " different colours");



/**
 * Q5. I've just bought a 12-year-old African Grey parrot called Lucky. Create an object for her.
 */

parrot={
    name: "Lucky",
    age: 12,
    breed: "African",
    colours: ["grey"]
}


console.log(parrot);



/**
 * Q6. Ella's favourite food is dandelion, add this information to her object
 */
 
tortoise.favouritefood= "dandelion"

console.log(tortoise);



/**
 * Q7. What's the combined age of all the pets?
 */

totalPetAge = null;
totalPetAge= cat.age + dog.age + tortoise.age + parrot.age;

console.log("The total age of the pets is " + totalPetAge);



/**
 * Q8. It's turns out that Morris isn't a European Shorthair. We don't actually know his real breed, so remove that key from his object
 */


cat.breed='unknown'

console.log(cat);