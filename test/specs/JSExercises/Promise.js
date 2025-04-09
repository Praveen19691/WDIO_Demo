let mypromise = new Promise((resolved,rejected)=>{
    let x = 35;
    let result;
    if(x>30){
        result=true;
    }
    else{
        result=false;
    }
    if(result){
        resolved("ok success");
    }
    else{
        rejected("sorry error")
    }

});
mypromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});