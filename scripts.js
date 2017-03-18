function mudar(){
  var x = document.getElementById('overlay');
  if( x.style.display === 'none') {
    x.style.display = 'block';
    return;
  }
  x.style.display = 'none';
}

function data() {
	var d = new Date();
	var texto =document.getElementById("a");
	texto.innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}
