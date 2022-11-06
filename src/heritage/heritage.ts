interface IUserProfile {
	name: string;
	nickname: string;
	age?: number;
}

interface IUserAdvancedProfile extends IUserProfile {
	email: string;
	hobbies: string[];
	city: string;
}

const user2 = <IUserAdvancedProfile>{};
user2.nickname = "jsmith";
console.log(user2);

const advancedUserProfile: IUserAdvancedProfile = {
	name: "John",
	nickname: "Doe",
	email: "john@doe.com",
	hobbies: ["coding", "programming"],
	city: "Stains",
};

console.log(advancedUserProfile);
