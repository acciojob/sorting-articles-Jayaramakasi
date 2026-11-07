//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(article){	
	if(article.startsWith("The ")){
	  article=article.slice(4)
	}
	else if(article.startsWith("An ")){
		article=article.slice(3)
	}
	else if(article.startsWith("A ")){
		article=article.slice(2)
	}
	return article
}
let bandss=document.getElementById("band")

const sortedBands=bands.sort((a,b)=>{
	return removeArticles(a).localeCompare(removeArticles(b))
})

sortedBands.forEach(band=>{
	const li=document.createElement("li")
	li.textContent=band
	bandss.appendChild(li)
	
})



