interface IHello {
	(name: string, age?: number): void;
}

const sayHello: IHello = (name, age) =>
	console.log(`Bonjour à toi ${name} tu as ${age} ans`);

sayHello("Térence", 32);

const bestFriend: IHello = (name) => name;

console.log(` l'ami de Térence est  ${bestFriend("Lui même")}`);
