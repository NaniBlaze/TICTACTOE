var i = 0;
var id;
var val = [0,1, 2, 3, 4, 5, 6, 7, 8];
var check1 = [];
var check2 = [];
var result =[["0","1","2"],["0","3","6"],["0","4","8"],["1","4","7"],["2","5","8"],["3","4","5"],["2","4","6"],["6","7","8"]];
function symbol(id) 
{
    i = i + 1;
    if (i % 2 != 0) 
    {
        check1.push(id);
        
        //check1.sort(function(a, b){return a-b});
        console.log(check1)

        document.getElementById(id).style= "background-color:red;padding: 30px;";

        Result();
    }
    if (i % 2 == 0) 
    {

        check2.push(id);
        
        document.getElementById(id).style = "background-color:green;padding: 30px;";
       
      //  check2.sort(function(a, b){return a-b});
        console.log(check2)
        Result1();
    }
}


function Result() 
{
    for(var h of result)
    {
        var k=0;
        for(var j of h)
        {
            
            for( var g of check1)
            {  
                if (g==j){              
                k=k+1;
                console.log("k"+k);
                }
            }
        }
        if (k==3)
        {
            document.body.style="background-color:red";
            document.getElementById("k").innerHTML="RED";
            document.getElementById("kkk").innerHTML="WON";


            break;
        }
    }
}
function Result1()
{
    for(var h of result)
    {
        var p=0;
        for(var j of h)
        {
            
            for (var g of check2)
            {
                if (g==j){
                p=p+1;
                console.log("P"+p);
                }
            }
        }
        if (p==3)
        {

            document.body.style="background-color:green";
            document.getElementById("kk").innerHTML="GREEN";
            document.getElementById("kkk").innerHTML="WON";
            break;
        }



    }
   

  
}

