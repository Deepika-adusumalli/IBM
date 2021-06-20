function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
  
//Final Result Display
    if(principal<=0)
    {
        alert("Principal should be greater than 0")
        document.getElementById("principal").focus();
    }
    else 
        {document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark><br>at an interest rate of <mark>"+rate+"%</mark>,<br>you will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"<mark><br>";}

}

//To display the updated rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rateval+"%";
}


    

        
