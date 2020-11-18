//jshint esversion:6

$(".search-btn").click(function (e) { 
    if($(".search-bar").css("visibility") === "hidden"){
        $(".search-bar").css("visibility", "visible");
    } else {
        $(".search-bar").css("visibility", "hidden");
    }
    
});