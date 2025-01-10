//1//

const numsArray = [10, 5, 8, 4, 6];

const result = numsArray.map(num => num - num** 2)
console.log(result)



//2//

const numbsArray = [3, -2, -5, 12, 8, -4, 7];

const result2 = numbsArray.map(num => (num < 0 ? num - 2 * num : num))
console.log(result2)

//3//

const sentencesArray = [
  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time."
];


const result1 = sentencesArray.map(sentence => {
  const  wordCount = sentence.split(" ").length;
return `${sentence} ${wordCount}`
})

console.log(result1)


//4//

const cars = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Mustang" }
];


const result3 = cars.map(car => car.brand)
console.log(result3)

//5//

const movies = [
  { title: "Inception", genre: "Sci-Fi" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Dark Knight", genre: "Action" }
];


const result5 = movies.map(movie => movie.genre)
console.log(result5)


//6//

const furniture = [
  { type: "Sofa", width: 200, height: 80 },
  { type: "Table", width: 120, height: 60 },
  { type: "Chair", width: 50, height: 45 }
];


const result6 = furniture.map(item => ({
  type: item.type,
  width: (item.width * 1.1).toFixed(1),
  height:  (item.height * 1.1).toFixed(1)
}))
console.log(result6)

//7//

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 50 },
  { name: "Camera", price: 300 }
];


const result7 = products.map(product => ({...product, affordable: product.price <= 100}))

console.log(result7)

//8//

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];

const result8 = numbers.filter(num => num < 0 && num % 2 === 0);

console.log(result8); 


//9//

const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" }
];

const result9 = students.filter(student => student.score > 70 && student.activeParticipant && (student.club === "Math" || student.club === "Science" ))
console.log(result9)

//10//

const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"];

const result10 = words.filter(word => word.includes("a") && word.length > 5);

console.log(resul10t);



