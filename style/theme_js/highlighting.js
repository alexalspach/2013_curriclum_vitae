// JavaScript Document

function highlight(well_name) {

	$( '.well' ).each(function( index ) {	
	//alert('16');
				$(this).removeClass('highlight-selection' );
				
			
	
	});		
	
	$(well_name).addClass('highlight-selection')
}