let header = document.querySelector('.header');
let filtros = document.querySelector('.filtros');
let filtros__btn = document.querySelector('.filtros__btn');
let filtros__footer = document.querySelector('.filtros__footer');
let filtros__btn2 = document.querySelector('.filtros__btn-2');
let filtros__body = document.querySelector('.filtros__body');
const tabsFilter = document.querySelector("._tabs-filter");
const tabsBtnFilter = document.querySelectorAll("._tabs-item-filter");
const tabsItemsFilter = document.querySelectorAll("._tabs-block-filter");
let filtros__btn3 = document.querySelectorAll('.filtros__btn-3');
const page = document.querySelector(".page");
if (filtros) {
	filtros__btn.addEventListener("click", function (e) {
		filtros__body.classList.add('_active');
		if (filtros__footer) {
			filtros__footer.classList.add('_active');
		}
		bgActive.classList.add('_lock-bg');
		bgActive.addEventListener("click", function (e) {
			filtros__body.classList.remove('_active');
			if (filtros__footer) {
				filtros__footer.classList.remove('_active');
			}
			bgActive.classList.remove('_lock-bg');
			for (let i = 0; i < tabsItemsFilter.length; i++) {
				const tabItemFilter = tabsItemsFilter[i];
				tabItemFilter.classList.remove('_active');
			}
		});

	});
	filtros__btn2.addEventListener("click", function (e) {
		filtros__body.classList.remove('_active');
		if (filtros__footer) {
			filtros__footer.classList.remove('_active');
		}
		bgActive.classList.remove('_lock-bg');
	});
}

tabsBtnFilter.forEach(onFilterClick);
function onFilterClick(item) {
	let currentBtn = item;
	let tabId = currentBtn.getAttribute("data-tab");
	let currentTub = document.querySelector(tabId);

	item.addEventListener("click", function () {
		currentTub.classList.add('_active');
	});
	for (let i = 0; i < filtros__btn3.length; i++) {
		const filtr__btn = filtros__btn3[i];

		filtr__btn.addEventListener('click', function (e) {
			// filtr__btn.parentElement.classList.remove('_active');
			currentTub.classList.remove('_active');
		});
	}
}

// CHECKBOX
const cheakCheackeds = document.querySelectorAll('.checkbox__input[type=checkbox]');
const filtrosCategotys = document.querySelector('.filtros__categotys');
const filtrosCategoty = document.querySelector('.filtros__categoty');

for (let i = 0; i < cheakCheackeds.length; i++) {
	const cheakCheacked = cheakCheackeds[i];
	if (cheakCheacked.checked) {
		cheakCheacked.parentElement.classList.add('_checked');
	}

	cheakCheacked.addEventListener("click", function () {
		let textLabel = cheakCheacked.parentElement.textContent;
		if (cheakCheacked.classList.contains('_checked')) {
			cheakCheacked.checked = false;
		} else {
			cheakCheacked.checked = true;
			// filtrosCategotys.insertAdjacentHTML('beforeend', `<span class="filtros__categoty">${textLabel}</span>`);
		}
		cheakCheacked.parentElement.classList.toggle('_checked');

		return false;
	});
}


var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const tabs = document.querySelector("._tabs");
const tabsBtn = document.querySelectorAll("._tabs-item");
const tabsItems = document.querySelectorAll("._tabs-block");
const tabs_2 = document.querySelector("._tabs-2");
const tabsBtn_2 = document.querySelectorAll("._tabs-item-2");
const tabsItems_2 = document.querySelectorAll("._tabs-block-2");
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerCustom = document.querySelector('.header__custom');
const bgActive = document.querySelector('.bg');
const customsActive = document.querySelectorAll("._custom-active");
const menuActives = document.querySelectorAll('._menu-active');

