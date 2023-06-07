
// 날씨 api - 서울

// url에 간편하게 넣기위하여 apiURI에 값을 넣어기
var apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+'seoul'+"&appid="+"d7f917c9dacc91b5b1e4628da89fc394";
// console.log(apiURI); 입력값 확인을위해

// 웨더 아이콘을 배열형식으로 값을 넣기
var weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',  
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
};


$.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    success: function(resp) {
        // 아이콘, 날씨
        var $Icon = (resp.weather[0].icon).substr(0,2);
        var $weather_description =  resp.weather[0].main;
        var $Temp ='현재 온도:&nbsp;&nbsp;' + Math.floor(resp.main.temp- 273.15) + 'º';
        var $humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + resp.main.humidity+ ' %';
        var $wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +resp.wind.speed + ' m/s';
        var $city = '도시 :&nbsp;서울';
        var $cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + resp.clouds.all +"%";
        var $temp_min = '최저 온도:&nbsp;&nbsp;' + Math.floor(resp.main.temp_min- 273.15) + 'º';
        var $temp_max = '최고 온도:&nbsp;&nbsp;' + Math.floor(resp.main.temp_max- 273.15) + 'º';
        
        $('.weather_icon').append('<i class="' + weatherIcon[$Icon] +' fa-2x" style="height : 40; width : 40px;"></i>');
        $('.weather_description').prepend($weather_description);
        $('.current_temp').prepend($Temp);
        $('.humidity').prepend($humidity);
        $('.wind').prepend($wind);
        $('.city').append($city);
        $('.cloud').append($cloud);
        $('.temp_min').append($temp_min);
        $('.temp_max').append($temp_max);               
    }
})
