$(document).ready(function(){
let arrayVehicle = [];

class Vehicles
{
	typ  = ""; 
   	color  = "";
   	prise  = "";

	constructor(typ, color, prise) { 
       this.typ = typ;
       this.color = color;
       this.prise = prise;

       arrayVehicle.push(this);
   }
   show() { 
       return `${this.typ} <br> ${this.color} <br> ${this.prise}`;
   }
}

var bmw = new Vehicles("BMW","red","8.000");
// document.getElementById("result").innerHTML += bmw.show();
// document.getElementById("result").innerHTML += "<hr>";

var mercedes = new Vehicles("Mercedes","blue","4.000");
// document.getElementById("result").innerHTML += mercedes.show();
// document.getElementById("result").innerHTML += "<hr>";

var tesla = new Vehicles("Tesla","silver","50.000");
// document.getElementById("result").innerHTML += tesla.show();
// document.getElementById("result").innerHTML += "<hr>";

var vw = new Vehicles("VW","green","2.000");
// document.getElementById("result").innerHTML += vw.show();
// document.getElementById("result").innerHTML += "<hr>";


class Motor extends Vehicles
{
	model;
	kilometersLeft;
	seats;
	fuelType;
	production;

	constructor(typ, color, prise, model, kilometersLeft,seats,fuelType,production)
  	{
    	super(typ, color, prise);
    	this.model = model;
    	this.kilometersLeft = kilometersLeft;
    	this.seats = seats;
    	this.fuelType = fuelType;
    	this.production = production;

    	arrayVehicle.push(this);
  	}

  	More()
  	{
    	return `${super.show()} <br> ${this.model} <br> ${this.kilometersLeft} <br> ${this.seats} <br> ${this.fuelType} <br> ${this.production}`
  	}

}
 
let car1 = new Motor("BMW","red","8.000", "3-er", "55.000", "5", "diesel", "2.000" );
//document.getElementById("result").innerHTML += car1.More();

console.table(arrayVehicle);

for (let i = 0; i < arrayVehicle.length; i++)
		{
			
			document.getElementById("result").innerHTML += 
				`<div id='result_${i}' class='result'>
					<button id='btn_${i}' class='btn'>show details</button>
					<p class='price'></p>
					<p>${arrayVehicle[i].typ}</p>
				</div>`;
		}

let button = $(`.btn`);
let output = $(`#result`);

console.log(button);

for (let i = 0; i < arrayVehicle.length; i++)
{
	$(button[i]).on("click", function()
        	{       
            
            	$(this).next(".price").text(arrayVehicle[i].prise); 
            	//console.log();          	
                     
        	});
}


});