if (isMobile.any()) {
	document.body.classList.add('_touch');
	//=======================================================
	if (filtros) {

		headerCustom.addEventListener("click", function (e) {
			filtros__body.classList.remove('_active');
			if (filtros__footer) {
				filtros__footer.classList.remove('_active');
			}
			bgActive.classList.remove('_lock-bg');
			for (let i = 0; i < tabsItemsFilter.length; i++) {
				const tabItemFilter = tabsItemsFilter[i];
				tabItemFilter.classList.remove('_active');
			}
		});
	}
	//=======================================================
	bgActive.addEventListener("click", function (e) {
		for (let i = 0; i < menuArrowsList.length; i++) {
			const menuArrowList = menuArrowsList[i];
			menuArrowList.parentElement.parentElement.classList.remove('_active');
		}
		for (let i = 0; i < menuArrowsTienda.length; i++) {
			const menuArrowTienda = menuArrowsTienda[i];
			menuArrowTienda.parentElement.classList.remove('_active');
		}
		for (let i = 0; i < customsActive.length; i++) {
			let customActive = customsActive[i];
			customActive.classList.remove('_active');
			bgActive.classList.remove('_lock-bg');
			for (let i = 0; i < customsActive.length; i++) {
				let custom = customsActive[i];
				custom.classList.remove('_active');
			}
			menuBody.classList.remove('_active');
		}
	});
	//=======================================================
	if (menuActives.length > 0) {
		for (let i = 0; i < menuActives.length; i++) {
			const menuActive = menuActives[i];
			menuActive.addEventListener('click', function (e) {
				menuActive.parentElement.classList.add('_active');
			});
		}
	}
	let menuArrowsList = document.querySelectorAll('.menu__arrow-tienda-1');
	if (menuArrowsList.length > 0) {
		for (let i = 0; i < menuArrowsList.length; i++) {
			const menuArrowList = menuArrowsList[i];
			menuArrowList.addEventListener('click', function (e) {
				menuArrowList.parentElement.parentElement.classList.remove('_active');
			});
		}
	}
	let menuArrowsTienda = document.querySelectorAll('.menu__arrow-tienda-2');
	if (menuArrowsTienda.length > 0) {
		for (let i = 0; i < menuArrowsTienda.length; i++) {
			const menuArrowTienda = menuArrowsTienda[i];
			menuArrowTienda.addEventListener('click', function (e) {
				menuArrowTienda.parentElement.classList.remove('_active');
			});
		}
	}
	for (let i = 0; i < customsActive.length; i++) {
		let customActive = customsActive[i];
		customActive.addEventListener("click", function (e) {
			if (customActive.classList.contains('_active')) {
				customActive.classList.remove('_active');
				bgActive.classList.remove('_lock-bg');
			} else {
				bgActive.classList.add('_lock-bg');
				for (let i = 0; i < customsActive.length; i++) {
					let custom = customsActive[i];
					custom.classList.remove('_active');
				}
				customActive.classList.add('_active');
			}
			if (iconMenu.classList.contains('_active')) {
				menuBody.classList.add('_active');
			} else {
				menuBody.classList.remove('_active');
			}
			e.preventDefault();
		});
	}
	tabsBtn.forEach(onTabClick);
	function onTabClick(item) {
		item.addEventListener("click", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTub = document.querySelector(tabId);
			currentBtn.classList.toggle('_active');
			currentTub.classList.toggle('_active');
		});
	}
	tabsBtn_2.forEach(onTabClick_2);
	function onTabClick_2(item) {
		item.addEventListener("click", function () {
			let currentBtn_2 = item;
			let tabId_2 = currentBtn_2.getAttribute("data-tab");
			let currentTub_2 = document.querySelector(tabId_2);
			currentBtn_2.classList.toggle('_active');
			currentTub_2.classList.toggle('_active');
		});
	}
} else {
	document.body.classList.add('_pc');
	//=======================================================
	menuBody.addEventListener("mouseenter", function (e) {
		filtros__body.classList.remove('_active');
		if (filtros__footer) {
			filtros__footer.classList.remove('_active');
		}
		bgActive.classList.remove('_lock-bg');
		for (let i = 0; i < tabsItemsFilter.length; i++) {
			const tabItemFilter = tabsItemsFilter[i];
			tabItemFilter.classList.remove('_active');
		}
	});
	headerCustom.addEventListener("mouseenter", function (e) {
		filtros__body.classList.remove('_active');
		if (filtros__footer) {
			filtros__footer.classList.remove('_active');
		}
		bgActive.classList.remove('_lock-bg');
		for (let i = 0; i < tabsItemsFilter.length; i++) {
			const tabItemFilter = tabsItemsFilter[i];
			tabItemFilter.classList.remove('_active');
		}
	});
	//=======================================================
	tabsBtn.forEach(onTabClick);
	for (let i = 0; i < menuActives.length; i++) {
		let menuActive = menuActives[i];
		menuActive.addEventListener("mouseenter", function () {
			bgActive.classList.add('_lock-bg');
		});
		tabs.addEventListener("mouseleave", function () {
			bgActive.classList.remove('_lock-bg');
		});
	}
	for (let i = 0; i < customsActive.length; i++) {
		let customActive = customsActive[i];
		customActive.addEventListener("mouseenter", function () {
			bgActive.classList.add('_lock-bg');
		});
		customActive.addEventListener("mouseleave", function () {
			bgActive.classList.remove('_lock-bg');
		});
	}
	function onTabClick(item) {
		item.addEventListener("mouseenter", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTub = document.querySelector(tabId);
			tabsBtn.forEach(function (item) {
				item.classList.remove('_active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('_active');
			});
			currentBtn.classList.add('_active');
			currentTub.classList.add('_active');
		});
		tabs.addEventListener("mouseleave", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTub = document.querySelector(tabId);
			currentBtn.classList.remove('_active');
			currentTub.classList.remove('_active');
		});
	}
	tabsBtn_2.forEach(onTabClick_2);
	function onTabClick_2(item) {
		item.addEventListener("mouseenter", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTub = document.querySelector(tabId);
			tabsBtn_2.forEach(function (item) {
				item.classList.remove('_active');
			});
			tabsItems_2.forEach(function (item) {
				item.classList.remove('_active');
			});
			currentBtn.classList.add('_active');
			currentTub.classList.add('_active');
		});
		tabs_2.addEventListener("mouseleave", function () {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTub = document.querySelector(tabId);
			currentBtn.classList.remove('_active');
			currentTub.classList.remove('_active');
		});
	}
}
//=======================================================
let headerSearch = document.querySelectorAll('.header');
for (let i = 0; i < headerSearch.length; i++) {
	const header = headerSearch[i];
	const topOffset = header.offsetHeight;

	const yakors = header.querySelectorAll(".menu__link[data-scroll]");
	for (let i = 0; i < yakors.length; i++) {
		const yakor = yakors[i];

		if (yakor.dataset.scroll && document.querySelector(yakor.dataset.scroll)) {
			yakor.addEventListener("click", function (e) {
				// _interplayClasses(yakors, yakor,'_active')
				const dataSaersh = document.querySelector(yakor.dataset.scroll);
				const offsetPosition = dataSaersh.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;

				if (iconMenu.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				}

				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth'
				})
				e.preventDefault();
			});

			window.addEventListener('scroll', function () {
				const elementId = yakor.dataset.scroll;
				const idPosition = document.querySelector(elementId).offsetTop;
				const idHeight = document.querySelector(elementId).offsetHeight;

				const scroll = document.documentElement.scrollTop;
				(scroll > idPosition - topOffset * 1.1 && scroll < (idPosition + idHeight - topOffset * 1.1)) ? addClass(i) : removeClass(i);

				function addClass(k) {
					yakor.classList.remove('_active');
					yakors[k].classList.add('_active');
				}
				function removeClass(k) {
					yakors[k].classList.remove('_active');
				}
			});
		}

	}
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
//=================
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
//=================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}
let unlock = true;
//=================
$(function () {
	$('.marquee').marquee({
		duration: 35000,
		startVisible: true,
		duplicated: true
	});
});
//=================
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
let btnArrows = document.querySelectorAll('.arrow');
for (let i = 0; i < btnArrows.length; i++) {
	let btnArrow = btnArrows[i];
	btnArrow.addEventListener('click', function (e) {
		e.preventDefault();

		const href = this.getAttribute('href').substring(1);
		const scrollTarget = document.getElementById(href);

		const topOffset = document.querySelector('.header').offsetHeight;

		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
	let forms = document.querySelectorAll('form');
	if (forms.length > 0) {
		for (let i = 0; i < forms.length; i++) {
			const el = forms[i];
			el.addEventListener('submit', formSend);
		}
	}
	async function formSend(e) {
		// e.preventDefault();
		let btn = e.target;
		let form = btn.closest('form');
		let message = form.getAttribute('data-message');
		let error = formValidate(form);

		let formData = new FormData(form);

		if (error == 0) {
			formClean(form);
			if (message) {
				e.preventDefault();
			}
			e.preventDefault();
		} else {
			let formError = form.querySelectorAll('._error');
			if (formError && form.classList.contains('_goto-error')) {
				_goto(formError[0], 1000, 50);
			}
			e.preventDefault();
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		if (formReq.length > 0) {
			for (let i = 0; i < formReq.length; i++) {
				const el = formReq[i];
				error += formValidateInput(el);
			}
		}

		return error;
	}
	function formValidateInput(input) {
		let error = 0;
		let input_g_value = input.getAttribute('data-value');
		console.log(input.getAttribute("type"));

		if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
			if (input.value != input_g_value) {
				let em = input.value.replace(" ", "");

				input.value = em;
			}
			if (emailTest(input) || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		} else {
			if (input.value == '' || input.value == input_g_value) {
				formAddError(input);
				error++;
			} else {
				formRemoveError(input);
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');

		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
		let inputErrorText = input.getAttribute('data-error');
		if (inputErrorText && inputErrorText != '') {
			input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + inputErrorText + '</div>');
		}
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');

		let inputError = input.parentElement.querySelector('.form__error');
		if (inputError) {
			input.parentElement.removeChild(inputError);
		}
	}
	function formClean(form) {
		let inputs = form.querySelectorAll('input,textarea');

		for (let index = 0; index < inputs.length; index++) {
			const el = inputs[index];
			el.parentElement.classList.remove('_focus');
			el.classList.remove('_focus');
			el.value = el.getAttribute('data-value');
		}
		let checkboxes = form.querySelectorAll('.checkbox__input');
		if (checkboxes.length > 0) {
			for (let index = 0; index < checkboxes.length; index++) {
				const checkbox = checkboxes[index];
				checkbox.checked = false;
			}
		}
		let selects = form.querySelectorAll('select');
		if (selects.length > 0) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_default_value = select.getAttribute('data-default');
				select.value = select_default_value;
				select_item(select);
			}
		}
	}

	// let viewPass = document.querySelectorAll('.form__viewpass');
	// for (let index = 0; index < viewPass.length; index++) {
	// 	const element = viewPass[index];
	// 	element.addEventListener("click", function (e) {
	// 		if (element.classList.contains('_active')) {
	// 			element.parentElement.querySelector('input').setAttribute("type", "password");
	// 		} else {
	// 			element.parentElement.querySelector('input').setAttribute("type", "text");
	// 		}
	// 		element.classList.toggle('_active');
	// 	});
	// }

	//Placeholers
	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
	inputs_init(inputs);

	function inputs_init(inputs) {
		if (inputs.length > 0) {
			for (let i = 0; i < inputs.length; i++) {
				const input = inputs[i];
				const input_g_value = input.getAttribute('data-value');
				input_placeholder_add(input);
				if (input.value != '' && input.value != input_g_value) {
					input_focus_add(input);
				}
				input.addEventListener('focus', function (e) {
					if (input.value == input_g_value) {
						input_focus_add(input);
						input.value = '';
					}
					formRemoveError(input);
				});
				input.addEventListener('blur', function (e) {
					if (input.value == '') {
						input.value = input_g_value;
						input_focus_remove(input);
						if (input.classList.contains('_mask')) {
							input_clear_mask(input, input_g_value);
						}
					}
				});
			}
		}
	}
	function input_placeholder_add(input) {
		const input_g_value = input.getAttribute('data-value');
		if (input.value == '' && input_g_value != '') {
			input.value = input_g_value;
		}
	}
	function input_focus_add(input) {
		input.classList.add('_focus');
		input.parentElement.classList.add('_focus');
	}
	function input_focus_remove(input) {
		input.classList.remove('_focus');
		input.parentElement.classList.remove('_focus');
	}
	function input_clear_mask(input, input_g_value) {
		input.inputmask.remove();
		input.value = input_g_value;
		input_focus_remove(input);
	}
});

let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
let slider_main = new Swiper('.main-screen__container', {
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about = new Swiper('.about__slider', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
});
let slider_mini = new Swiper('.slider-mini', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 0,
	speed: 800,
	direction: 'vertical',

	breakpoints: {
		320: {
			direction: 'horizontal',
		},
		768: {
			direction: 'vertical',

		},
		992: {
			direction: 'vertical',

		},
		1268: {
			direction: 'vertical',

		},
	},

});
let slider_big = new Swiper('.slider-big', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
});
if (document.querySelector('.slider-product')) {
	slider_mini.controller.control = slider_big;
	slider_big.controller.control = slider_mini;
}
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());
