sap.ui.define(["sap/ui/core/UIComponent"], 
function(UIComponent){
	"use strict";
	
	UIComponent.extend("com.cib.offer.Component",{
		
		metadata:{
			manifest:"json"
		},
		
		init: function(){
			UIComponent.prototype.init.apply(this,arguments);
		}
	})
})