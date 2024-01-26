//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit",(e)=>{

	e.preventDefault();
	let fontsize = document.getElementById("fontsize").value;
	let fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontsize};`
	document.cookie = `fontcolor=${fontcolor};`
	
document.documentElement.style.setProperty("--fontsize", `${fontsize??16}px`);
document.documentElement.style.setProperty("--fontcolor", `${fontcolor??"#000"}`);
})

let cookies = Object.fromEntries(
	document.cookie.split("; ").
	map((item)=>item.split("=")));

document.getElementById("fontsize").value = cookies.fontsize??16;
document.getElementById("fontcolor").value = cookies.fontcolor??"#000000";

document.documentElement.style.setProperty("--fontsize", `${cookies.fontsize??16}px`);
document.documentElement.style.setProperty("--fontcolor", `${cookies.fontcolor??"#000"}`);
//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit",(e)=>{

	e.preventDefault();
	let fontsize = document.getElementById("fontsize").value;
	let fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontsize};`
	document.cookie = `fontcolor=${fontcolor};`
	
document.documentElement.style.setProperty("--fontsize", `${fontsize??16}px`);
document.documentElement.style.setProperty("--fontcolor", `${fontcolor??"#000"}`);
})

let cookies = Object.fromEntries(
	document.cookie.split("; ").
	map((item)=>item.split("=")));

document.getElementById("fontsize").value = cookies.fontsize??16;
document.getElementById("fontcolor").value = cookies.fontcolor??"#000000";

document.documentElement.style.setProperty("--fontsize", `${cookies.fontsize??16}px`);
document.documentElement.style.setProperty("--fontcolor", `${cookies.fontcolor??"#000"}`);
//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit",(e)=>{

	e.preventDefault();
	let fontsize = document.getElementById("fontsize").value;
	let fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontsize};`
	document.cookie = `fontcolor=${fontcolor};`
	
document.documentElement.style.setProperty("--fontsize", `${fontsize??16}px`);
document.documentElement.style.setProperty("--fontcolor", `${fontcolor??"#000"}`);
})

let cookies = Object.fromEntries(
	document.cookie.split("; ").
	map((item)=>item.split("=")));

document.getElementById("fontsize").value = cookies.fontsize??16;
document.getElementById("fontcolor").value = cookies.fontcolor??"#000000";

document.documentElement.style.setProperty("--fontsize", `${cookies.fontsize??16}px`);
document.documentElement.style.setProperty("--fontcolor", `${cookies.fontcolor??"#000"}`);