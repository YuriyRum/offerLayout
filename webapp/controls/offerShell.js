sap.ui.define(["sap/ui/core/Control"],
function(Control){
	"use strict";	
	Control.extend("com.cib.offer.controls.offerShell",{
		metadata:{
			properites:{},
			aggregations:{},
			events:{}
		},
		
		init: function(){
			
		},
		
		renderer:{
			render:function(oRm,oControl){				
				oRm.write("<div");
				oRm.writeControlData(oControl);
				oRm.write(">");
				oRm.write("<div class='top'>");
					oRm.write("<div class='arrow-left'>");
					oRm.write("</div>");				
					oRm.write("<div class='arrow-right'>");
					oRm.write("</div>");								
				oRm.write("</div>");
				oRm.write("<div class='left'>");
				oRm.write("</div>");				
				oRm.write("<div class='body'>");
				oRm.write("</div>");						
				oRm.write("</div>");
			}
		}
	});
})