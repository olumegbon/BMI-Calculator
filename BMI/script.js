
function calBmi(){
    var name=document.getElementById('name');
    var weight=document.getElementById('weight');
    var height=document.getElementById('height');
    var result=document.getElementById('displayResult'); 
    
    
    
    if(name.value==""|| weight.value==""||height.value==""){alert('one the field is NOT filled!')}
    
    
    
    else if(name.value!=""&& weight.value!=""&&height.value!=""){
    
    var Bmical= weight.value/Math.pow(height.value,2);
    if(Bmical<25){
    
    result.innerHTML= "BMI result is"+" "+ Bmical + "," + name.value +" " +" "+  "is NOT overweight";}
    
    
    else{ result.innerHTML= "BMI result is"+" "+ Bmical + "," + name.value +" " +" "+  "is overweight"; }
    
    }};
    
    
    
    function reset(){

    name.value="";
    weight.value="";
    height.value="";
    result.innerHTML="";
    }
    