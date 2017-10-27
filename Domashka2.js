var a=[1,6,3,2,5,4];
  for (var i = 0; i < a.length; i++)
  for (var q = 1; q < a.length; q++)
  if (a[q-1]>a[q]){
  var c=a[q-1];
  a[q-1]=a[q];
  a[q]=c;
};
console.log(a);
document.write(a);

