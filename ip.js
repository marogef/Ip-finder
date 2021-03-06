$(document).ready(function () {
    //hide the results table
    $('.table').hide();

    //declare the search value inside the input text
    var searchValue = "";

    //use http://ipinfo.io/json for your own IP
       $.getJSON("https://ipapi.co/json/", function(data){   

    //set the initial search value to the user ip
        searchValue = data.ip;
        $("#search-input").val(searchValue);
    });

    //when the user clicks the search button show the results
    $("#ip-search").submit(function (e) {
        //show the results to the user
        $('.table').show();
        //default action will not be triggered when method is called
        e.preventDefault();
        //get value from search box
        searchValue = $("#search-input").val();
        //validate the value
        if (searchValue.length === 0) {
            alert('You have to add something!!!');
        } else {
            //pass value to the searchIp function to do the ip lookup and integrate that into the script
            searchIp(searchValue);
        }
    });
    //function for doing the IP lookup using the user's input value
    function searchIp(searchValue) {
            //Use the searchValue to get the details on the user input IP
          	$.getJSON("https://ipapi.co/json/", +searchValue + '/json', function(data){

            //add values to the table dynamically
            //declare a variable and populate it
            var htmlOutput = "";
            htmlOutput += "<li>" + "Service Provider: " + data.org + "</li>";
            htmlOutput += "<li>" + "City: " + data.city + "</li>";
            htmlOutput += "<li>" + "Region: " + data.region + "</li>";
            htmlOutput += "<li>" + "Country: " + data.country + "</li>";
            htmlOutput += "<li>" + "Latitude: " + data.latitude + "</li>";    
            htmlOutput += "<li>" + "Zip: " + data.postal + "</li>";
            $('.main ol').html(htmlOutput);
            //            }
        });

    }
});
