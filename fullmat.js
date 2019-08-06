
var increment=0;
var i=0;
var check1=[];
var check2=[];
function myFunction()
{
    var a = `<table align="center" style="margin-top: 50px;">`;
    var x = document.getElementById("id1").value;
    console.log(x);
    for (var i = 0; i < x; i++) 
    {
        a=a+`<tr>`;
        for (var j = 0; j < x; j++) 
        {
            increment=increment+1;
            a = a + `<td><button id=`;
            a =a+increment
            a=a+` onclick="symbol(this.id)"style="padding: 30px;"> </button></td>`;     
        }
        a=a+`</tr>`;
    }
    a=a+`</table>`;
    document.getElementById("id2").innerHTML += a;
}
function symbol(id) 
{
    i = i + 1;
    if (i % 2 != 0) 
    {
        check1.push(id);
        
        console.log(check1)

        document.getElementById(id).style= "background-color:red;padding: 30px;";
        document.getElementById(id).disabled=true;


        Result();
    }
    if (i % 2 == 0) 
    {

        check2.push(id);
        
        document.getElementById(id).style = "background-color:green;padding: 30px;";
        document.getElementById(id).disabled=true;

       
      //  check2.sort(function(a, b){return a-b});
        console.log(check2)
        Result1();
    }
}
function Result()
{
    
    var x = document.getElementById("id1").value;
    if (check1.length>=x)
    {
       
        var combine = function(a, min) 
        {
            var fn = function(n, src, got, all) 
            {
                if (n == 0) 
                {
                    if (got.length > 0) 
                    {
                        all[all.length] = got;
                    }
                    return;
                }
                for (var j = 0; j < src.length; j++) 
                {
                    fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
                }
                return;
            }
            var all = [];
            for (var i = min; i < a.length; i++) 
            {
                fn(i, a, [], all);
            }
            all.push(a);
            return all;
        }
        var subsets = combine(check1,x);
        console.log(subsets)
        
        for(var t=0;t<subsets.length;t++)
        {
            var arra=subsets[t];
            var len=subsets[t].length;
            
            if (len==x)
            {
                var rr="";
                arra.sort(function(a, b){return a-b});
                var d=arra[1]-arra[0];
               

            for(var u=2;u<len;u++)
            {
                
                if (arra[u]-arra[u-1]!=d)
                {
                    rr=rr+"0";
                }
                else
                {
                    rr=rr+"1"
                }
                
            
            }
            
         
            if (d==1||d==x||d-1==x||d+1==x){
              
            if (rr.indexOf("0")==-1)
            {
                document.body.innerHTML="RED WON";
              
                
                document.body.style="font-size: 200px; color:whitesmoke;background-color:red";
                console.log("RED WON")
                break;
            }
        }
        }

        }
   
    }
}
function Result1()
{
    
    var x = document.getElementById("id1").value;
    if (check2.length>=x)
    {
       
        var combine = function(a, min) 
        {
            var fn = function(n, src, got, all) 
            {
                if (n == 0) 
                {
                    if (got.length > 0) 
                    {
                        all[all.length] = got;
                    }
                    return;
                }
                for (var j = 0; j < src.length; j++) 
                {
                    fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
                }
                return;
            }
            var all = [];
            for (var i = min; i < a.length; i++) 
            {
                fn(i, a, [], all);
            }
            all.push(a);
            return all;
        }
        var subsets = combine(check2,x);
        console.log(subsets)
      
        for(var t=0;t<subsets.length;t++)
        {
            var arra=subsets[t];
            var len=subsets[t].length;
            if (len==x)
            {
            var rr="";
            arra.sort(function(a, b){return a-b});
            var d=arra[1]-arra[0];
            
            for(var u=2;u<len;u++)
            {
                
                if (arra[u]-arra[u-1]!=d)
                {
                    rr=rr+"0";
                }
                else
                {
                    rr=rr+"1"
                }
            
            
        }
        if(d==1||d==x||d-1==x||d+1==x)
        {
            if (rr.indexOf("0")==-1)
            {
                document.body.innerHTML="GREEN WON";
             
              
                
                document.body.style="font-size: 200px; color:whitesmoke;background-color:green";
                console.log("GREEN WON")
                break;
            }
        }
        }

        }
   
    }
}

