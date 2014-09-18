$.pie_chart.loadChart('PIE',{
	region:['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
	s1:[5, 3, 4, 7, 2],
	s2:[2, 7, 2, 2, 5],
	s3:[5, 1, 10, 6, 1]
});

$.line_chart.loadChart('LINE',{
	data:	[{
         	   name: 'Data1',
            	data: [150, 142, 138]
          	},{
	        	name: 'Data2',
            	data: [70,78,85]
        	}, {
            	name: 'Data3',
            	data: [121, 116, 101]
        	}],
	cat: 	['6/25/2014', '6/26/2014', '6/27/2014'],
	title:	'Chart Title Goes Here'
});

$.index.open();
