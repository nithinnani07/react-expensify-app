console.log("Destruct runnning");

// const person = {
//     name: 'Nithin',
//     age: 22,
//     location: {
//         city: 'Chennai',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Publish' } = book.publisher;
// console.log(publisherName);

const address = ['12 Prakash nagar', 'Chennai', '602024'];

const [street, , , zip = '123456'] = address;

console.log(`You are in ${street} ${zip}`);


const item = ['Coffee', '₹2.00', '₹5.00', '₹7.00'];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);