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
})
