let discount = +prompt("Напишите скидку. Написанное число идёт в минус для суммы.\nНапример: 200-15%=170").trim().replace(/%/gi, "");
let totalSale = Number;
let total = Number;
let max = Object;
let min = Object;
let average = Number;

let arr = [
  {
    name: "Milk",
    price: 3.25,
  },
  {
    name: "Coffee",
    price: 1.5,
  },
  {
    name: "Ice Cream",
    price: 7.85,
  },
  {
    name: "Tomatos",
    price: 4.14,
  },
  {
    name: "Onion",
    price: 2.25,
  },
];

let arr_sale = [];

let getTotal = (writeArr) => {
  let one = 0;
  let result = [];
  for (let item of writeArr) {
    if (typeof item.price === "number") {
      one = one + item.price;
      result.push(one);
    }
  }
  result = result[result.length - 1];
  console.log(result);
};
console.warn("total:");
total = getTotal(arr);

let getMax = (writeArr) => {
  let prices = [];
  for (let item of writeArr) {
    prices.push(item.price);
  }
  let max_price = Math.max.apply(null, prices);
  console.log(max_price);
};
console.warn("max:");
max = getMax(arr);

let getMin = (writeArr) => {
  let prices = [];
  for (let item of writeArr) {
    prices.push(item.price);
  }
  let max_price = Math.min.apply(null, prices);
  console.log(max_price);
};
console.warn("min:");
min = getMin(arr);

let getAverage = (writeArr) => {
  let prices = [];
  let one = 0;
  let result = [];
  for (let item of writeArr) {
    prices.push(item.price);
    if (typeof item.price === "number") {
      one = one + item.price;
      result.push(one);
    }
  }
  result = result[result.length - 1];
  let average_result = result / prices.length;
  console.log(average_result);
};
console.warn("average:");
average = getAverage(arr);

let arr2 = arr
let getTotalSale = (writeArr, writeDiscount, newSaleArr)=>{
  let one = 0;
  let result = [];
  for (let item of writeArr) {
    if (typeof item.price === "number") {
      one = one + item.price;
      result.push(one);
    }
    item.price -= item.price / 100 * writeDiscount
    arr_sale.push(item)
  }
  result = result[result.length - 1];
  let sale = result / 100 * writeDiscount
  let main_result = result - sale
  console.log(main_result);
  console.log("saleArr:", newSaleArr);
}
console.warn("totalSale:");
getTotalSale(arr2, discount, arr_sale)