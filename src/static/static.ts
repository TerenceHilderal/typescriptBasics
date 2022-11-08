class Shinobi {
	name: string;
	village: string;
	élement: string;
	public static nickname: string = "Térence";
	public newNickname: string = "Tété";

	constructor(name: string, village: string, élement: string) {
		this.name = name;
		this.village = village;
		this.élement = élement;
	}

	static staticKageBunshin(): void {
		console.log("Static Kage Bunshin no Jutsu");
	}

	kageBunshin(): void {
		console.log("Kage Bunshin no Jutsu");
	}
}

const naruto = new Shinobi("Naruto", "Konoha", "Vent");
naruto.kageBunshin();
console.log(naruto.newNickname);
console.log("----------------------------------------------------------------");
Shinobi.staticKageBunshin();
console.log(Shinobi.nickname);
