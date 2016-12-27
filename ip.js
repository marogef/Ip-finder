$(document).ready(function () {
    //hide the results table
    $('.table').hide();
    //    $('.map').hide();
    //declare the search value inside the input text
    var searchValue = "";



    //http://ipinfo.io/json for your own IP
    $.getJSON('http://ipinfo.io/', function (data) {
        //set the initial search value to the user ip
        searchValue = data.ip;
        $("#search-input").val(searchValue);
    });

    //when the user clicks the search button show the results
    $("#ip-search").submit(function (e) {
        //show the results to the user
        $('.table').show();
        //        $('.map').show();
        //default action will not be triggered when method is called
        e.preventDefault();
        //get value from search box
        searchValue = $("#search-input").val();
        //validate
        if (searchValue.length === 0) {
            alert('You have to add something!!!');
        } else {
            //pass value to the searchIp function to do the ip lookup and integrate that into the script
            searchIp(searchValue);
            //            initialize(searchValue);
        }
    });
    //function for doing the IP lookup using the user's input value
    function searchIp(searchValue) {

        //Use the searchValue to get the details on the user input IP
        $.getJSON('http://ipinfo.io/' + searchValue + '/json', function (data) {

            //add values to the table dynamically
            //declare a variable tr and populate it
            var htmlOutput = "";
            htmlOutput += "<li>" + data.ip + "</li>";
            htmlOutput += "<li>" + data.hostname + "</li>";
            htmlOutput += "<li>" + data.city + "</li>";
            htmlOutput += "<li>" + data.region + "</li>";
            htmlOutput += "<li>" + data.country + "</li>";
            htmlOutput += "<li>" + data.loc + "</li>";
            htmlOutput += "<li>" + data.org + "</li>";
            $('.table').append(htmlOutput);
        });

    }


    //    function initialize(searchValue) {
    //        var params = {
    //            'lat': $('.map').data('lat'),
    //            'long': $('.map').data('long')
    //        };
    //        google.maps.event.addDomListener(window, 'load', initialize(params));
    //
    //        var mapOptions = {
    //            center: new google.maps.LatLng(coordinates.lat, coordinates.long),
    //            zoom: 15,
    //            mapTypeId: google.maps.MapTypeId.ROADMAP,
    //        };
    //
    //        var mapping = new google.maps.Map(document.getElementsByClassName(".map"), mapOptions);
    //
    //        var markerIcon = {
    //            path: google.maps.SymbolPath.CIRCLE,
    //            fillColor: '#000',
    //            fillOpacity: .9,
    //            scale: 10,
    //            strokeColor: '#000',
    //            strokeWeight: 1
    //        };
    //        var marker = new google.maps.Marker({
    //            icon: markerIcon,
    //            position: new google.maps.LatLng(coordinates.lat, coordinates.long),
    //            mapping: mapping,
    //            label: {
    //                color: 'white',
    //                text: '1'
    //            }
    //        });
    //        marker.setMap(mapping);
    //    }
});
