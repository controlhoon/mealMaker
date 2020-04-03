//메뉴 넣은거 랜덤으로 정해주는 코드
const menu={
    _course: {
        appetizers:[],
        mains:[],
        desserts:[],
    },

	get appetizers() {
		return this._course.appetizers;
	},

	set appetizers(appetizers) {
		this._course.appetizers = appetizers;
	},

	get mains() {
		return this._course.mains;
	},

	set mains(mains) {
		this._course.mains = mains;
	},

	get desserts() {
		return this._course.desserts;
	},

	set desserts(desserts) {
		this._course.desserts = desserts;
	},
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName,dishName,dishPrice){
        const dish = {
            name : dishName,
            price : dishPrice,
        };
        return this._course[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
        const dishes = this._course[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizers.price+mains.price+desserts.price;
        
        return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name} and The price is ${totalPrice}.`;
    },
}

menu.addDishToCourse('appetizers','salad',4.25);
menu.addDishToCourse('appetizers','fries',4.00);
menu.addDishToCourse('appetizers','soup',5.00);

menu.addDishToCourse('mains','steak',13.25);
menu.addDishToCourse('mains','chicken',11.75);
menu.addDishToCourse('mains','pasta',10.25);

menu.addDishToCourse('desserts','ice cream',3.05);
menu.addDishToCourse('desserts','juice',2.75);
menu.addDishToCourse('desserts','coffee',3.00);

let meal = menu.generateRandomMeal();
console.log(meal);