let promise1= new Promise(function(resolve, reject) {
    setTimeout(()=>resolve('done'),1000);
});

console.log(promise1);

promise1.then(function(){
    alert("Resolved Successfully");
},function(error){
    console.log("We have an error: " + error);
}).catch(function(){
    console.log("inside catch block");
});



// async functions

async function func(){
    return 1; 
    // return Promise.resolve(1);
}

func().then(function(){
    console.log("Resolved the Promise inside async");
})


