const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    debugger;
  }

  return messages;
}

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
writeCards(names, event);

let number = "100"
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(number);




// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);
