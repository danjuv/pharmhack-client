$(document).ready(function() {
  var date1 = $('#date1').val();
  var date2 = $('#date2').val();
  $.get("http://192.168.0.6/api/recommendedOrders?dateFrom="+date1+"&dateTo="+date2, function(data) {
      highestProduct = "placeolder";
      highestProductCost = 87;
      lowestProduct = "Placeyounger";
      lowestProductCost = 17;
      highestTrend = "placeolder";
      lowestTrend = "placeolder"
      highestTrendCost = 141;
      lowestTrendCost = 44;
      $('#highest-cost').text(highestProductCost);
      $('#highest-name').text(highestProduct);
      $('#lowest-name').text(lowestProduct);
      $('#lowest-cost').text(lowestProductCost);
      $('#trending-highest-product').text(highestTrend);
      $('#lowest-trending-name').text(lowestTrend);
      $('#trending-highest-cost').text(highestTrendCost)
      $('#trending-lowest-cost').text(lowestTrendCost)``

  });
})
