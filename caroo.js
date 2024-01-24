//Part 1

class Vehicle{
    constructor(make, model, year){
        this.make = make; 
        this.model = model;
        this.year = year; 
    }
   
honk(){
  const {make, model, year} = this; 
  return "Beep" ;
}
toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
}
}

//Part 2

class Car extends Vehicle{
constructor(make, model, year){
    super(make, model,year);
    this.numWheels = 4; 
}
}

//Part 3

class Motorcycle extends Vehicle{
constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;   
}  
revEngine(){
    const {make, model, year} = this; 
    return "VROOOM!!!" ;
  }
}

//Part 4

class Garage{
constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;   
    }
   
add(myNewVehicle){
    if(!(myNewVehicle instanceof Vehicle)){
        return "Uhh...I don't think that's a vehicle!";
    }
    if(this.vehicles.length >= this.capacity){
        return "This garage is full, sorry :(!";
    }
    this.vehicles.push(myNewVehicle);
    return "Your vehicle has been added to the garage!";
    
}
    
}
