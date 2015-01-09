(function () {

	var i18nde = moment();
	i18nde.locale("de");

	angular.module('deFilter', []).filter('de', function() {

		return function(input) {

			if (input === null) { return ""; }  

		  return i18nde(new Date(input)).format('dd MMMM YYYY');

		};
	});

})();