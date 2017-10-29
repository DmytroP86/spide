var a=[1,6,3,2,5,4];
  (function (a){
    for (var i = 0; i < a.length; i++) {
      for (var q = 1; q < a.length; q++) {
        if (a[q-1]>a[q]){
          var c=a[q-1];
          a[q-1]=a[q];
          a[q]=c;
        };
      }
    }
console.log(a);
} (a));
var b=[1,'p',5,6,8,'sdfg'];
  b = b.filter( function(item) {
    return typeof item === 'number';
  } );
console.log(b)
 var c=[1,'p',5];
   (function findNumber(c) {
     for (var i=0; i<c.length; i++) {
     if ( typeof c[i] === 'number' ) {
	 console.log (c[i]);
     }
   };
console.log(c); 
 }(c));
 var d= [1,2,3,'строка',4,5,6];
 d= d.filter( function(item) {
   return typeof item ==='string';
 });
alert(d); 


  
  
 
  


  