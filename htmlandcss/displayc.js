class Calculator
{
constructor(a)
{
console.log("Empty Constructor invoked"+a);
}
display()
{
console.log("display invoked");
}
 
abcd()
{
console.log('abcd invoked from parent');
}
abcd(a)
{
console.log('abcd paarmeterised invoked');
}
 
}
class Child extends Calculator
{
display()
{
console.log("display invoked from Child");
}
display()
{
console.log('display invoked from child');
}
}
var obj = new Calculator();
obj.display();