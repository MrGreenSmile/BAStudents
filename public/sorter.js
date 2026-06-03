let sort_index = true
let filter4fes = false
let filter4school = false
let current_school_idx = ''


function applyFilters(idx = ''){
    let filtered = students;

    if(filter4fes){
        filtered = filtered.filter(el => el.fes === true);
    }
    if(filter4school){
        filtered = filtered.filter(el => el.school.split(' ')[0] === current_school_idx);
    }

    tag_ids = [];
    skill_ids = [];
    sig_ids = [];
    unique_ids = [];

    cells.innerHTML = '';
    main(filtered);
    eventer();
}
function filter_fes(idx){
    const buttons = document.querySelectorAll('.sorter-button.fes');
    buttons.forEach(btn => btn.classList.remove('active'));


    filter4fes = !filter4fes;

    if(filter4fes){
        if(window.event && window.event.currentTarget){
            window.event.currentTarget.classList.add('active');
        }
    }
    applyFilters();
}
function filter_school(idx){
    const buttons = document.querySelectorAll('.sorter-button.school');
    buttons.forEach(btn => btn.classList.remove('active'));


    if(current_school_idx === idx){
        filter4school = false;
        current_school_idx = "";
    }
    else{
        filter4school = true;
        current_school_idx = idx;

        if(window.event && window.event.currentTarget){
            window.event.currentTarget.classList.add('active');
        }
    }
    applyFilters();
}




function sorter(){
	function sort1(n){
		filtered.sort(function (a, b){
			var a_name = a.name.split(' ')[1]
			var b_name = b.name.split(' ')[1]

			if(a_name < b_name){return -n}
			if(a_name > b_name){return n}
			else{return 0}
			}
		)
	}

	if(sort_index){
		sort1(1)
		sort_index = false
	}else{
		sort1(-1)
		sort_index = true
	}

	cells.innerHTML = ''
	main(filtered)
	eventer()
}