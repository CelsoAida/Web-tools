/*== Accordion DOM Elements==*/ 
var accordP = document.querySelectorAll('.accord_info');
var accordH = document.querySelectorAll('.accord .list header')
var accordBtn = document.querySelectorAll('.accord .list header')


/*==Tab DOM Elements==*/
var tabBtn = document.querySelectorAll('.tabs .btn ul li');
var tabP = document.querySelector('.tabs .tab_info');



var txt = text;
var accordArr = [];
var tabArr = [];

window.addEventListener('load', function() {
	accordion();
	tabs();
})

function accordion() {
	var index = null;
	for (var i=0; i<accordBtn.length; i++) {
		accordP[i].innerHTML = txt.info[i];
		accordH[i].innerHTML = txt.header[i];
		accordArr.push(accordBtn[i]);

		accordBtn[i].addEventListener('click', function() {
			index = accordArr.indexOf(this); // let index equal index of this btn

			for(var j=0; j<accordP.length; j++) {
				accordP[j].classList.remove('act');
				accordP[index].classList.add('act');
			}
		})
	}
}

function tabs() {
	var index = null;
	for(var i=0; i<tabBtn.length; i++) {
		tabP.innerHTML = txt.info[0];
		tabBtn[i].innerHTML = txt.tabs[i];
		tabArr.push(tabBtn[i]);

		tabBtn[0].style = '\
					height: 40px;\
					margin-top: -10px;\
					border: 1px solid rgba(0,0,0,0.1);\
					border-bottom-color: transparent;\
					background-color: #fff;\
					color: #222;\
					border-radius: 5px 5px 0 0;\
					line-height: 40px;\
					box-shadow: 0px -1px 3px rgba(0,0,0,0.15)\
				';

		tabBtn[i].addEventListener('click', function() {
			index = tabArr.indexOf(this);
			tabP.innerHTML = txt.info[index];

			for(var j=0; j<tabBtn.length; j++) {
				tabBtn[j].style = "";

				tabBtn[index].style = '\
					height: 40px;\
					margin-top: -10px;\
					border: 1px solid rgba(0,0,0,0.1);\
					border-bottom-color: transparent;\
					background-color: #fff;\
					color: #222;\
					border-radius: 5px 5px 0 0;\
					line-height: 40px;\
					box-shadow: 0px -1px 3px rgba(0,0,0,0.15)\
				';
			}
		})
	}
}

for(var a in document) {
	console.log(a)
}


