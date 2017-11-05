function F(n) {
  var a=0,
	  b=1;
  for (var i=2; i <=n; i++) {
	var c=a+b;
	a=b;
	b=c;
	}
  	return b;
}
console.log(F(2));	
console.log(F(9));
