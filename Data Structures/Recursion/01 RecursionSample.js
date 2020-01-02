function recursionSample(val){
	if(val<1) return;
  
  recursionSample(val-1)
  console.log(val);
}

recursionSample(3)
