$(document).ready(function () {
            $("ip-search").submit(function (e) {
                e.preventDefault();
                var searchValue = $("search-input").val();
                display(searchValue);
            });

            function display(searchValue) {
                $.getJSON('http://ipinfo.io', function (data) {
                    console.log(data)
                }), {
                    "ip": "203.205.28.14",
                    "hostname": "static.cmcti.vn",
                    "city": "Ho Chi Minh City",
                    "region": "Ho Chi Minh City",
                    "country": "VN",
                    "loc": "10.8142,106.6438",
                    "org": "AS45903 CMC Telecom Infrastructure Company"
                });

            $.get("http://ipinfo.io", function (response) {
                console.log(response.ip, response.country);
            }, "jsonp");
