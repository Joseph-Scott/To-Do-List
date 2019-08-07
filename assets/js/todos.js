// Check off specific to do's by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

// Click on X to delete To Do
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})