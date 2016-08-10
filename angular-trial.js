'use strict';

function Person(f, l){
	if(Person.count === undefined){
		Person.count = 0; //static property (value can be changed for all objects by changing in any one)
	}
	if(Person.sumFirstNameLen === undefined){
		Person.sumFirstNameLen = 0;
	}
	if(Person.avgFirstNameLen === undefined){
		Person.avgFirstNameLen = 0;
	}
	
	/*var firstName = 'John'; //private variable
	var lastName = 'Doe'; //private variable
	this.fn = 'XXX'; //all public member attributes have to be prefixed with "this."*/
	
	/*this.firstName = f;
	this.lastName = l;*/
	
	//change firstName and lastName to private variables
	var firstName = f;
	var lastName = l;
	
	//getters
	this.getFirstName = function(){
		return firstName;
	};
	
	this.getLastName = function(){
		return lastName;
	};
	
	//setters
	this.setFirstName = function(val){
		 firstName = val;
	};
	
	this.setLastName = function(val){
		lastName = val;
	};
	
	this.fullName = function () {
		return this.getFirstName() + ' ' + this.getLastName();
	};
	
	/*var age = a; //age is read only variable-- cannot be changed at run time
	
	//getter
	this.getAge = function () {
		return age;
	};
	
	//setter
	this.setAge = function(val){
		age = val;
	};*/
	
	//calc the avg First Name length of all objects
	Person.sumFirstNameLen += firstName.length;
	Person.count++;
	Person.avgFirstNameLen = Person.sumFirstNameLen/Person.count;
}

var x = new Person('John', 'Doe');
//x.age = 20;
var y = new Person('Gayatri', 'Rath');
console.log('Full NAME: ' + x.fullName());
//console.log('AGE: ' + x.getAge());

Person.prototype.age = 10; //(value can be different for every new object; property is available for every object)
Person.prototype.fullNameLen = function(){
	return this.fullName().length;
};

window.onload = function () {
	var person1 = new Person ('Sameer', 'Dash');
	var firstNameEl = document.getElementById('first');
	var lastNameEl = document.getElementById('last');

	firstNameEl.addEventListener('keyup', getFirstName); //keyup, change, blur, keydown, etc. W3 schools
	lastNameEl.addEventListener('keyup', getLastName);
	
	function getFirstName(){
		person1.setFirstName(firstNameEl.value);
		document.getElementById('f1').innerHTML = person1.getFirstName();	
	}

	function getLastName(){
		person1.setLastName(lastNameEl.value);
		document.getElementById('l1').innerHTML = person1.getLastName();
	}
};