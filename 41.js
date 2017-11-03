  for (var i=0; i<9; i++) {
    document.getElementById('cross').innerHTML+='<div class="block"></div>';
  }
  var hod= 0;
  document.getElementById('cross').onclick= function(event) {
	  console.log(event);
	  if (event.target.className == 'block'){
		if(hod%2==0) {
		  event.target.innerHTML ='X';
      }
	    else {
		  event.target.innerHTML ='0';
		}
        hod++;		
      }  
  
  }