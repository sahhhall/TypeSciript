class Sahal {
    name: string;
    age: number;
    place: string;

    constructor(name: string, age: number, place: string) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
    
    getFull(): string {
        return `${this.name}, ${this.age}, ${this.place}`; 
    }
}

const sahalkk = new Sahal('Muhammed sahal', 12, 'vavoor');
console.log(sahalkk.getFull()); 


// readonly propertires 

class Person {
    readonly agee: number;
    constructor(agee: number) {
        this.agee = agee;
    }
    getAge(): any {
        return `${this.agee}`
    } 
}

const messi = new Person(10)
// messi.agee = 37; we  added class proprty to readonly so class properties as immutable properties
console.log(messi.getAge());
