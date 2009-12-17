/*
 * jQuery meta dialog plug-in 0.1
 *
 * http://www.erichynds.com
 *
 * Copyright (c) 2009 Eric Hynds
 *
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 
(function($){
	$.fn.metadialog = function(options){

		// default options
		$.fn.metadialog.defaults = {
			extraParams: {},
			loadingHTML: 'Loading...',
			loadCallback: function(){},
			reloadParent: false,
			metadataType: 'class',
			metadataName: 'metadata'
		};
	
		// merge this plugin's defaults with the dialogs defaults
		var opts = $.extend({}, $.ui.dialog.defaults, $.fn.metadialog.defaults, options);

		// on the click event of each matched item... live() for nested dialogs
		return this.live('click', function(e){
			$this = $(this);
			
			// the ID of the dialog window that opened this one, if applicable.
			var parent = $this.parents(".metadialog-dialog").attr('id') || undefined;
			
			// override this instance's options with attribute meta data
			var settings = $.metadata ? $.extend({}, opts, $this.metadata({ type:opts.metadataType, name:opts.metadataName }) ) : opts;
			
			// create a unique ID for this dialog
			var dialogID = 'metadialog-dialog-' + (new Date).getTime();

			// create, load, and open the dialog
			var thisdialog = $('<div class="metadialog-dialog" id="'+ dialogID +'">' + settings.loadingHTML + '</div>')
			.appendTo("body")
			.load(this.href, settings.extraParams, settings.loadCallback)
			.dialog(settings)
			.dialog("open")
			.data('postdata', [this.href, settings.extraParams]);
			
			// if we are going to attempt to reload the parent dialog, and one actually exists...
			if(settings.reloadParent && parent !== undefined){
				
				// bind to this dialog's close event
				thisdialog.bind('dialogclose', function(){
					var $this = $(this),
					    $parent = $('#' + parent),
					    postdata = $parent.data('postdata'),
					    href = postdata[0], 
					    extraParams = postdata[1];
					
					// close the dialog
					$this.remove();

					// reload data into the parent if the parent is still open.
					if($parent.dialog('isOpen')) $parent.load(href, extraParams, settings.loadCallback);
				});
			};
			
			e.preventDefault();
		});
	};
})(jQuery);

