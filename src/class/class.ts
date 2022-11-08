class UserProfile {
	name: string;
	nickname: string;
	age: number;

	constructor(name: string, nickname: string, age: number) {
		this.name = name;
		this.nickname = nickname;
		this.age = age;
	}

	displayInfo() {
		let keys = Object.keys(this);
		for (let value of keys) console.log(this[value]);
	}
}

const user3 = new UserProfile("Térence", "Master", 32);
user3.displayInfo();
const user4 = new UserProfile("Soumeya", "SoumSoum", 6);
user4.displayInfo();

console.log(
	`Mon prénom est ${user3.name}, mon surnom est ${user3.nickname} et j'ai ${user3.age} ans`
);
