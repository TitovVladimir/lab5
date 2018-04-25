window.onload = function() {
  var markSelect = $('.mark_select');
  var modelSelect = $('.model_select');
  var modelCheck = $('.model_select').val();
  var yearSelect = $('.year_select');
  var markCheck = $('.mark_select').val();
  var yearCheck = $('.year_select').val();
  var disSelect = $('.unDis');
  var disButton = $('.reset_button');
  var cars = 
    [{img: "img/bmw3.webp", mark: "BMW", model: "3er", year: "2013" },
	{img: "img/rs6.jpg", mark: "Audi", model: "rs6", year: "2017" },
	{img: "img/suberb.jpg", mark: "Scoda", model: "Superb", year: "2017" },
	{img: "img/golf.jpg", mark: "VW", model: "Golf 7 GTI", year: "2015" },
	{img: "img/mazda6.jpg", mark: "Mazda", model: "6", year: "2008" }];
  var loadMarks = function() {
	var allMarks = "";
	for (var i=0; cars[i] != undefined; i++) {
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
  var loadContent = function() {
	var contentBlock = $('#car_info');
	contentBlock.empty();
	var numberCar = 0;
	markCheck = $('.mark_select').val();
  modelCheck = $('.model_select').val();
  yearCheck = $('.year_select').val();
	for (var i=0; cars[i] != undefined; i++) {
	  if (cars[i].mark == markCheck) {
		  if (cars[i].model == modelCheck) {
		    if (cars[i].year == yearCheck) {
			    numberCar = i;
		    }
		  }
	  }
  }
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
	for (var i=0; cars[i] != undefined; i++) {
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