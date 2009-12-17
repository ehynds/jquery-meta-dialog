<p>I am example.nested.1.php.</p>
<p>Note the current timestamp: <b><?php echo date("F j, Y, g:i:s a") ?></b>.  Open another dialog with the link below, close it, and this window will be refreshed.  This is useful if the link below opens a dialog that allows you to modify data displayed in this dialog.</p>
<p><a href="examples/example.nesteddependent.2.htm" class="dialog" data="{width:400,modal:true,height:225,title:'Nested Dialog',reloadParent:true,buttons:{'close':function(){ $(this).dialog('close'); }} }">Open a nested example</a></p>
<code>&lt;a href="examples/example.nesteddependent.2.htm" class="dialog" data="{width:400,modal:true,height:225,title:'Nested Dialog',reloadParent:true,buttons:{'close':function(){ $(this).dialog('close'); }} }"&gt;Open a nested example&lt;/a&gt;</code>
