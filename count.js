var counter=function(arr)
{
	return 'There are '+ arr.length +' elements';
}

var add=function(a,b)
{
	return `The sum of 2 nos is ${a+b}`;
};

var pi=3.142;

module.exports.counter=counter;
module.exports.add=add;
module.exports.pi=pi;

// console.log(counter(['abb','c','d']));