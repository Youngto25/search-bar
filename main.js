keyword.oninput = function(e){
  var value = keyword.value;
  if(value){
    choose.classList.add('active');
  }else{
    choose.classList.remove('active')
  }
}