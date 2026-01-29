let isloggedin =true;
let isprofilecomplete=false;


function msg1(isloggedin,isprofilecomplete){
if( isloggedin!= true)
{
    console.log("Please Login")
    if(isprofilecomplete==true)
    {
        console.log('Complete Your Profile')

    }
    else{
        console.log("Welcome back")
    }
}
}
msg1(isloggedin,isprofilecomplete)
