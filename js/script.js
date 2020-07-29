window.onload = function() {
	
	function $(query) {
		let q = document.querySelector(query);
		return q;
	}
	
	//todoLoad();
	
	//alert("XSS");
	
	let txt1 = '';
	
	let liID = 1;
	let ul = $("ul.todo");
	function addLi(content) {
		let li = document.createElement("li");
		li.id = "li" + liID;
		let check = document.createElement("input");
		check.type = "checkbox";
		check.id = "check" + liID;
		li.appendChild(check);
		let txt = document.createElement("span");
		txt.textContent = content;
		li.appendChild(txt);
		let x = document.createElement("button");
		x.id = "xLi";
		li.appendChild(x);
		ul.appendChild(li);
		let liClone = document.createElement("li");
		liClone.id = "liClone";
		ul.appendChild(liClone);
		liID++;
		//todoLoad();
	}
	
	let button = $("button");
	let input = $('input[type=text]');
	input.focus();
	button.addEventListener("click", function(e){
		e.preventDefault();
		if (input.value != ''){
			ul.removeChild(ul.lastChild);
			let value = input.value;
			addLi(value);
			$('input[type=text]').value = '';
			input.focus();
			todoLoad();
			removeList();
		}
	});
	
	function todoLoad() {
		let danhsach = document.querySelectorAll('li');
		for (let i = 0; i < danhsach.length-1; i++) {
			danhsach[i].addEventListener('change', function(){
				let thisCheck = this.querySelector('input[type=checkbox]');
				let val = this.textContent;
				if (thisCheck.checked){
					if (txt1 != '' && txt1 != null){
						if (txt1.indexOf(this.id) == -1){
							txt1 += '' + this.id;
						}
					} else if (txt1 == '' || txt1 == null){
						txt1 += '' + this.id;
					}
					this.querySelector('span').innerHTML = '<del>' + val + '</del>';
					thisCheck.checked = true;
				} else {
					if (txt1.indexOf(this.id) != -1){
						let sav = '' + this.id;
						txt1 = txt1.replace(sav, "");
					}
					this.querySelector('span').innerHTML = val;
				}
			});
			
		}
	}
	
	function removeList(){
		let btnClick = document.querySelectorAll("button");
		var i;
		for (i = 1; i < btnClick.length; i++) {
			btnClick[i].addEventListener("click", function() {
				this.parentElement.style.display = 'none';
			});
		}
	}
	
}