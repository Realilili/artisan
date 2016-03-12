
$("#calculator").click(function(argument) {
	// body...
	var width=$("#wid").val();
	var height=$("#hei").val();
	var length=$("#len").val();
	

	var result= width * length * height;
	console.log(result) 
 $("#yard").val(result)

})

