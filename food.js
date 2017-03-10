var foodContainer = document.getElementById("food-container");




function makeDom(xhrData, dataType) {
	// console.log(xhrData[dataType][0].name);
	var foodString= "";
	var currentFood;
	for (var i = 0; i < xhrData[dataType].length; i++) {
		currentFood = xhrData[dataType][i];
		foodString += `<div class="col-sm-6 col-md-4">`;
    	foodString += `<div class="thumbnail">`;
    	foodString += `<div class="table-responsive">`;
    	foodString += `<table class="table">`;
    	foodString += `<tr>`;
    	foodString += `<th colspan="2"><h2>${currentFood.name}</h2></th>`;
    	foodString += `</tr>`;
    	if (dataType === "cat_brands") {
    	foodString += `<tr>`;
    	foodString += `<td colspan="2"><h2>${currentFood.breeds}</h2></th>`;
    	foodString += `</tr>`;
    	}
    	foodString += `<tr>`;
    	for (var j = 0; j < currentFood.types.length; j++) {
	    	console.log(currentFood.types[0]);
	    	foodString += `<td colspan="2" class="food-types">${currentFood.types[j].type}</td>`;
	    		// console.log("length of volumes", currentFood.types[j].volumes.length);
	    	for (var k = 0; k < currentFood.types[j].volumes.length; k++) {
	    		// console.log(currentFood.types[j].volumes[k].name)
		    	foodString += `</tr>`;
		    	foodString += `<tr>`;
		    	foodString += `<td>${currentFood.types[j].volumes[k].name}</td>`
		    	foodString += `<td>${currentFood.types[j].volumes[k].price}</td>`;
		    	foodString += `</tr>`;
	    	};
    	};
	  	foodString += `</table>`;
	  	foodString += `</div></div></div>`;
	  }
	
	  	console.log(foodString);
		foodContainer.innerHTML += foodString;
}

function exectueThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	for (key in data) {
	var dataType = key;
	// if (dataType === "dog_brands") {
		makeDom(data, dataType);
		}
	// }

}

function exectueThisCodeAfterFileFails() {


}





var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", exectueThisCodeAfterFileLoaded);
myRequest.addEventListener("error", exectueThisCodeAfterFileFails);
myRequest.open("GET", "dog-food.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", exectueThisCodeAfterFileLoaded);
myRequest2.addEventListener("error", exectueThisCodeAfterFileFails);
myRequest2.open("GET", "cat-food.json");
myRequest2.send();



