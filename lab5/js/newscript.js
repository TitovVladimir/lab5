window.onload = function() {
  var contentBlockElem = $('#content_block');
  var markSelect = $('.mark_select');
  var modelSelect = $('.model_select');
  var modelCheck = $('.model_select').val();
  var yearSelect = $('.year_select');
  var markCheck = $('.mark_select').val();
  var modelCheck = $('.model_select').val();
  var yearCheck = $('.year_select').val();
  var disSelect = $('.unDis');
  var disButton = $('.reset_button');
  var cars = 
    [{img: "https://avatars.mds.yandex.net/get-autoru-all/914564/be8f511db0ed7d385ae9d62ef27a4eec/320x240", mark: "BMW", model: "3er", year: "2013" },
	{img: "https://i.ytimg.com/vi/A7KUSlGmVhc/mqdefault.jpg", mark: "Audi", model: "rs6", year: "2017" },
	{img: "http://40.img.avito.st/288x216/3703403040.jpg", mark: "Mazda", model: "6", year: "2008" }];
  loadMarks = function() {
	var allMarks = "";
	for (i=0; cars[i] != undefined; i++) {
	  if (cars[i+1] != undefined) {
	    allMarks = allMarks + "'<option>"+cars[i].mark+"</option>'+";
	  } else {
		allMarks = allMarks + "'<option>"+cars[i].mark+"</option>';";  
	  }
	};
    var markSelectUpdate =
    '<option hidden>Выберите марку</option>' +
    allMarks;	
    markSelect.append(markSelectUpdate);
  }
  loadContent = function() {
	var contentBlock = $('#car_info');
	contentBlock.empty();
	var imgCar = "";
	var numberCar = 0;
	markCheck = $('.mark_select').val();
    modelCheck = $('.model_select').val();
    yearCheck = $('.year_select').val();
	for (var i=0; cars[i] != undefined; i++) {
	  if (cars[i].mark == markCheck) {
		if (cars[i].model == modelCheck) {
		  if (cars[i].year == yearCheck) {
			imgCar = cars[i].img;
			numberCar = i;
		  }
		}
	  }
    }
	console.log(numberCar);
	var newInfo = 
	'<h1><img src="'+cars[numberCar].img+'" alt=""></h1>' +
	'<h2>Марка: '+cars[numberCar].mark+'</h2>' +
	'<h2>Модель: '+cars[numberCar].model+'</h2>' +
	'<h2>Год выпуска: '+cars[numberCar].year+'</h2>';
	contentBlock.append(newInfo);
	disButton.empty();
	disButton.append('<input type="submit" value="Сброс!">');
  }
  $('.mark_select').change(function() {
	disSelect.empty();
	var unDisabled =
	'<select class="model_select">' +
    '</select>' +
    '<select class="year_select" disabled>' +              
    '</select>';
	disSelect.append(unDisabled);
    var allModels = "";
	markCheck = $('.mark_select').val();
	for (i=0; cars[i] != undefined; i++) {
	  if (cars[i].mark == markCheck) {
	    allModels = allModels + "'<option>"+cars[i].model+"</option>'+";
	  } 
	};
    var modelSelectUpdate =
    '<option hidden>Выберите модель</option>' +
    allModels;	
    modelSelect = $('.model_select');
    modelSelect.append(modelSelectUpdate);
	$('.model_select').change(function() {
	  disSelect.empty();
	  var unDisabled =
	  '<select class="model_select">' +
	  allModels +
      '</select>' +
      '<select class="year_select">' +              
      '</select>';
      disSelect.append(unDisabled);
      var allYears = "";
	  modelCheck = $('.model_select').val();
	  for (i=0; cars[i] != undefined; i++) {
	    if (cars[i].model == modelCheck) {
	      allYears = allYears + "'<option>"+cars[i].year+"</option>'+";
	    } 
	  };
      var yearSelectUpdate =
      '<option hidden>Выберите год</option>' +
      allYears;	
      yearSelect = $('.year_select');
      yearSelect.append(yearSelectUpdate);
	  $('.year_select').change(function() {
		loadContent();
	  })//loadContent
    })//loadYears
  })//loadModels
  loadMarks();
}	