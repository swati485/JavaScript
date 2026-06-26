
class Car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    drive(){
        return this.brand+"-"+this.speed;
        
    }  
       
}

let car1=new Car("toyota",120);

