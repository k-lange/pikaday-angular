(function () {

  'use strict';

  angular.module('Pikadayi18nDemo', ['angularPikaday'])
    .config(['pikadayProvider', function(pikadayProvider) {

      moment.locale("de");

      pikadayProvider.setConfig({
        i18n: {
          previousMonth : 'Vorheriger Monat',
          nextMonth     : 'Nächster Monat',
          months        : moment.localeData()._months,
          weekdays      : moment.localeData()._weekdays,
          weekdaysShort : moment.localeData()._weekdaysShort
        }
      });
    }])
    .controller('Ctrl', function($scope) {

      // controller stuff

    });
    
})();


