class UserProfile2 {
	constructor(
		public name: string,
		public age: number,
		protected _firstName: string = "lol"
	) {}

	// get firstName(): string {
	// 	return this._firstName;
	// }
}

class AdvancedUserProfile extends UserProfile2 {
	constructor(
		name: string,
		age: number,
		public hobbies: string[],
		public color: string
	) {
		super(name, age);
	}

	get firstName(): string {
		return this._firstName;
	}
}

const user6 = new AdvancedUserProfile("Térence", 32, ["boxe", "dormir"], "red");

console.log(user6.firstName);
