$( document ).ready(function() {

	
	
	$( function() {
		var availableLinks = [
		  "Home",
		  "Admission",
		  "Programs",
		  "News",
		  "Gallery",
		  "About DBTC",
		  "Architecture",
		  "Information Technology",
		  "Computer Science",
		  "Computer Engineering",
		  "Mechanical Engineering",
		  "Electronics Engineering",
		  "Entrepreneurship",
		  "Aircraft Maintenance Technology"
		];
		
		$( ".search-input" ).autocomplete({
			source: availableLinks,
			select: function (event, ui) {
				var label = ui.item.label;
				var value = ui.item.value;
				//store in session
				checkValue(value);
			}
		});
		
		function checkValue(value){
			
			if(value.toLowerCase() == "Home")
				window.location.href = "DBTC_Home.html";
			
			if(value.toLowerCase() == "admission")
				window.location.href = "DBTC_Admission.html";
			
			if(value.toLowerCase() == "programs")
				window.location.href = "DBTC_Programs-Offered.html";
			
			if(value.toLowerCase() == "news")
				window.location.href = "DBTC_News-and-Events - page1.html";
			
			if(value.toLowerCase() == "gallery")
				window.location.href = "DBTC_Gallery.html";
			
			if(value.toLowerCase() == "about dbtc")
				window.location.href = "DBTC_About-Us.html";
			
			if(value.toLowerCase() == "architecture")
				window.location.href = "DBTC_Programs-Offered_Archi.html";
			
			if(value.toLowerCase() == "information technology")
				window.location.href = "DBTC_Programs-Offered_IT.html";
			
			if(value.toLowerCase() == "computer science")
				window.location.href = "DBTC_Programs-Offered_CS.html";
			
			if(value.toLowerCase() == "computer engineering")
				window.location.href = "DBTC_Programs-Offered_CPE.html";
			
			if(value.toLowerCase() == "mechanical engineering")
				window.location.href = "DBTC_Programs-Offered_ME.html";
			
			if(value.toLowerCase() == "electronics engineering")
				window.location.href = "DBTC_Programs-Offered_ECE.html";
			
			if(value.toLowerCase() == "entrepreneurship")
				window.location.href = "DBTC_Programs-Offered_Entrep.html";
			
			if(value.toLowerCase() == "aircraft maintenance technology")
				window.location.href = "DBTC_Programs-Offered_ACT.html";
			
		}
		
				
		
		
	} );
});