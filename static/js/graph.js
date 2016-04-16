$(function () {
    $('#graph').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'History of Sales Data & Predictive Sales Data'
        },
        xAxis: {
            categories: ['1', '2', '3', "4", "5", "6", "7"]
        },
        yAxis: {
            title: {
                text: 'Number of Sales'
            }
        },
        series: [{
            name: 'Historical',
            data: [1, 2, 3,4,5,6, 7]
        }, {
            name: 'Predictive',
            data: [1, 2, 4, 5, 8, 10 , 11]
        }]
    });
});
