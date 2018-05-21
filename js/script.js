
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
	
	var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
	
	$body.append('<img class="bgimg" src="' + streetviewUrl + '">');
	
	var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityString + '&format=json&callback=wikiCallback';
	
	$.ajax({
		url: wikiUrl,
		dataType: "jsonp",
		success: function(response) {
			var articleList = response[1];
			
			for ( var i = 0; i < articleList.length; i++) {
				articleStr = articleList[i];
				var url = 'http://en.wikipedia.org/wiki/' + articleStr;
				$wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
			};
		}
	});
	
	
	return false;
};

$('#form-container').submit(loadData);
