let a=10
let b=20
let c=90
function big(a,b,c){
    if(a>b)
    {
        if(a>c)
        {
            return a
        }
    }
    else if(b>a)
    {
        if(b>c)
        {
          
          return b
        }  
        
    }
    else{
        
        return c
        
    }
}
let re=big(50,2,5)
console.log(re)
