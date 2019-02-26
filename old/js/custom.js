$.getJSON('myInfo.json', function(data){
	var data = data["personal-info"]["my-info"];
	var html = '';
	for(var i = 0; i < data.length; i++){
		html += "<div class='jsonValue'>";
		html += "<p class='name'> User Name :" + data[i]["my-name"] + "</p>";
		html += "</div>";
		$(".data-display").html(html);
	}
})