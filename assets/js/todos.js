// Check off specific to do's by clicking
$("li").click(function(){
	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
});