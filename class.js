class sati{
	constructor(brand){
		this.laptop = brand
	}
	parent( ){
		return "latop brand "+ this.laptop
	}
}

class sunil extends sati{
	constructor(laptop,phone){
		super(laptop)
		this.phone = phone
	}
	son( ){
		return this.parent() +" my phone " +this.phone
	}
}

let item = new sati("intel")
console.log(item)
console.log(item.parent())




let items = new sunil("lenovo","vivo")
console.log(items.son())
console.log(items)
