function myPromise(executor){
	let self = this;
  self.status = 'pending';//等待态
  self.value = undefined;//成功态
  self.value = undefined;//失败态
  
  function resolve(value){
  	if(self.status === 'pending'){
    	self.status = 'resolved';
      self.value = value;
    }
  }
  function reject(reason){
  	if(self.status === 'pending'){
    	self.status = 'rejected';
      self.reason = reason;
    }
  }
  try{
  	executor(resolve,reject);
  }catch(e){
  	reject(e);//捕获时发生异常，直接失败。
  }
}

//onFufiled成功的回调
//onRejected 失败的回调
myPromise.prototype.then = function(onFufiled,onRejected){
	let self = this;
  if(self.status === 'resolved'){
  	onFufiled(self.value);
  }
  if(self.status === 'rejected'){
  	onRejected(self.reason);
  }
}
module.exports = myPromise;
