const user=[
    "abcd@gmail.com",
    "rahul@gmail.com",
    "chichi@gmsil.com",
]; 

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random()*5);

        setTimeout(()=>{
            let prob=Math.floor(Math.random()*10);
            if(prob<=5)resolve("successfully sent");
            else reject("not sent");


        },time*1000);

    });
}
sendEmail("abcd@gmail.com")
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})
