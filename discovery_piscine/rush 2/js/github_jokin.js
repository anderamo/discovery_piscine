$.ajax({
	url: "https://api.github.com/users/alfombruh/repos",
	method: "GET"
}).then(results => {
	console.log(results)
	let index = "<li class='active' data-target='#cc-Indicators' data-slide-to='0'></li>"
			$("#add_li").append(index);
	let article = "<div class='carousel-item active'><div class='row'><div style='width:100%;display:flex;justify-content:space-around;align-items:center;'><div><p style='font-size:150%'>"+ results[0].name +"</p></div><div><button ><a href=" + results[0].html_url + " target=_blank>Github repo</a></button></div></div></div>"
			$("#add_carousel").append(article);
	for (let i = 1; i < results.length; i++){
			let index = "<li data-target='#cc-Indicators' data-slide-to="+i+"></li>"
			$("#add_li").append(index);
			let article = "<div class='carousel-item'><div class='row'><div style='width:100%;display:flex;justify-content:space-around;align-items:center;'><div><p style='font-size:150%'>"+ results[i].name +"</p></div><div><button><a href=" + results[i].html_url + " target=_blank>Github repo</a></button></div></div></div>"
			$("#add_carousel").append(article);
	}
})