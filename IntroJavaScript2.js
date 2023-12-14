
//MEMBERS://
//TOGANA, KHARON KADE//
//OKKO, ZOREN//
//ORARO, ERNIE//

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.querySelector('input[type="text"]');
    const birthYearInput = document.querySelector('input[type="number"]');
    const submitButton = document.getElementById('btnSubmit');
    const zodiacImg = document.getElementById('zodiac-img');
    const czTitle = document.getElementById('cz-title');
    const zodiacDescription = document.getElementById('zodiac-description');
	const imgElement = document.getElementById('zodiac-img');

    const zodiacSigns = [
		{ sign: 'Dragon', description: 'Energetic, fearless, warm-hearted, and charismatic.' },
		{ sign: 'Snake', description: 'Charming, gregarious, introverted, generous, and smart.' },
		{ sign: 'Horse', description: 'Energetic, independent, impatient, and enjoy traveling.' },
		{ sign: 'Sheep', description: 'Mild-mannered, shy, kind, and peace-loving.' },
		{ sign: 'Monkey', description: 'Fun, energetic, and active.' },
		{ sign: 'Rooster', description: ' Independent, practical, hard-working, and observant.' },
		{ sign: 'Dog', description: 'Patient, diligent, generous, faithful, and kind.' },
		{ sign: 'Pig', description: 'Loving, tolerant, honest, and appreciative of luxury.' },
		{ sign: 'Rat', description: 'Quick-witted, resourceful, and versatile.' },
		{ sign: 'Ox', description: 'Patient, kind, stubborn, and conservative.' },
		{ sign: 'Tiger', description: 'Authoritative, emotional, courageous, and intense.' },
		{ sign: 'Rabbit', description: 'Popular, compassionate, and sincere.' }
    ];
	
	imgElement.width = 450; 
	imgElement.height = 500;
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const birthYear = parseInt(birthYearInput.value);

        if (!name || isNaN(birthYear) || birthYear < 1940 || birthYear > 2023) {
            alert('Please enter a valid name and birth year between 1940 and 2023.');
            return;
        }

        const zodiacIndex = (birthYear - 1940) % 12;
        const zodiac = zodiacSigns[zodiacIndex];

        let zodiacImgSrc = '';
		let czTitleText = '';
		let zodiacDescriptionText = '';
		
        if (zodiac.sign === 'Dragon') {
			zodiacImgSrc = 'dragon.jpg';
		} else if (zodiac.sign === 'Snake') {
		  zodiacImgSrc = 'snake.jpg';
		} else if (zodiac.sign === 'Horse') {
		  zodiacImgSrc = 'horse.jpg';
		} else if (zodiac.sign === 'Sheep') {
		  zodiacImgSrc = 'sheep.jpg';
		} else if (zodiac.sign === 'Monkey') {
		  zodiacImgSrc = 'monkey.jpg';
		} else if (zodiac.sign === 'Rooster') {
		  zodiacImgSrc = 'rooster.jpg';
		} else if (zodiac.sign === 'Dog') {
		  zodiacImgSrc = 'dog.jpg';
		} else if (zodiac.sign === 'Pig') {
		  zodiacImgSrc = 'pig.jpg';
		} else if (zodiac.sign === 'Rat') {
		  zodiacImgSrc = 'rat.jpg';
		} else if (zodiac.sign === 'Ox') {
		  zodiacImgSrc = 'ox.jpg';
		} else if (zodiac.sign === 'Tiger') {
		  zodiacImgSrc = 'tiger.jpg';
		} else if (zodiac.sign === 'Rabbit') {
		  zodiacImgSrc = 'rabbit.jpg';
		} 
		
		zodiacImg.src = zodiacImgSrc;
        czTitle.textContent = `${name}'s Chinese Zodiac Sign: ${zodiac.sign}`;
        zodiacDescription.textContent = zodiac.description;
		

    });
});
