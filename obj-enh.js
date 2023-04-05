// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) => {firstName, lastName}

let favNumber = 42;
let instructor = {
    firstName: 'Colt',
    [favNumber]: "That is my favorite!"
};

let instructor2 = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

const createAnimal = (species, verb, noise) =>
{
    species,
    [verb](){
        console.log(noise);
    }
};
