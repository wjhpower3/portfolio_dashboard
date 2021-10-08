
function msgAppOn() {
	let msgApp = document.getElementById('msgApp');
	let cttApp = document.getElementById('contents');
	let msgBtn = document.querySelectorAll('#msgBtn > i');
	msgBtn[0].classList.toggle('on');
	msgBtn[1].classList.toggle('on');
	msgApp.classList.toggle('on');
	cttApp.classList.toggle('msgOn');
}


/*************************************
*               jQuery               *
*************************************/
$(document).ready(function(){

		
	/********* Content Editable Div *********/
	$('.editDiv').attr('contenteditable', 'true'); // editDiv클래스 추가하면 속성을 변경한다.
});