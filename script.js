 

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('purple')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

// Auto text

const textEl = document.getElementById("my-info")

let idx = 1

const text = document.querySelector("#my-info").innerText

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)
    idx++

    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText,100)
}