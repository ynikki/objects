/* OBJECTS

Plain Object and Adding Properties */

var plainBox = {
	color : 'Yellow',
	size : 15,
	contents : [],
};

console.log(plainBox.color);

/* An object with properties declared line by line */

var stockCar = {
	model : 'Yaris',
	year : 2009,
	automaticTransmission : [ 5, 6, 7],
	driver : null,
	passengers : [],
};

console.log(stockCar.automaticTransmission[2]);

/* Add new property inside a function */

var plainPerson = {};

function buildPerson(person,nameString,age){
	person.name = nameString;
	person.age = age;
	return person;
}

console.log(buildPerson(plainPerson,"Nikki",26));

/* Display Values Of Objects That Are Inside An Array */

var arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders(orders){
	for(var i = 0; i < orders.length; i++){
			console.log("====");
			console.log("id: " + orders[i].id);
			console.log("purchase date: " + orders[i].date);
			console.log("purchase total: " + orders[i].total);
	}
}

printProcessedOrders(arrayOfObjects);

/* Additon With An Object */

var newObj = {
	a : 4,
	b : 10,
	result : 0
};

function additionObj(obj){
	obj.result =  obj.a + obj.b;
	return obj;
}

console.log(additionObj(newObj));

/* Print Sum Function And Add As New Key-Value */

function sumFunction(addNewKeyValue){

}


