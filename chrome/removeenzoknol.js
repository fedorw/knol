// ==UserScript==
// @name        RemoveEnzoKnol
// @namespace   f
// @description Verwijder hinderlijke "Enzo Knol"-filmpjes van youtube
// @version     1
// @grant       none
// ==/UserScript==
function knol() {
	knoltroep=new Array();
	Array.prototype.forEach.call(document.getElementsByTagName('div'), function(div) 
	{
		if ( div.className!='yt-lockup-content') return;
		
		var a=div.getElementsByTagName('a');
		Array.prototype.forEach.call(a, function(a) 
		{
			if(a.title.indexOf('KNOL')>-1) {
				knoltroep.push(div);
			} 
		});
	});
	for (var i=0;i<knoltroep.length;i++) 
	{
		knoltroep[i].parentElement.innerHTML='';
	}
}

knol();
