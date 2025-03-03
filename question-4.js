// Question #4

//Test Case 1
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

// Test Case 2
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
// 	{ name: "Banana", price: 10, quantity: 2000 },
// 	{ name: "Orange", price: 30, quantity: 60 },
// ];

// เริ่มเขียนโค้ดตรงนี้
let min = inventory[0].quantity;
for(let i = 1; i < inventory.length; i++) {
   if(inventory[i].quantity < min){
      min = inventory[i].quantity;
   }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี ${min} ชิ้น`);

