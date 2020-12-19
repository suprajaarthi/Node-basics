var events =require('events');
// var myemitter= new events.EventEmitter();
// myemitter.on('somEvent',function(msg)
// {
// 	console.log(msg);
// });

// myemitter.emit('somEvent','the event has been emitted');


var util=require('util');
var Person= function(nam)
{
	this.nam=nam;
}
util.inherits(Person,events.EventEmitter);
var supraj=new Person('supraj');
var arthi=new Person('arthi');

var people=[supraj,arthi];
people.forEach(function(person)
{
	person.on('Speak',function(msg){
		console.log(person.nam+' said : '+msg);
	});
});

supraj.emit('Speak','Hello dude');
arthi.emit('Speak','I want choci');