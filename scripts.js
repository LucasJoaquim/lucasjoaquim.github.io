mudar = function(){
  var x = document.getElementById('overlay');
  var y = document.getElementById('menu');
  if( x.style.display === 'none') {
    x.style.display = 'block';
    y.backgroundImage = url('menu-preto.svg');                               
    return;
  }
  x.style.display = 'none';
  y.backgroundImage = url('menu.svg');   
}
