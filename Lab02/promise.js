var a = 10;
function makePromise(){
    

var p1 = new Promise((resolve, reject) => {
    if(a == 10){
        var r = {
            status: true,
            message: 'Success'
        }
    resolve(r);
    }else {
        reject('Failure-1');
    }
})
return p1;}

makePromise(10).then((result) => { // .then is used for resolve.
    console.log(result.message);
}).catch( (error)=> {   // we can use , instead of .catch. it is used for reject.
    console.log(error);
}).finally(() => {
    console.log('Finally'); // it's gonna run either the condition is if or else.
})

var api = fetch ('https://jsonplaceholder.typicode.com/posts/1')
api.then((response) => {
    console.log(response);
    //return response.json();
}).then((data)  => {
    console.log(data);
}).catch((error) => {
    console.log(error); 
})