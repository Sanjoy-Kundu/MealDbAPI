const searchFood = () => {
	const inputField = document.getElementById("input-field");
	const inputValue = inputField.value;
	//reset input value
	inputField.value = " ";
	//console.log(inputValue);
	if (inputValue == " ") {
		alert("please write some food name");
	} else {

		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
		fetch(url)
			.then(res => res.json())
			.then(data => displaySearchResult(data.meals))
	}

}

const displaySearchResult = melas => {
	//console.log(melas);
	const displayResult = document.getElementById("display-result");
	displayResult.textContent = " ";
	if (melas.length == 0) {
		alert("Food Cant find")
	}

	melas.forEach(mela => {
		console.log(mela);
		const div = document.createElement("div");
		div.classList.add("col");
		div.innerHTML = `
		<div class="card h-100">
		<img src=${mela.strMealThumb} class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">Name: ${mela.strMeal}</h5>
			<p class="card-text">Des: ${mela.strInstructions.slice(0, 100)}</p>
			<button type="button" class="btn btn-info" onClick='loadMealDetail(${mela.idMeal})'>Details</button>
		</div>
	</div>
		`
		displayResult.appendChild(div);
	})
}

const loadMealDetail = singleMeal => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singleMeal}`;
	fetch(url)
		.then(res => res.json())
		.then(data => displaySingleInfo(data.meals[0]))
}

const displaySingleInfo = singleMealDisplay => {
	console.log(singleMealDisplay);
	const singleCard = document.getElementById("single-display-card");
	singleCard.textContent = " ";
	const createDiv = document.createElement("div");
	createDiv.innerHTML = `
	<img src=${singleMealDisplay.strMealThumb} class="card-img-top" alt="...">
	<div class="card-body single-body">
		<h2 class="card-title">Name:${singleMealDisplay.strMeal}</h2>
		<h5 class="card-title">Category:${singleMealDisplay.strCategory}</h5>
		<h5 class="card-title">Country:${singleMealDisplay.strArea}</h5>
		<h5 class="card-title">Tags:${singleMealDisplay?.strTags}</h5>
		<p class="card-text">Element-one: ${singleMealDisplay.strIngredient1}</p>
		<p class="card-text">Element-tow: ${singleMealDisplay.strIngredient2}</p>
		<p class="card-text">Element-three: ${singleMealDisplay.strIngredient3}</p>
		<p class="card-text">Element-four: ${singleMealDisplay.strIngredient4}</p>
		<p class="card-text">Element-five: ${singleMealDisplay.strIngredient5}</p>
		<p class="card-text">Element-six: ${singleMealDisplay.strIngredient6}</p>
		
		<a href="${singleMealDisplay.strYoutube}" class="btn btn-primary" target= "blank">YouTube</a>
	</div>
	`

	singleCard.appendChild(createDiv);
}



//===============latest meal===============
var photos = [
	{
		id: 1,
		name: "Chivito uruguayo",
		img: "/images/latest-img/latest-img1.jpg"
	},
	{
		id: 2,
		name: "Walnut Roll Gužvara",
		img: "/images/latest-img/latest-img2.jpg"
	},
	{
		id: 3,
		name: "Fresh sardines",
		img: "/images/latest-img/latest-img3.jpg"
	},
	{
		id: 4,
		name: "Burek",
		img: "/images/latest-img/latest-img4.jpg"
	},
	{
		id: 5,
		name: "Mushroom soup with buckwheat",
		img: "/images/latest-img/latest-img5.jpg"
	},
	{
		id: 6,
		name: "Croatian Bean Stew",
		img: "/images/latest-img/latest-img6.jpg"
	},
	{
		id: 7,
		name: "Traditional Croatian Goulash",
		img: "/images/latest-img/latest-img7.jpg"
	},
	{
		id: 8,
		name: "Traditional Croatian Goulash",
		img: "/images/latest-img/latest-img8.jpg"
	},

]

photos.forEach(photo => {
	const latestMeal = document.getElementById("latest-meal");
	const latestCreateDiv = document.createElement("div");

	latestCreateDiv.innerHTML = `
	<div class="child-div ">
		<img src=${photo.img} class="card-img-top" alt="...">
			<h5 class="card-title">${photo.name}</h5>
	</div>
	`
	latestMeal.appendChild(latestCreateDiv);
})



//============ popular-ingredients=================

const popularPhotos = [
	{
		id: 1,
		name: "Chicken",
		img: "/images/popular-ingreation/popular-1.png"
	},
	{
		id: 2,
		name: "Salmon",
		img: "/images/popular-ingreation/popular-2.png"
	},
	{
		id: 3,
		name: "Beef",
		img: "/images/popular-ingreation/popular-3.png"
	},
	{
		id: 4,
		name: "Pork",
		img: "/images/popular-ingreation/popular-4.png"
	}
]

popularPhotos.forEach(popular => {
	const popularDiv = document.getElementById("popular-ingredients");
	const popularCreateDiv = document.createElement("div");
	popularCreateDiv.innerHTML = `
	<div class="child-div">
	<img src=${popular.img} class="card-img-top" alt="...">
		<h5 class="card-title">${popular.name}</h5>
