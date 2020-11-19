$('#buttonSubmit1').click(function() {
    console.log($('#latInput').val());
    console.log($('#longInput').val());
    $.ajax({
        url: "libs/php/getAddressApi.php",
        type: 'POST',
        dataType: 'json',
        data: {
            latitude: $('#latInput').val(),
            longitude: $('#longInput').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#addressStreet').html(result['data']['street']);
                $('#addressStreetNumber').html(result['data']['streetNumber']);
                $('#addressState').html(result['data']['adminName1']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error')
        }
    }); 


});


$('#buttonSubmit2').click(function() {
    console.log($('#north').val());
    console.log($('#south').val());
    console.log($('#west').val());
    console.log($('#east').val());
    $.ajax({
        url: "libs/php/getEarthquakeApi.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#north').val(),
            south: $('#south').val(),
            west: $('#west').val(),
            east: $('#east').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#earthquakeApiDate').html(result['data'][0]['datetime']);
                $('#earthquakeApiMag').html(result['data'][0]['magnitude']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error')
        }
    }); 


});


$('#buttonSubmit3').click(function() {
    console.log($('#airportCode').val());
    $.ajax({
        url: "libs/php/getWeatherApi.php",
        type: 'POST',
        dataType: 'json',
        data: {
            code: $('#airportCode').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#weatherDate').html(result['data']['datetime']);
                $('#weatherTemperature').html(result['data']['temperature']);
                $('#weatherClouds').html(result['data']['clouds']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error')
        }
    }); 


});

