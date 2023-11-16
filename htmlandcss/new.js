class Calculator
{
constructor(a)
{
console.log("Empty Constructor invoked" +a);
}

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
//static abcd()
abcd()
{
console.log('abcd invoked from parent');
}
}
class Child extends Calculator{
	display()
	{
		console.log('display invoked from child');
	}
}

//var f=new Calculator(45);
//Calculator.abcd();


var obj = new Child();
obj.abcd();
obj.display();



