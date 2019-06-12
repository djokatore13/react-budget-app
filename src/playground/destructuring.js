/***********************
 * OBJECT DESTRUCTURING
 **********************/
// const person = {
//   name: 'Pera',
//   age: 44,
//   location: {
//     city: 'Nis',
//     temp: 27
//   }
// }

// Cilj name je da destruct objekat
// To znaci da u template strinu gde pozivamo propertije iz objekta ne koristimo obj.propertie
// nego da pozivamo samo propertie
// Mozemo naravno da uvek koristimo 
// const name = person.name - ali zamislite da moramo za svaki properti tako(a imamo ih npr. 30+)
// console.log(`${person.name} is ${person.age} year(s) old!`)
// Umesto toga koristimo ES6 feauter destructuring
//------------------------------------------------

// const {name, age} = person; // sintaksa za destruct ES6

// const {city, temp} = person.location; // destruct za nestovani objekat

// Ukoliko zelimo da rename-ujemo properti tj. varijablu unutar destructuring-a
// const {city, temp: temperature} = person.location
// zatim temperature mozemo da koristimo dalje u kodu
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }
//------------------------------------------------

// Default value za odredjeni properti... npr. ukoliko ga nema(nema vrednosti, nije provajdovano)
// const {city = 'Anonymous', temp} = person.location;
//------------------------------------------------

// Ukoliko zelimo da promenimo vrednost i setujemo default
// const {name: firstName = 'Anonimous', age} = person; 
//------------------------------------------------

// console.log(`${name} is ${age} years old!`);


// if(city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }


// Chalenge area
// const book = {
//   title: 'Hajduk Stanko',
//   author: 'Janko Veselinovic',
//   publisher: {
//     name: 'JRJ',
//     isbn: '978-86-7609-203-1'
//   }
// }

// Tasks:
// 1. rename properti to publiserName
// 2. is there publisher name cl. JRJ else cl. default vale Self-Published

// const {title} = book;
// const {name: publisherName = 'Self-Published', isbn} = book.publisher;

// console.log(`Book ${title} is published by ${publisherName}, and it ISBN is ${isbn}!`); 

/***********************
 * ARRAY DESTRUCTURING
 **********************/

const address = ['Street 123', 'Grad', 'Drzava', '11000'];
//console.log(`I'am living in ${address[0]} street, ${address[1]}, ${address[2]}, zip: ${address[3]}!`);
//------------------------------------------------

// Sintaksa za destruct array je slicna kao za objekat(korisitimo[])
// Nazivi unutar zagrade ce se vezivati za indeks(poziciju) elementa u nizu:
// Znaci street = address[0], city = address[1]... itd.
//------------------------------------------------
const [street, city, state, zip] = address; // destruct array

// Ukoliko hocemo da izostavimo destruct za neki elem.niza
// Radimo tako sto:
// const [, city, state,] = address;
// Npr. za prvi elem. smo izostavili naziv, ali ostavili zarez
//------------------------------------------------

// Default value
// const [,city = 'Beograd', state ] = address;

console.log(`I'am living in ${street} street, ${city}, ${state}, zip: ${zip}!`);

// Chalenge area
const item = ['Coffee(hot)', '2.00$', '2.50$', '3.00$'];

const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs {medium}`);