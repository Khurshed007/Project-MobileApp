

 const moonSun = document.getElementById('moon-sun');


 moonSun.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
 });
         
    var dayTime = new Date()
    
    if (dayTime > 14){
        document.body.classList.toggle("dark");
       }       

  $(".carousel").owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
      0:{
        items:1,
        nav:false
      },
       780:{
        items:2,
        nav:false
      },
       1090:{
        items:3,
        nav:false
      }
    }

  });
