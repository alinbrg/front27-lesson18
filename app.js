import productsData from "./data.js";
// 1. დაწერეთ for ციკლი, 0 დან 15 - მდე console.log ში დაბეჭდეთ ინდექსი i

// for (let i = 0; i < 15; i++) {
// 	console.log(i);
// }

// 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i

// let i = 0;
// while (i < 20) {
// 	console.log(i);
// 	i++;
// }
// 3. დაწერეთ do while ციკლი 0 დან 25 - მდე console.log ში დაბეჭდეთ ინდექსი i

// i = 0;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 25);

// 4. მოცემული გვაქვს მასივი const numbers = [4,5,6,7,8,9,23,24,25, 26,29]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
const numbers = [4, 5, 6, 7, 8, 9, 23, 24, 25, 26, 29];
let length = numbers.length;

// for (let i = 0; i < length; i++) {
// 	if (numbers[i] % 2 === 0) {
// 		console.log(numbers[i]);
// 	}
// 	// numbers[i] % 2 === 0 ? console.log(numbers[i]) : console.log("");
// }
// console.log(userInfo);

let userInfo;
// console.log(userInfo);

// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.

const currentDay = new Date().getDay();
let day = "";
switch (currentDay) {
	case 0:
		// console.log("კვირა");
		day = "კვირა";
		break;
	case 1:
		day = "ორშაბათი";
		break;
	case 2:
		day = "სამშაბათი";
		break;
	case 3:
		day = "ოთხშაბათი";
		break;
	case 4:
		day = "ხუთშაბათი";
		break;
	case 5:
		day = "პარასკევი";
		break;
	case 6:
		day = "შაბათი";
		break;
	default:
		day = "არასწორი რიცხვი";
		break;
}

// console.log(day);

// scopes

// global scope

// userName = "John";
// let userAge = 25;
// var userEmail = "example@gmail.com";

// block scope let, const {}
// if (true) {
// 	var a = 10;
// 	console.log(a);
// 	console.log(userAge);
// 	if (true) {
// 		// let b = 20;
// 		let a = 1000;
// 		// console.log(b);
// 		console.log(a);
// 	}
// }
// console.log(a);

// console.log(a);

// console.log(a);
// function scope   var
// function test() {
// 	var b = 20;
// 	console.log(b);
// }
// console.log(b);

// test();
// greetUser();

function greetUser() {
	console.log("hello user");
}

// greetUser();

function greetUserByName(userName, userAge, userEmail) {
	let formatedUserName = userName.toUpperCase();

	console.log("hello " + formatedUserName);
	console.log("your age is " + userAge);
}

// greetUserByName("giorgI", 25);
// greetUserByName("John", 30);
// greetUserByName("Lasha", 30);
// greetUserByName("Tea", 30);

function productTOtalPrice(price, quantity, greetUserByName) {
	let totalPrice = price * quantity;

	// greetUserByName("giorgI", 25);
	return totalPrice;

	console.log("total price is ", totalPrice);
}
let product1Price = productTOtalPrice(1000, 5, greetUserByName);

let calculateProductPrice = productTOtalPrice;

// console.log(product1Price);

function getDiscount(price) {
	console.log(price);
	console.log(product1Price);
	if (price > 1000) {
		return price - 100;
	}
	return price;
}
// console.log(getDiscount(5000));

// console.log(calculateProductPrice);

const greetUser2 = function (userName) {
	console.log("hello user", userName);
};

// greetUser2("John");

const greetUser3 = (userName) => {
	console.log("hello user", userName);
};

// greetUser3("Jane");

console.log(productsData);

const myObj = {
	name: "John",
	age: 25,
	greetUser: () => {
		console.log("hello user");
	},
};

const callbackFn = (element, index, array) => {
	if (element.price > 3000) {
		console.log(element);
	}
};

// productsData.forEach(callbackFn);

productsData.forEach((product, i) => {
	product.title = "Test";
});

const productsPriceMoreTHan3000 = productsData.filter(
	(element, index, array) => {
		return element.price > 3000;
	}
);

// console.log(productsPriceMoreTHan3000);

const firstElementPriceMoreTahn3000 = productsData.find((element) => {
	return element.price > 3000;
});
// console.log(firstElementPriceMoreTahn3000);

const isSomeElmentPriceMoreThan3000 = productsData.some((element) => {
	return element.price > 3000;
});

// console.log(isSomeElmentPriceMoreThan3000);
// if (isSomeElmentPriceMoreThan3000) {
// 	console.log("yes");
// }
const isEveryElmentPriceMoreThan3000 = productsData.every((element) => {
	return element.price > 3000;
});

// console.log(isEveryElmentPriceMoreThan3000);

const formatedProducts = productsData.map((element, index, array) => {
	const myObj = {
		name: element.name,
		price: element.price,
	};

	return myObj;
});

// console.log(formatedProducts);
