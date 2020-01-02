function fibonacci(n){
	if(n < 1) return null
	if(n==1 || n==2) return 1
  
  return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10))
