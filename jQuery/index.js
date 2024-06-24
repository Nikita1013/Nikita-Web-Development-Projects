// ----------------------------CUSTOM ANIMATIONS-----------------------------
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});

    // Multiple animations 
    // $("h1").slideUP().slideDown().animate({opacity: 0.5});
});

$("h1").addClass("big-title margin-50");
