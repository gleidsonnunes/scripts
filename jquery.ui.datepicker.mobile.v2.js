(function($, undefined ) {	
		$(document).ready(function(){		
				$( "input[type='date']" ).each(function(){
						$(this).attr('type', 'text');
						$(this).datepicker({ dateFormat:"dd/mm/yy", showOtherMonths: true,minDate:$(this).attr( "min" ),maxDate:$(this).attr( "max" )});
					});	
			});
	})( jQuery );