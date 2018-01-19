class Multiplier {
	constructor(n){
		this.n = n;
		this.currentValue = 1;
	}
	multiply(){
		this.currentValue = this.currentValue * this.n;
	}
	getCurrentValue(){
		return this.currentValue;
	}
}

var myMulti = new Multiplier(13);
myMulti.multiply();
console.log(myMulti.getCurrentValue());
myMulti.multiply();
console.log(myMulti.getCurrentValue());