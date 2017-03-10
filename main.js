

var dinoContainer = document.getElementById("dinoContainer");


function makeDom(xhrData) {
	var dinosaurString= "";
	var currentDinosaur;

	for (var i = 0; i < xhrData.dinosaurs.length; i++) {
		currentDinosaur = xhrData.dinosaurs[i];


  		dinosaurString += `<div class="col-sm-6 col-md-4">`;
    	dinosaurString += `<div class="thumbnail">`;
	  	dinosaurString += `<img src="${currentDinosaur.url}" alt="${currentDinosaur.type}">;`
	  	dinosaurString += `<div class="caption">`;
	    dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
	    dinosaurString += `<p>${currentDinosaur.type}</p>`;
	    dinosaurString += `<p>${currentDinosaur.food}</p>`;
	  	dinosaurString += `</div></div></div>`;
	}
		dinoContainer.innerHTML = dinosaurString;
	

}

function exectueThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);

	makeDom(data);
}

function exectueThisCodeAfterFileFails() {


}





var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", exectueThisCodeAfterFileLoaded);
myRequest.addEventListener("error", exectueThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send()



