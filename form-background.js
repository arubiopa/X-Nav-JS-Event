
text = document.getElementById('texto');
write = document.getElementById('write');
mostrar = function (e){
  write.style.background = text.value;
}
text.addEventListener('input',mostrar);
