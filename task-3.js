var n=Number(prompt("Enter the number"));

// Print N odd numbers

var i=1;
while (i<=n){
     document.write(i++ + " ")
	 ++i
	 }
	 document.write("<br>");

// Print N even numbers
	 
for(var k=1; k<=n; k++){
     if(k%2 == 0){
         document.write(k)
	 }else{
	      document.write(" ");
		  
		  }
	 }
     document.write("<br>");

// Print N numbers in sequence

var j=1;
while(j<=n){
     document.write(j + " ")
	 j++
	 }
	document.write("<br>"); 
	
// Print N numbers in reverse

	 do{
     document.write(n + " ")
	 n--
	 }while(n>0)
	 document.write("<br>");
	 
//swaping two numbers

/*var a=58, b=62;
document.write(a + " " + b);
document.write("<br>");
var x=a+b;
var a=x-a;
var b=x-b;

document.write(a + " " + b);*/

let a=58, b=62;
function swap(a, b){
     document.write(a + " " + b);
	 }
	 swap(62, 58);
	 document.write("<br>");
	 
// Print a name N times

var name=prompt("Enter your name");
var number=Number(prompt("Number of time"));

function no(){
     for(i=1; i<=number; i++){
	      document.write(name + "<br>");
		  }
	 }
	 no();
	 
	 
// Factorial of Number

var fact= Number(prompt("Factorial of"));
var f=1
for(var i=fact; 1<=i; i--){
     f = f * i
	 }
	 	  document.write(f);
		 document.write("<br>");
		  
// Nested loop

for(i=1; i<=5; i++){
     for(j=1; j<=i; j++){
	      document.write(i);
	     
		  }
		  document.write("<br>");
		}
		document.write("<br>");
		
for(i=5; i>0 && i<=5; i--){
     for(j=1; j<=i; j++){
	      document.write(j);
	     
		  }
		  document.write("<br>");
		}
		document.write("<br>");
		

var alpha;		
for(var i=1; i<=5; i++){
     alpha=65;
	 for(var j=1; j<=i; j++){
	     document.write(String.fromCharCode(alpha) + " ");
		 alpha++;
		 }
	 document.write("<br>");
	 }
     
	  document.write("<br>");