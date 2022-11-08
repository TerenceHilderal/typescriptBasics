abstract class Shinobi2 {
	name: string;
	village: string;
	élement: string;

	constructor(name: string, village: string, élement: string) {
		this.name = name;
		this.village = village;
		this.élement = élement;
	}
}

class Shinobi3 extends Shinobi2 {
	constructor(
		name: string,
		village: string,
		élement: string,
		public grade: string
	) {
		super(name, village, élement);
	}
}

// const naruto2 = new Shinobi2("Naruto", "Konoha", "Vent");
// console.log(naruto2.name);
//
const naruto3 = new Shinobi3("Naruto", "Konoha", "Vent", "Hokage");
