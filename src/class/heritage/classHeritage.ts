//  OLD WAY

class UserProfile5 {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class AdvancedUserProfile5 extends UserProfile5 {
	hobbies: string[];
	color: string;

	constructor(name: string, age: number, hobbies: string[], color: string) {
		super(name, age);
		this.hobbies = hobbies;
		this.color = color;
	}
}

const user7 = new AdvancedUserProfile5("Térence", 32, ["boxe", "node"], "red");
console.log(user7.name, user7.hobbies);

// NEW WAY

class UserProfile6 {
	constructor(public name: string, public age: number) {}
}

class AdvancedUserProfile6 extends UserProfile6 {
	constructor(
		name: string,
		age: number,
		public hobbies: string[],
		public color: string
	) {
		super(name, age);
	}
}

const user8 = new AdvancedUserProfile6("Térence", 32, ["boxe", "node"], "red");
console.log(user8.name, user8.hobbies);
