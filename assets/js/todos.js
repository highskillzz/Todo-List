$("ul").on("click","li",function() {
	

	$(this).toggleClass("completed");

	// if ($(this).css("color") === "rgb(128, 128, 128)") {

	// 	$(this).css({
	// 		"text-decoration": "none",
	// 		"color": "black"
	// 	});
	// }
	// else {


	// 	$(this).css({
	// 		"text-decoration": "line-through",
	// 		"color": "gray"
	// 	});
	// }

});


$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todo=$(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " +todo +" </li>");
	}
	
});