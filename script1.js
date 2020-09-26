var x = prompt("Enter the value of X");
var d = 0;
var i=2;
while(i<x)
{
if(x%i==0)
{
d = 1;
}
i=i+1;
}
if(d==0)
document.write("It is a prime number");
else
document.write("It is a composite number");
