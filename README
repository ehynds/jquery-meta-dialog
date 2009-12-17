# jQuery Meta Dialog Plugin

This plugin allows you to open a jQuery UI dialog window on the fly using anchor links. The dialog options can be set using metadata, and the URI in the anchor's
HREF attribute will automatically load into the dialog.  Options set when the plugin is initialized (see step 1) will be used if not overwritten in the
links metadata.  Also supports nested dialogs, with the option to reload the parent dialog when the child is closed.

Requires jQuery UI and the metadata plugin @ http://plugins.jquery.com/project/metadata

### Step 1: bind the plugin

Bind the metadialog plugin to all anchor links with the 'dialog' class.  Set whatever default dialog options you want,
and specify that the plugin will use the html5 'data' attribute to find the metadata.

	$("a.dialog").metadialog({
		modal: true,
		title: 'My Default Title',
		width: 400,
		height: 600
		metadataType: 'html5',
		loadingMessage: 'Loading, please wait...'
	});

### Step 2: write your links

Now you can open dialogs like such:

	<a href="mypage.htm" data="{title:'Test 1', width:200, height:100}">Test 1</a>

A dialog 200x100px will open with the title "Test 1", and load "mypage.htm" into it.

Every option available to the dialog can be set using metadata, so it is possible to get fancy (albiet, not recommended!):

	<a href="mypage.htm" data="{title:'Test 2', buttons:{ "Close":{$(this).dialog('close');} }}">Test 2</a>
