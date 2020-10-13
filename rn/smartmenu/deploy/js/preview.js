$(document).ready(function() {
	"use strict";

	//Skins
	$("#demo-skins .demo-op").click(function() {
		var btn = $(this);
		
		//Remove old selected button
		var parent = btn.parent().parent();
		parent.find(".demo-op").removeClass("selected");
		
		//Add selected class
		btn.addClass("selected");
		
		//Change skin
		var skin = btn.data("skin");
		$("link.skin").attr("href", "smartmenu/colors/"+skin+".css");
	});
	
	//Configurations
	var params = {
		position:"top",
		effect:{
			name:"fade", 
			easing:"ease"
		}
	};
	
	$("#demo-config select").change(function() {
		var item = $(this);
		var name = item.attr("name");
		var val = item.val();
		var opt = item.find("option:selected").html();
		
		//Html
		$(this).parent().find(".dropcontent").html(opt);
		
		if (name==="effect") {
			params.effect.name = val;
		} else if (name==="easing") {
			params.effect.easing = val;
		} else {
			params[name] = val;
		}
		
		//Create menu
		api.smartMenu("destroy").smartMenu(params);
	});

});