// varibles
const url        = "data.json";
const typeAction = "GET";
const wrapperEle = document.getElementById('items');

// ajax 
var request = new XMLHttpRequest();

request.open(typeAction, url ); // use asynchronous

request.onreadystatechange = function() {
	if(request.readyState === 4 && request.status === 200) {
		var output = "";
		var jsonParser = JSON.parse(request.responseText);
		for (var i = 0; i < jsonParser.length; i++) {
			output += 
			`<div class="col-sm-4 mb-3">
				<div class="card">
				  <img class="card-img-top">
				  <div class="card-body">
				    <h5 class="card-title">` + jsonParser[i].title + `</h5>
				    <p class="card-text">` + jsonParser[i].description +  ` </p>
				  </div>
				  <div class='card-footer'>
				   <dl class="row">
					  <dt class="col-sm-5">Author</dt>
					  <dd class="col-sm-7">` + jsonParser[i].author + `</dd>

					  <dt class="col-sm-5">Price</dt>
					  <dd class="col-sm-7"><span class='badge badge-info badge-pill'>$` + jsonParser[i].price + `</span></dd>

					  <dt class="col-sm-5">Genre</dt>
					  <dd class="col-sm-7"><mark>` + jsonParser[i].genre + `</mark></dd>

					  <dt class="col-sm-5">Publish Date</dt>
					  <dd class="col-sm-7"><small>` + jsonParser[i].publish_date + `</small></dd>
					</dl>
				</div>		
				 
				</div>
			</div>`;
		}
		console.log(output);
		wrapperEle.innerHTML = output;
		
	}
}

request.send();