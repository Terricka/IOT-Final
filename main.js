console.log("main");

var counter = 0;

$("#record").click(function(){
	$(this).css("background", "tomato");
	$("#status").css("background", "tomato");
	counter++;

	if(counter == 2){
		counter=0;
		$("#record").css("background", "lightgrey");
		$("#status").css("background", "#fff");
		$("#status").css("border", "#1px solid lightgrey");
	}

});

$("#stop").hover(function(){
	$(this).toggleClass("hovered");
	$("#status").toggleClass("hovered");

});

$("#record").hover(function(){
	$(this).toggleClass("recorded");
	$("#status").toggleClass("recorded");

});

$("#saver").hover(function(){
	$(this).toggleClass("saving");
	$("#status").toggleClass("saving");

});

$("#stop").click(function(){
	counter = 0;
})


