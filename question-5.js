// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price*products[i].quantity;  
  }
  
  if (promotionCode === "") {
    return sum;
  } 
  else if (promotionCode === "SALE20") {
    return sum - (sum * (20/100));
  } 
  else if (promotionCode === "SALE50") {
    return sum - (sum * (50/100));
  }
}

// Test case
// console.log(calculateTotalPrice(products, ""));
// console.log(calculateTotalPrice(products, "SALE20"));
// console.log(calculateTotalPrice(products, "SALE50"));
