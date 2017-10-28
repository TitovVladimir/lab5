$('form.main_form').change(function(e) {
  var contentBlockElem = $('#content_block');
  var modelSelect = $('.model_select');
  var modelCheck = $('.model_select').val();
  var yearSelect = $('.year_select');
  var makeCheck = $('.mark_select').val();
  var modelCheck = $('.model_select').val();
  var yearCheck = $('.year_select').val();
  var cars = {
	bmw : {
	  img: "http://12.torrentino.thruhere.net/vlmdoee/aziatskoe_prityazhenie_skachat_besplatno_124_2.jpg",
	  make: "bmw",
	  model: "3er",
	  year: "2013"
	},
	audi : {
	  img: "https://pp.vk.me/c626322/u151338947/video/l_5e697b8d.jpg",
	  make: "audi",
	  model: "rs6",
	  year: "2017"
	},
	mazda : {
	  img: "https://cdn.riastatic.com/photosnew/auto/photo/mazda_6__140649358bx.jpg",
	  make: "mazda",
	  model: "6",
	  year: "2008"
	}		
  }
  
  selectUpdate = function() {
    if (makeCheck == cars.bmw.make){
      if ((cars.bmw.model!=modelCheck)) {
        modelSelect.empty();
        yearSelect.empty();
      }
    }
    if (makeCheck == cars.audi.make){
      if ((cars.audi.model!=modelCheck)) {
        modelSelect.empty();
        yearSelect.empty();
      }
    }
    if (makeCheck == cars.mazda.make){
      if ((cars.mazda.model!=modelCheck)) {
        modelSelect.empty();
        yearSelect.empty();
      }
    }//proverochki
    if (makeCheck == cars.bmw.make) {
      var modelSelectUpdate =
      '<option>Выберите модель</option>' +
      '<option>'+cars.bmw.model+'</option>';	
      modelSelect.append(modelSelectUpdate);
      if (modelCheck == cars.bmw.model) {
 	var yearSelectUpdate =
       '<option>Выберите год</option>' +
       '<option>'+cars.bmw.year+'</option>';	
        yearSelect.append(yearSelectUpdate);
      }
    }
    if (makeCheck == cars.audi.make) {
      var modelSelectUpdate =
      '<option>Выберите модель</option>' +
      '<option>'+cars.audi.model+'</option>';	
      modelSelect.append(modelSelectUpdate);	
      if (modelCheck == cars.audi.model) {
	var yearSelectUpdate =
        '<option>Выберите год</option>' +
        '<option>'+cars.audi.year+'</option>';	
        yearSelect.append(yearSelectUpdate);
      }	  
    }
    if (makeCheck == cars.mazda.make) {
      var modelSelectUpdate =
      '<option>Выберите модель</option>' +
      '<option>'+cars.mazda.model+'</option>';	
      modelSelect.append(modelSelectUpdate);	 
      if (modelCheck == cars.mazda.model) {
 	var yearSelectUpdate =
        '<option>Выберите год</option>' +
        '<option>'+cars.mazda.year+'</option>';	
        yearSelect.append(yearSelectUpdate);
      }	  
    }
  }
  
  viewInfoCar = function() {
    var contentBlock = $('#car_info');
    if (makeCheck == cars.bmw.make) {
      if (modelCheck == cars.bmw.model) {
	if (yearCheck == cars.bmw.year) {
	  contentBlock.empty();
	  var newInfo = 
	  '<h1><img src="'+cars.bmw.img+'" alt="Письма мастера дзен"></h1>' +
	  '<h2>Марка: '+cars.bmw.make+'</h2>' +
	  '<h2>Модель: '+cars.bmw.model+'</h2>' +
	  '<h2>Год выпуска: '+cars.bmw.year+'</h2>';
	  contentBlock.append(newInfo);
	}
      }
    }//bmw
    if (makeCheck == cars.audi.make) {
      if (modelCheck == cars.audi.model) {
	if (yearCheck == cars.audi.year) {
	  contentBlock.empty();
	  var newInfo = 
	  '<h1><img src="'+cars.audi.img+'" alt="Письма мастера дзен"></h1>' +
	  '<h2>Марка: '+cars.audi.make+'</h2>' +
	  '<h2>Модель: '+cars.audi.model+'</h2>' +
	  '<h2>Год выпуска: '+cars.audi.year+'</h2>';
	  contentBlock.append(newInfo);
	}
      }
    }//audi
    if (makeCheck == cars.mazda.make) {
      if (modelCheck == cars.mazda.model) {
	if (yearCheck == cars.mazda.year) {
	  contentBlock.empty();
	  var newInfo = 
	  '<h1><img src="'+cars.mazda.img+'" alt="Письма мастера дзен"></h1>' +
	  '<h2>Марка: '+cars.mazda.make+'</h2>' +
	  '<h2>Модель: '+cars.mazda.model+'</h2>' +
	  '<h2>Год выпуска: '+cars.mazda.year+'</h2>';
	  contentBlock.append(newInfo);
	}
      }
    }//mazda
  }
  
  selectUpdate();
  viewInfoCar();
  
});
