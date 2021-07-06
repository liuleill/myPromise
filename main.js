let Promise = require('./Promise');

let promise = new Promise(function(resolve,reject){
    resolve(100);
})

promise.then(function(data){
    console.log('data:',data);
},function(error){
    console.log('err',error);
})