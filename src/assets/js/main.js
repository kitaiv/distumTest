let allMobFilterBtn = document.querySelectorAll('.filter.mob .filter__header');

allMobFilterBtn.forEach(item => {
    item.addEventListener('click', function (e) {
        if (item.parentElement.classList.contains('open')) {
            item.parentElement.classList.remove('open');
        } else {
            item.parentElement.classList.add('open');
        }
    });
});

// Tabs

let tab = function () {

	let tabNav = document.querySelectorAll('.tabs-nav__item'),
			tabContent = document.querySelectorAll('.tab'),
			tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav);
	});

	function selectTabNav () {

		tabNav.forEach(item => {
			item.classList.remove('is-active');
		});

		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);

	};

	function selectTabContent (tabName) {
		tabContent.forEach(item => {
			
			if (item.classList.contains(tabName)) {
				item.classList.add('is-active');
			} else {
				item.classList.remove('is-active')
			}

		});
	};

};

tab();

// add Task checked

const taskChecked = document.querySelectorAll('.task-selection');

taskChecked.forEach(el => {
	el.addEventListener('click', () => {
	el.classList.toggle('task-checked');
});
})



// Select

// const selectWrapper = document.querySelectorAll('.select-wrapper');
// const selectValue = document.querySelector('#select-value');
// const selectContainer = document.querySelector('.select');

// selectWrapper.forEach(item => {

// 	item.addEventListener('click', (e) => {
// 		if(e.target === item){
// 			item.classList.add('select-wrapper_active');
// 			item.querySelector('.select').style.display = 'block';
// 		}
// 		else if(e.target.classList.contains('select__item')){
// 			e.stopPropagation();
// 			item.querySelector('#select-value').textContent = e.target.textContent;
// 			item.classList.remove('select-wrapper_active');
// 			item.querySelector('.select').style.display = 'none';
// 		}
// 	});

// 	item.addEventListener('click', (e) => {
// 		let target = e.target;

// 		if (target === item) {
// 			item.classList.add('select-wrapper_active');
// 		} else {
// 			item.classList.remove('select-wrapper_active');
// 		}
// 	})

// });


// Edit items at classDetail

let items = Array.from(document.querySelectorAll(".student-item"));
let itemsEdit = document.querySelectorAll(".student-item__edit");

function editItem(elem) {
	elem = elem.closest('.student-item')
	elem.classList.toggle("student-item_active");

	elem.addEventListener("click", (e) => {

		if(e.target.classList.contains('select-wrapper')){
			e.target.classList.add('select-wrapper_active');
			elem.querySelector('.select').style.display = 'block';
		  }
		if(e.target.classList.contains('select__item')){
			e.stopPropagation();
			elem.querySelector('#select-value').textContent = e.target.textContent;
			elem.querySelector('.select-wrapper').classList.remove('select-wrapper_active');
			elem.querySelector('.select').style.display = 'none';
		}

		e.stopImmediatePropagation();
		if (e.target == elem.querySelector('.edit-cancel')) {
			elem.classList.remove("student-item_active");
			elem.getElementsByTagName("input")[0].value = elem.getElementsByTagName("a")[0].textContent;
		} else if (e.target == elem.querySelector('.edit-ok')) {
			elem.getElementsByTagName("a")[0].textContent = elem.getElementsByTagName("input")[0].value;
			elem.getElementsByTagName("p")[0].textContent = elem.querySelector("#select-value").textContent;
			elem.classList.remove("student-item_active");
		}
	});
};

// Add item to list at classDetail

function addItem() {
	let newItem = document.createElement('div');
	newItem.classList.add('student-item');
	newItem.innerHTML = `
			<div class="student-item__name">
				<a href="#"></a>
				<span class="active-hidden">
					<input value="" type="text" placeholder="Введите имя">
				</span>
			</div>
			<div class="student-item__gender">
				<p>Мужской</p>
				<span class="active-hidden">
					<div class="select-wrapper">
						<span id="select-value"">Мужской</span>
						<ul class="select">
							<li class="select__item">Мужской</li>
							<li class="select__item">Женский</li>
						</ul>
					</div>
				</span>
			</div>
			<div class="student-item__edit">
				<img src="/images/svg/edit.svg" alt="edit"/>
				<p onclick="editItem(this)">Изменить данные участника</p>
				<span class="active-hidden">
					<span class="edit-cancel">Отмена</span>
					<span class="edit-ok">Сохранить</span>
				</span>
			</div>
	`;
	items.map(item => item.classList.remove('student-item_active'));
	document.querySelector('.student-container').appendChild(newItem);
	
	items = [...items, newItem];
	editItem(newItem);
};

