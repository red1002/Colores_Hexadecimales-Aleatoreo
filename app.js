const color = document.getElementById('color');
const boton = document.getElementById('boton');

function generar(){
	let digitos = '0123456789abcdef';
	let colorHex = '#';

	for (let i = 0; i < 6; i++){
		let indiceRandom = Math.floor(Math.random()*16);

		colorHex += digitos[indiceRandom];
	}

	return colorHex;
}

boton.addEventListener('click', () =>{
	let newColor = generar();

	document.body.style.background = newColor;
	color.innerText = newColor;
	boton.style.background = newColor;
})