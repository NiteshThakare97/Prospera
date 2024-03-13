
function contentToggle(){
	const allBtn = document.querySelectorAll('.bwdpc-profile-card-17-area .bwdpc-profile-card-add');
	const allBtnWrapper = document.querySelectorAll('.bwdpc-profile-card-17-area .bwdpc-profile-card-item');
	console.log(allBtnWrapper);
	for(let i = 0; i< allBtn.length; i++){
		allBtn[i].addEventListener('click',()=>{
			allBtnWrapper[i].classList.toggle('bwdpc-profile-card-on')
		})
	}
}

contentToggle();

