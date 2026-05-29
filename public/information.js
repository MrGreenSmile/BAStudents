//information

field_colm = ["시가", "야전", "실내"]
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
	console.log("clicked")
	if(information.style.display === 'none'){
		information.style.display = 'flex'
	}else if(information.style.display === "flex"){
		information.style.display = 'none'
	}
}
