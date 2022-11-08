interface IRepertory extends Array<number> {
	[index: number]: number;
}

const days: IRepertory = [1, 2, 3, 4, 5];

console.log(days);
days.push(6);
console.log(days);

//

interface IObject {
	[index: string]: any; // propriété illimitées
	sayHello: { (name: string): void }; // fonction obligatoire
}

const myObject: IObject = {
	title: "Térence",
	age: 32,
	city: "Stains",
	isMajeur: true,
	sayHello(name: string): void {
		console.log(`BOnjour à toi ${name}`);
	},
};

console.log(myObject.city);
