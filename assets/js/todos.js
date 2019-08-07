// Check off specific to do's by clicking
$("li").click(function(){
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
			color: "black", 
			textDecoration: "none"
		});
	}
	//else
	else {
		//turn it black
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}

});