interface Shinobi4 {
	name: string;
	village: string;
}

class Shinobi5 implements Shinobi4 {
	constructor(
		public name: string,
		public village: string,
		public élement: string
	) {}
}

const shinobu = new Shinobi5("kunoichi", "Zô", "vent");

console.log(shinobu);
