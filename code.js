//В будущем надо сделать проверку, на addEventListener равен ли undefined ведь в IE8 addEventListener равен undefined и надо использовать attachEvent и чтобы удалить detachEvent
codeParams.saveButton.addEventListener("click", function(){
	
	var time = 1;
	
	codeParams.displayLoad.style.animation = "makeLoad "+time+"s";
	codeParams.displayGrey.style.transform = "scale(1)";
	codeParams.displayGrey.style.borderRadius = "0";
	codeParams.displayGrey.style.backgroundColor = "#bbb";
	
	setTimeout(function(){
		
		codeParams.displayLoad.style.transform = "scale(1)";
		
	}, time*999);
	
});