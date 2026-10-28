//information

let field_colm = ["시가", "야전", "실내"]

let inform_fields = document.getElementById('information')
inform_fields.innerHTML = `
<div id="inform-types">
	<h2>공격/방어 타입</h2>
	<img src="./assets/상성표.webp">
	<div class="table">
	<div class="weak">특효(Weak)</div><div>x200%</div>
	<div class="effective">유리(Effective)</div><div>x150%</div>
	<div class="normal">일반(Normal)</div><div>x100%</div>
	<div class="resist">반감(Resist)</div><div>x50%</div>
	</div>
</div>
<div id="inform-fields">
	<h2>학생 적성</h2>
	<div class="left">
		<div>시가</div>
		<div>야전</div>
		<div>실내</div>
		<div><div><img src=""></div></div>
		<div><div><img src=""></div></div>
		<div><div><img src=""></div></div>
	</div>
	<div class="right">
		<div>아이콘</div>
		<div>명칭</div>
		<div>공격력 보정</div>
		<div>엄폐 무시/블럭 확률</div>

		<div><img src=""></div>
		<div>SS</div>
		<div>x1.3</div>
		<div>75%</div>
		<div><img src=""></div>
		<div>S</div>
		<div>x1.2</div>
		<div>60%</div>
		<div><img src=""></div>
		<div>A</div>
		<div>x1.1</div>
		<div>45%</div>
		<div><img src=""></div>
		<div>B</div>
		<div>x1</div>
		<div>30%</div>
		<div><img src=""></div>
		<div>C</div>
		<div>x0.9</div>
		<div>15%</div>
		<div><img src=""></div>
		<div>D</div>
		<div>x0.8</div>
		<div>0%</div>
	</div>
</div>
`



let fields_icons = document.getElementById('inform-fields').querySelectorAll('.left img')
for(var i=0; i<field_colm.length; i++){
	fields_icons[i].src =  "./assets/" + field_colm[i] + ".webp"
}
let fieldPref_temp = ["SS", "S", "A", "B", "C", "D"]
let fields_prefIcons = document.getElementById('inform-fields').querySelectorAll('.right img')
for(var i=0; i<fieldPref_temp.length; i++){
	fields_prefIcons[i].src = "./assets/field-" + fieldPref_temp[i] + ".webp"
}


let inform_button = document.getElementById("inform-button")
inform_button.onclick = informer;
let information = document.getElementById('information')
information.style.display = 'none'
function informer(){
	if(information.style.display === 'none'){
		information.style.display = 'flex'
	}else if(information.style.display === "flex"){
		information.style.display = 'none'
	}
}

let filter_button = document.getElementById("filter-button")
filter_button.onclick = filter_view;
let inform_filter = document.getElementById("inform-filter")
inform_filter.style.display = 'none'
function filter_view(){
	if(inform_filter.style.display === 'none'){
		inform_filter.style.display = 'flex'
	}else if(inform_filter.style.display === "flex"){
		inform_filter.style.display = 'none'
	}
}
