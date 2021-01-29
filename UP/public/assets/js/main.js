//1 ~ Loading
$(window).load(function(){
    $('.input-phone').intlInputPhone();
    if($('.custom-range-slider').length>0) {
   $(".custom-range-slider").ionRangeSlider({});
   }
   RangeSlide()

  })

//2 ~ start navbar activeClass
 $(document).ready(function() {
    $('.input-phone').intlInputPhone();
    $('#navbar ul li:nth-child(1)').addClass('active')
    RangeSlide()
 })
 $(document).on('click', '#navbar ul li', function(){
    $(this).addClass('active')
    
  })
  
  $(document).on('click', '.nextBtn_1', function(){
    $('#navbar ul li:nth-child(2)').addClass('active')
   
  })
  $(document).on('click', '.nextBtn_2', function(){
    $('#navbar ul li:nth-child(3)').addClass('active')
  })
  
    $(document).on('click','.finishBtn', function(){
        swal("Completed!");
  })
  
  $(document).on('click', '.backBtn_2', function(){
    $('#navbar ul li:nth-child(2)').removeClass('active')
  })
  $(document).on('click', '.backBtn_3', function(){
    $('#navbar ul li:nth-child(3)').removeClass('active')
  })
//end navbar activeClass
 
//3 ~ start Phone Function
 $(document).on('click','.menus ul li', function(){
   $('.input-phone').intlInputPhone();
    })

 $(document).on('click','span a', function(){
     $('.input-phone').intlInputPhone();
    })

   $(document).on('click','h5 a', function(){
     $('.input-phone').intlInputPhone();
   })

 
 $(document).on('click', function(){
     $('#phoneNumber').attr('type', 'number')
     RangeSlide()
     $('.filter__label label').addClass('active')
   })
 
   $(document).on('click', '.input-group-btn', function(){
    $(this).toggleClass('open')
 })
 // end Phone Function

 
//4 ~ start countary Search and Value Insert input
 $(document).on("keyup", '#materialContactFormSelect', function (e) {
   var input, filter, a, i;
   input = document.getElementById("materialContactFormSelect");
   filter = input.value.toUpperCase();
   div = document.getElementById("dropMenuCountry");
   a = div.getElementsByTagName("a");
   for (i = 0; i < a.length; i++) {
       txtValue = a[i].textContent || a[i].innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           a[i].style.display = "";
       } else {
           a[i].style.display = "none";
       }
   }
 })
 
 $(document).on("click", '#dropMenuCountry a', function (e) {
 var  ulVal = $(this).parent().find('input').val();
 $('.countaryLabel').addClass('active')
   document.getElementById('materialContactFormSelect').value = ulVal;

 });

 //  end countary Search and Value Insert input

// 5 ~ start Range Slide

 
function RangeSlide(){
const slider = document.getElementById('sliderPrice');
const rangeMin = parseInt(slider.dataset.min);
const rangeMax = parseInt(slider.dataset.max);
const step = parseInt(slider.dataset.step);
const filterInputs = document.querySelectorAll('input.filter__input');

noUiSlider.create(slider, {
    start: [rangeMin, rangeMax],
    connect: true,
    step: step,
    range: {
        'min': rangeMin,
        'max': rangeMax
    },
  
    // make numbers whole
    format: {
      to: value => value,
      from: value => value
    }
});

// bind inputs with noUiSlider 
slider.noUiSlider.on('update', (values, handle) => { 
  filterInputs[handle].value = values[handle]; 
});

filterInputs.forEach((input, indexInput) => { 
  input.addEventListener('change', () => {
    slider.noUiSlider.setHandle(indexInput, input.value);
  })
});
}

// end Range Slide