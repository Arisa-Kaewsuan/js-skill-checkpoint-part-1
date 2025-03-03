// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory[2] = {name: "Orange", price: 20, quantity: 300};

let sum = 0;
for(let totalQuantity in inventory){
  sum += (inventory[totalQuantity].quantity * inventory[totalQuantity].price);
}
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sum} บาท`);