function openSlideMenu(){
  document.getElementById('side-menu').style.width='250px';
  document.getElementById('main').style.marginLeft='250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width='0';
  document.getElementById('main').style.marginLeft='0';
}

$(".navbar").click(function(){
    $(".side-nav").toggle();
});
