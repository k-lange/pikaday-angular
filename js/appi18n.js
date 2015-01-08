angular.module('Pikadayi18nDemo', ['angularPikaday'])
  .config(['pikadayProvider', function(pikadayProvider) {

  	var i18n = moment(); // isolate Moment for the i18n demo section 

  	i18n.locale("de"); // moment.locale("de");

    pikadayProvider.setConfig({
      i18n: {
        previousMonth : 'Vorheriger Monat',
        nextMonth     : 'Nächster Monat',
        months        : i18n.localeData()._months,
        weekdays      : i18n.localeData()._weekdays,
        weekdaysShort : i18n.localeData()._weekdaysShort
      }
	  });
	}])
	.controller('Ctrl2', function($scope) {

		// controller stuff

	});

	angular.bootstrap(document.getElementById("i18n_marked"), ['Pikadayi18nDemo', 'angularPikaday']);