var viewPostByType = function(){
  $('input[type="radio"]').on('click', function(){
    var filterType = $(this).attr('id');
    var className = '.' + filterType;
    $('.post').not(className).hide();
    $('.post' + className).show();
  });
}

var viewAll = function(){
  $('#all').on('click', function(){
    $('.post').show();
  });
}

function outputUpdate(type) {
  console.log('type');
  if(type==2){
    console.log('true')
    $('.question').hide();
    $('.opinion').show();
  }
  else if(type==0){
    $('.question').show();
    $('.opinion').hide();
  }
  else{
    console.log('true')
    $('.post-list').show();
  }
}

$(document).ready(function(){
  viewPostByType();
  viewAll();
})
