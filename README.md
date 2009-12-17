# jQuery Meta Dialog Plugin

This plugin allows you to open a jQuery UI dialog window on the fly using anchor links. The dialog options can be set using metadata, and the URI in the anchor's
HREF attribute will automatically load into the dialog.  Options set when the plugin is initialized (see step 1) will be used if not overwritten in the
links metadata.  Also supports nested dialogs, with the option to reload the parent dialog when the child is closed.

Requires jQuery UI and the metadata plugin @ http://plugins.jquery.com/project/metadata

#### Step 1: bind the plugin

Bind the metadialog plugin to all anchor links with the 'dialog' class.  Set whatever default dialog options you want,
and specify that the plugin can find the metadata in the 'class'.

	$("a.dialog").metadialog({
		modal: true,
		title: 'My Default Title',
		width: 400,
		height: 600,
		metadataType: 'class',
		loadingMessage: 'Loading, please wait...'
	});

#### Step 2: write your links

Now you can open dialogs like such:

	<a href="mypage.htm" class="{title:'Test 1', width:200, height:100}">Test 1</a>

A dialog 200x100px will open with the title "Test 1", and load "mypage.htm" into it.

Every option available to the dialog can be set using metadata, so it is possible to get fancy (albiet, not recommended!):

	<a href="mypage.htm" class="{title:'Test 2', buttons:{ "Close":{$(this).dialog('close');} }}">Test 2</a>

### Options

> jQuery UI dialog options

Set any of these options: http://jqueryui.com/demos/dialog/#options

> extraParams

Additional params to pass to the server.  Useful in determining if the page was requested by this plugin or not (degrading).

> loadingHTML

HTML to appear in the dialog while the HREF URI is being loaded in.  Defaults to "Loading..."

> loadCallback

A callback to fire when the load() AJAX is complete. 

> reloadParent

If you're nesting dialogs and this is set to true, the parent dialog will be reloaded when the child dialog closes.  Defaults to false.

> metadataType

For the metadata plugin:  "Specify the expected locations of metadata for the element. Possible values are 'class': search in the class attribute, 'elem': search for an element inside the element being searched, and 'attr': search in a custom attribute on the element."  Defaults to "class"

metadataName:

For the metadata plugin: "When type is 'attr', specify the name of the custom attribute for which to search. When type is 'elem', specify the tag name of the element for which to search."  Defaults to "metadata"












