function loadChart(type,data){ // data argument must be properly designed so it can work in different situations
	var templateURL, plotChart;

	// pre-define different HTML files for different types of charts and different algorithms to interpret the data values
	switch (type){
		case "PIE":
			templateURL=WPATH('/html/pie.html');
			plotChart = 'plotChart('+JSON.stringify(data.region)+','+JSON.stringify(data.s1)+','+JSON.stringify(data.s2)+','+JSON.stringify(data.s3)+')';
			break;
		case "LINE":
			templateURL=WPATH('/html/line.html');
			plotChart = 'plotChart('+JSON.stringify(data.data)+','+JSON.stringify(data.cat)+','+JSON.stringify(data.title)+')';
			break;
	}

	$.chartWebView.url=templateURL;
	$.chartWebView.addEventListener('load', function() {
		Ti.API.info('chartWebView ready');

		$.chartWebView.evalJS(plotChart);	 
	});
}

exports.loadChart=loadChart;