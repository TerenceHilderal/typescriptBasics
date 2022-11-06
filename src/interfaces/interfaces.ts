interface Person {
	firstName: string;
	name: string;
	age: number;
}

const person1: Person = {
	firstName: "John",
	name: "Doe",
	age: 30,
};

function hello(person: Person) {
	console.log(`Bonjour à toi ${person.firstName}`);
}

hello(person1);

interface IUserProfile1 {
	readonly firstName: string;
	nickname: string;
	age?: number;
	password: string;
}

const user1: IUserProfile1 = {
	firstName: "John",
	nickname: "Wayne",
	age: 30,
	password: "password",
};
