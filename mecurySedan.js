
//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5; 
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.ScheduleService = false;
        
        this.number = true;
    }
}
    
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

Start() {
    if ( this.fuel >0 ) {
        console.log ('engine started')
       return this.started = false
    }else{
        console.log('out of fuel')
        return this.started == true
    }
} 

loadPassenger(numPassengers) {
    if (this.passenger > this.maximumPassengers) {
    //    if ( (this.passenger + num) <= this.maximumPassengers ){

    //    }
       
        console.log('we are full')
        return this.number == false
    } else {
        this.passenger < this.maximumPassengers
        console.log (this.number == true)
        

    }

}


ScheduleService() { 

}