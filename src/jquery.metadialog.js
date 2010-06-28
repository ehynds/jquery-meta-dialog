/*
 * jQuery Meta Dialog Plugin 1.2
 *
 * http://www.erichynds.com
 *
 * Copyright (c) 2009 Eric Hynds
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 
(function($){
	$.fn.metadialog = function(options){
	
		// merge this plugin's defaults with the dialogs defaults
		var opts = $.extend({}, $.ui.dialog.defaults, $.fn.metadialog.defaults, options),
			guid = 0;
	
		return this.live("click", function(e){
			var $this = $(this),

			// the dialog window that opened this one
			$parent = $this.closest("div.metadialog-dialog"),
		
			// override this instance's options with attribute meta data
			settings = $.extend({}, opts, $.metadata 
				? $this.metadata({ type:opts.metadataType, name:opts.metadataName })
				
				// if metadata plugin isn't present, merge in JSON from data-metadialog attr.
				: (new Function("return " + (this.getAttribute("data-metadialog") || "{}") ))()
			),
			
			// create a unique ID for this dialog
			dialogID = 'metadialog-dialog-'+(++guid),

			// create, load, and open the dialog
			$thisdialog = $('<div class="metadialog-dialog" id="'+dialogID+'">' + settings.loadingHTML + '</div>')
			.appendTo("body")
			.load(this.href, settings.extraParams, settings.loadCallback)
			.dialog(settings)
			.dialog("open")
			.data("postdata", [this.href, settings.extraParams]);
		
			// if we are going to attempt to reload the parent dialog, and one actually exists...
			if(settings.reloadParent && $parent.length){
			
				// bind to this dialog's close event
				$thisdialog.bind('dialogclose', function(){
					var postdata = $parent.data('postdata'),
						href = postdata[0], 
						extraParams = postdata[1];
				
					// close the dialog
					$(this).remove();
					
					// reload data into the parent if the parent is still open.
					if($parent.dialog("isOpen")){
						$parent.load(href, extraParams, settings.loadCallback);
					};
				});
			};
		
			e.preventDefault();
		});
	};
	
	// default options
	$.fn.metadialog.defaults = {
		extraParams: {},
		loadingHTML: 'Loading...',
		loadCallback: function(){},
		reloadParent: false,
		metadataType: 'class',
		metadataName: 'metadata'
	};
	
})(jQuery);

