function isValidMyEmeil(myEmeil){ 
   return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(myEmeil); 
} // 1 вариант

var a = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
if (!a){
	alert('Уверены что email введен верно?')
	return false
}