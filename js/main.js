$(function(){
  $(document).ready(function(){
    
    $("#sp_navi_btn").click(function () {
      $(this).next().slideToggle();
    });
  });
});


    
// $("#side_navi1").on('click', (e) => {
      
//   const content = $(e.target)
//     .closest('.side_label')
//     .find('.side_ul');
    
//   content.slideToggle();
// });
$("#side_navi2").on('click', (e) => {
      
  const content = $(e.target)
    .closest('.side_label')
    .find('.side_ul');
    
   content.slideToggle();
});



const showTab = (selector) => {
  
  console.log(selector);
  
  $('.img_menu > li').removeClass('active');
  
  $('.img_content > li').hide();
  
  $(`.img_menu a[href="${selector}"]`)
  .parent('li')
  .addClass('active');
  
  $(selector).show();
};

$('.img_menu a img').on('click', (e) => {
  e.preventDefault();
  
  const selector = $(e.target).parent('a').attr('href');
  showTab(selector);
});

showTab('#img-1');