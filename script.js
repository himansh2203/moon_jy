function changeBackground(){
	var choice = document.getElementById('choice').value;
	if(choice == ""){
		alert("No Image Selected!");
	}else{
		var image = choice;
	}
 
	var result=document.getElementById('result');
	result.removeAttribute('style');
	result.innerHTML="<img src='"+image+"' width='100%' height='550px'/>";
 
}
