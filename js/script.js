function generateInputs(){
let count=document.getElementById("subjects").value;
let container=document.getElementById("gradeInputs");
container.innerHTML="";
for(let i=0;i<count;i++){
container.innerHTML+=`<input type="number" class="grade" placeholder="Grade Point for Subject ${i+1}">`;
}
}

function calculateCGPA(){
let grades=document.getElementsByClassName("grade");
let total=0;
for(let i=0;i<grades.length;i++){
total+=parseFloat(grades[i].value||0);
}
let cgpa=(total/grades.length).toFixed(2);
document.getElementById("cgpaResult").innerText="Your CGPA: "+cgpa;
}

function calculatePercentage(){
let obtained=document.getElementById("obtained").value;
let total=document.getElementById("total").value;
let percent=(obtained/total*100).toFixed(2);
document.getElementById("percentageResult").innerText="Percentage: "+percent+"%";
}

function startCountdown(){
let exam=new Date(document.getElementById("examDate").value);
let now=new Date();
let diff=exam-now;
let days=Math.floor(diff/(1000*60*60*24));
document.getElementById("countdownResult").innerText="Days Remaining: "+days;
}

function predictCollege(){
let percent=document.getElementById("boardPercent").value;
let category=document.getElementById("category").value;
let result="";

if(percent>=90){result="High chance in top tier colleges.";}
else if(percent>=75){result="Good chance in mid-tier colleges.";}
else if(percent>=60){result="Possible in private colleges.";}
else{result="Consider diploma or alternative courses.";}

if(category==="scst"){result+=" Reservation benefits may improve chances.";}
else if(category==="obc"){result+=" Moderate reservation advantage applies.";}

document.getElementById("admissionResult").innerText=result;
}
