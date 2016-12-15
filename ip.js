$(document).ready(function () {
    var searchValue = "";

    $.getJSON('http://ipinfo.io/', function (data) {
        searchValue = data.ip;
    })

    $("#ip-search").submit(function (e) {
        e.preventDefault();
        searchValue = $("#search-input").val();
        display(searchValue);
    });

    function display(searchValue) {

        $.getJSON('http://ipinfo.io/' + searchValue + '/json', function (data) {
            console.log(data);
        })
    }

});
