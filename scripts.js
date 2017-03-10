mudar = function(){
  var x = document.getElementById('overlay');
  if( x.style.display === 'none') {
    x.style.display = 'block';
    return;
  }
  x.style.display = 'none';
}
