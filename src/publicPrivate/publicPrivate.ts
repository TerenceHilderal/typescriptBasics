class UserProfile1 {
	name: string;
	nickname: string;
	age: number;
	private _password: string = "test pw";

	constructor(name: string, nickname: string, age: number) {
		this.name = name;
		this.nickname = nickname;
		this.age = age;
	}

	get password(): string {
		return this._password;
	}

	set password(newPassword: string) {
		this._password = newPassword;
	}

	displayInfo() {
		let keys = Object.keys(this);
		for (let value of keys) console.log(this[value]);
	}
}

const user5 = new UserProfile1("Térence", "Master", 32);
console.log(user5.password);
user5.password = "Changement de password";
console.log(user5.password);
