var library = [ 
{ author: 'Bill Gates',
 title: 'The Road Ahead',
 readingStatus: true
 }, 
{ author: 'Steve Jobs',
 title: 'Walter Isaacson',
 readingStatus: true 
 },
 { author: 'Suzanne Collins',
 title: 'Mockingjay: The Final Book of The Hunger Games',
 readingStatus: false 
 }];
 
library.map(function(status){
	 if(status.readingStatus==true)
	 {
		console.log(`Already read '${status.title}' by ${status.author}`);
	 }
	else{
		console.log(`You still need to read '${status.title}' by ${status.author}`);
	}
 });
 
 
 
 
 
 
 var today=new Date();
 var hour=today.getHours();
 console.log(hour);
 var month=today.getMonth();

 
 if(hour<12)
	 {  
     document.write("Its Morning");  
    }  
 else if(12<=hour&& hour<17)
	 {  
      document.write("Its Afternoon");  
    } 
else if (17<=hour && hour<20) 
	{  
     document.write("Its Evening");  
    } 
else
	{  
     document.write("Its Night");  
    }
	document.write("<br>");
	document.write("<br>");
if(month<3)
{
	document.write("Its Fall");
}
else if(3<=month && month<7)
{
	document.write("Its Summer");
}
else if (7<=month && month<11)
{
	document.write("Its Winter");
}
else
	{
	document.write("Enter a valid month");
}
document.write("<br>");
document.write("<br>");




var b=prompt("enter the hour in 24 hr format");
if(b<12)
	 {  
     document.write("Hey Its Morning");  
    }  
 else if(12<=b&& b<17)
	 {  
      document.write("Hey Its Afternoon");  
    } 
else if (17<=b && b<20) 
	{  
     document.write("Hey Its Evening");  
    } 
	else
	{  
     document.write("Hey Its Night");  
    }
	document.write("<br>");
	document.write("<br>");
	
	
var c=prompt("enter the month");

if(c<3)
{
	document.write("HeyIts Fall");
}
else if (3<=c && c <7)
{
	document.write(" HeyIts Summer");
}
else if (7<=month && month<11)
{
	document.write("Its Winter");
}
else
	{
	document.write("Enter a valid month");
}


// (function(a){
	// return (function(){
	// console.log(a);
// var a=6;	
	// }
// )()
// })(21);
// var a="Scaler";
// var r=a.substring(2,4);
// document.write(r);

