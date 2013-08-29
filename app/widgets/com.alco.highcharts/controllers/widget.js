function loadChart(type,data){ // data argument must be properly designed so it can work in different situations
	var templateURL;

	// pre-define different HTML files for different types of charts and different algorithms to interpret the data values
	switch (type){
		case "PIE":
			templateURL=WPATH('/html/pie.html');
			break;
	}

	$.chartWebView.url=templateURL;
	$.chartWebView.addEventListener('load', function() {
		Ti.API.info('chartWebView ready');

		var region=data.region;
		var s1=data.s1;
		var s2=data.s2;
		var s3=data.s3;

		$.chartWebView.evalJS('plotChart('+JSON.stringify(region)+','+JSON.stringify(s1)+','+JSON.stringify(s2)+','+JSON.stringify(s3)+')');	 
	});
}

exports.loadChart=loadChart;