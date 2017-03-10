mudar = function(){
  var x = document.getElementById('overlay');
  var y = document.getElementById('menu');
  if( x.style.display === 'none') {
    x.style.display = 'block';
    y.src = 'menu-preto.svg';                               
    return;
  }
  x.style.display = 'none';
  y.src = 'menu.svg';   
}
