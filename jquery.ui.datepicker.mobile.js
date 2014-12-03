(function($, undefined ) {	
		$( ".ui-page" ).ready(function(){
				$.mobile.page.prototype.options.degradeInputs.date = true;		
				$( "input[type='date'], input:jqmData(type='date')" ).each(function(){
						$(this).attr('type', 'text');
						$(this).datepicker({ dateFormat:"dd/mm/yy", showOtherMonths: true,minDate:$(this).attr( "min" ),maxDate:$(this).attr( "max" )});
					});	
			});
	})( jQuery );