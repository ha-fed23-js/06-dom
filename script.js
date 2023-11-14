console.log('Hello web');

// Plocka ut body-elementets objekt
// Alternativt: använd document.getElementById
const body = document.querySelector('body')
if( !body ) {
	console.log('Hittade inte body!');
}

// Ändra CSS-klass-egenskapen
// body.className = 'havet'
body.classList.add('havet')
// classList har även remove och toggle


// Plocka ut button och ghost elementen
// Lägg till event listener till button
// Ändra synligheten
const ghostButton = document.querySelector('#ghost-button')
const ghostP = document.querySelector('.ghost')
ghostButton.addEventListener('click', () => {
	ghostP.classList.toggle('invisible')
	// let v = getComputedStyle(ghostP).visibility
	// console.log('Ghost visibility: ', v);
})



const countButton = document.querySelector('#count-button')
const clickInfo = document.querySelector('#click-info')

let clicks = 0
countButton.addEventListener('click', () => {
	clicks++
	// textContent, innerHTML, innerText
	clickInfo.innerHTML = `<span>⭐</span> Antal klick: ${clicks}.`
	// textContent ersätter allt innehåll, bryr sig inte om HTML
	// innerText gör samma sak
	// innerHTML respekterar HTML i strängen
})


const onOffButton = document.querySelector('#on-off-button')

let isOn = true
onOffButton.addEventListener('click', () => {
	console.log('on off button');
	if ( isOn ) {
		onOffButton.innerText = 'Off'
		isOn = false
	} else {
		onOffButton.innerText = 'On'
		isOn = true
	}
})


const createSection = document.querySelector('#create-section')
const createButton = document.querySelector('#create-button')

let createCount = 0
createButton.addEventListener('click', () => {
	// skapa element
	// textinnehåll
	// lägg till nya elementet i section
	if( createCount < 2 ) {
		const p = document.createElement('p')
		p.innerText = 'Wow!!'
		createSection.append(p)
		createCount++
	}
})