
function loadData() {

	var $body = $('body');
	var $wikiElem = $('#wikipedia-links');
	var $nytHeaderElem = $('#nytimes-header');
	var $nytElem = $('#nytimes-articles');
	var $greeting = $('#greeting');

	// clear out old data before new request
	$wikiElem.text("");
	$nytElem.text("");
	
	var streetString = $('#street').val();
	var cityString = $('#city').val();
	var address = streetString + ', ' + cityString;
	
	$greeting.text('So, you want to live at ' + address + '?');
	
	var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=800x400&location=' + address + '';
	
	$body.append('<img class="bgimg" src="' + streetviewUrl + '">');
	


	


	return false;
};

$('#form-container').submit(loadData);