</div>

	`
	popularDiv.appendChild(popularCreateDiv);
})


//======= RANDOM MEALS============
const randomImages = [
	{
		id: 1,
		name: "Mince Pies",
		img: "/images/Random-meals-img/random-meal-1.jpg"
	},
	{
		id: 2,
		name: "Sledz w Oleju (Polish Herrings)",
		img: "/images/Random-meals-img/random-meal-2.jpg"
	},
	{
		id: 3,
		name: "Ribollita",
		img: "/images/Random-meals-img/random-meal-3.jpg"
	},
	{
		id: 4,
		name: "Prawn & Fennel Bisque",
		img: "/images/Random-meals-img/random-meal-4.jpg"
	},
	{
		id: 5,
		name: "Lamb Tzatziki Burgers",
		img: "/images/Random-meals-img/random-meal-5.jpg"
	},
	{
		id: 6,
		name: "Spaghetti Bolognese",
		img: "/images/Random-meals-img/random-meal-6.jpg"
	},
	{
		id: 7,
		name: "Ratatouille",
		img: "/images/Random-meals-img/random-meal-7.jpg"
	},
	{
		id: 8,
		name: "Portuguese prego with green piri-piri",
		img: "/images/Random-meals-img/random-meal-8.jpg"
	},
];

randomImages.forEach(randomImg => {
	const randomInmgDiv = document.getElementById("random-meals");
	const createRandomDiv = document.createElement("div");
	createRandomDiv.innerHTML = `
	<div class="child-div-random">
	<img src=${randomImg.img} class="card-img-top" alt="...">
		<h5 class="card-title">${randomImg.name}</h5>
</div>
	`;
	randomInmgDiv.appendChild(createRandomDiv);
})



//==============random integrants==========
const randomitePhotos = [
	{
		id: 1,
		name: "Pecan Nuts",
		img: "/images/random-itgrants/random-itgrant-1.png"
	},
	{
		id: 2,
		name: "Lamb Mince",
		img: "/images/random-itgrants/random-itgrant-2.png"
	},
	{
		id: 3,
		name: "Herring",
		img: "/images/random-itgrants/random-itgrant-3.png"
	},
	{
		id: 4,
		name: "Figs",
		img: "/images/random-itgrants/random-itgrant-4.png"
	}
]

randomitePhotos.forEach(randomIte => {
	const randomIteDiv = document.getElementById("random-itegrant");
	const newRandomiteDiv = document.createElement("div");
	newRandomiteDiv.classList.add("col");
	newRandomiteDiv.innerHTML = `
	<div class="child-div ">
	<img src=${randomIte.img} class="card-img-top" alt="...">
		<h5 class="card-title">${randomIte.name}</h5>
</div>
	`
	randomIteDiv.appendChild(newRandomiteDiv);
});