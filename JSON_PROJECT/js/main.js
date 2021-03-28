var counter=1;

var animalContainer=document.getElementById("animal-info");


var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
	
var myReq=new XMLHttpRequest();

myReq.open('GET','https://learnwebcode.github.io/json-example/animals-'+counter+'.json');



myReq.onload=function(){

if(myReq.status>=200 && myReq.status<400)
{
	var ourData=JSON.parse(myReq.responseText);
	
	renderHTML(ourData);
	
}
else{

console.log("We connected to the server,but it returns an error from the server");	
	
}
	
	
}

myReq.onerror=function(){
	
	console.log("connection error");
	
}

myReq.send();
counter++;	
if(counter>3)
{
	// add css class to btn element
	
	btn.classList.add("hide-me");
}

});

function renderHTML(data){
	
var htmlString="";

for (i=0;i<data.length;i++)
{
	
htmlString+= "<p>"+data[i].name+" is a "+ data[i].species+" that likes to eat " 	;

for(j=0;j<data[i].foods.likes.length;j++)
{
if (j==0)
{	htmlString+=data[i].foods.likes[j];
}
else
{
htmlString+=" and "+ data[i].foods.likes[j];

	
}
	
	
}

htmlString+=" and dislikes ";
for(j=0;j<data[i].foods.dislikes.length;j++)
{
if (j==0)
{	htmlString+=data[i].foods.dislikes[j];
}
else
{
htmlString+=" and "+ data[i].foods.dislikes[j];

	
}
	
	
}


htmlString+='.</p>';
	
}
	
animalContainer.insertAdjacentHTML('beforeend',htmlString);	
	
}

