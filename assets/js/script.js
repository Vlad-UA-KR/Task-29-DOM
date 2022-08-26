// // ------------------Task-1--------------------------

// let playList = [

// 	{
// 		author: "LED ZEPPELIN",
// 		song: "STAIRWAY TO HEAVEN"
// 	},

// 	{
// 		author: "QUEEN",
// 		song: "BOHEMIAN RHAPSODY"
// 	},

// 	{
// 		author: "LYNYRD SKYNYRD",
// 		song: "FREE BIRD"
// 	},

// 	{
// 		author: "DEEP PURPLE",
// 		song: "SMOKE ON THE WATER"
// 	},

// 	{
// 		author: "JIMI HENDRIX",
// 		song: "ALL ALONG THE WATCHTOWER"
// 	},

// 	{
// 		author: "AC/DC",
// 		song: "BACK IN BLACK"
// 	},

// 	{
// 		author: "QUEEN",
// 		song: "WE WILL ROCK YOU"
// 	},

// 	{
// 		author: "METALLICA",
// 		song: "ENTER SANDMAN"
// 	}

// ];

// let ol = document.createElement('ol');
// document.body.prepend(ol);

// for (let item of playList) {
// 	ol.insertAdjacentHTML('beforeend', `<li>${item.author} -  ${item.song}</li>`);
// }


// // ------------------Task-2--------------------------

// let openBtn = document.querySelector('.open');
// let modalWindow = document.querySelector('.modal');
// let closeBtn = document.querySelector('.close');

// modalWindow.hidden = true;

// openBtn.addEventListener('click', () => modalWindow.hidden = false);
// closeBtn.addEventListener('click', () => modalWindow.hidden = true);



// // ------------------Task-3--------------------------

// let i = 0;

// function active() {

// 	i = i + 1;

// 	let colorRed = document.querySelector('.wrapper__color1');
// 	let colorOrange = document.querySelector('.wrapper__color2');
// 	let colorGreen = document.querySelector('.wrapper__color3');

// 	if (i == 1) {
// 		colorRed.classList.add('active');
// 		colorOrange.classList.remove('active');
// 		colorGreen.classList.remove('active');
// 	}

// 	else if (i == 2) {
// 		colorOrange.classList.add('active');
// 		colorRed.classList.remove('active');
// 		colorGreen.classList.remove('active');
// 	}

// 	else if (i == 3) {
// 		colorGreen.classList.add('active');
// 		colorRed.classList.remove('active');
// 		colorOrange.classList.remove('active');
// 		i = 0;
// 	}

// }

// btn.addEventListener('click', active);

