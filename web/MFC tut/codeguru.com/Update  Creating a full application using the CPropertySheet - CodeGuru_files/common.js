var getBrowser = function() {
	var userAgent = navigator.userAgent.toLowerCase();
	if (/webkit/.test( userAgent )) {
		return "safari";
	}
	if (/opera/.test( userAgent )) {
		return "opera";
	}
	if (/msie/.test( userAgent ) && !/opera/.test( userAgent )) {
		return "msie";
	}
	if (/mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )) {
		return "mozilla";
	}
};

var getBrowserVersion = function() {
	var userAgent = navigator.userAgent.toLowerCase();
	return (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1];
};

var hasClass = function(element, className) {
	var array = (element.className || element).toString().split(/\s+/);
	
	var j=-1;
	for (var i=0;i<array.length;i++) {
		if (array[i] === className) {
			j=i;
		}
	}
	return (j > -1);
}

var removeClass = function(element, className) {
	var arr = (element.className || element).toString().split(/\s+/);
	
	var newArr = new Array();
	var j = 0;
	for (var i=0;i<arr.length;i++) {
		if (arr[i] != className) {
			newArr[j] = arr[i];
			j++;
		}
	}
	element.className = newArr.join(" ");
}

var addClass = function(element, className) {
	if (!hasClass(element,className)) {
		element.className += (element.className ? " " : "") + className;
	}
}

var searchChilds = function(element, childClassName, level, maxLevel) {
	maxLevel = maxLevel || 0;
	level = level || 0;
	
	var childs = new Array();
	for(var i=0;i<element.childNodes.length;i++) {
		if (hasClass(element.childNodes[i],childClassName)) {
			childs.push(element.childNodes[i]);
		}
		if (element.childNodes[i].childNodes.length > 0 && (maxLevel == 0 || level < maxLevel)) {
			childs = childs.concat(searchChilds(element.childNodes[i],childClassName,level+1,maxLevel));
		}
	}
	return childs;
}

var searchChildsByTagName = function(element, childTagName, level, maxLevel) {
	maxLevel = maxLevel || 0;
	level = level || 0;
	
	var childs = new Array();
	for(var i=0;i<element.childNodes.length;i++) {
		if (element.childNodes[i].tagName == childTagName) {
			childs.push(element.childNodes[i]);
		}
		if (element.childNodes[i].childNodes.length > 0 && (maxLevel == 0 || level < maxLevel)) {
			childs = childs.concat(searchChildsByTagName(element.childNodes[i],childTagName,level+1,maxLevel));
		}
	}
	return childs;
}

function getStyleValue(elem, prop) {
	var ret, style = elem.style;
	
	if (prop == "opacity" && getBrowser() == "msie") {
		return style.filter && style.filter.indexOf("opacity=") >= 0 ?
			(parseFloat( style.filter.match(/opacity=([^)]*)/)[1] ) / 100) + '':
			"";
	} else {
		return parseInt(style[prop],10) || 0;
	}
}

function setStyleValue(elem, prop, value) {	
	if (prop == "opacity" && getBrowser() == "msie") {
		elem.style.zoom=1;
		elem.style.filter = (elem.style.filter || "").replace( /alpha\([^)]*\)/, "" ) +
			(parseInt( value ) + '' == "NaN" ? "" : "alpha(opacity=" + value * 100 + ")");
		
	} else {
		elem.style[prop]=value;
	}
}

function getWidth(elem, p, b, m) {
	w = elem.offsetWidth;
	
	p = p || true;
	b = b || true;
	m = m || false;
	
	padding = 0;
	border = 0;
	margin = 0;
	
	if (p)
		padding = getStyleValue(elem, "paddingLeft") + getStyleValue(elem, "paddingRight");
		
	if (b)
		border = getStyleValue(elem, "borderLeftWidth") + getStyleValue(elem, "borderRightWidth");
		
	if (m) 
		margin = getStyleValue(elem, "marginLeft") + getStyleValue(elem, "marginRight");
		
	return w + padding + border + margin;
}

function now() {
	return +new Date;
}

var Animation = function(duration,step,complete,cancel) {
	var startTime = now();
	var dur = duration;
	var self=this;
	
	var timerId = window.setInterval(function() {
		var n  = now() - startTime;
		var state = n / dur;
		if (state > 1) {
			state = 1;
		}
		if (step != undefined && typeof(step) == "function") {
			
			var r = step.call(self,state,n,dur) || true;
			if (!r || state >= 1) {
				window.clearInterval(timerId);
				if (!r && cancel != undefined && typeof(cancel) == "function") {
					cancel.call(state);
				}
				if (r && complete != undefined && typeof(complete) == "function") {
					complete.call(state);
				}
			}
		}
	},13);
	
}













function popupWindow(instanceSettings){
	$.fn.popupWindow.defaultSettings = {
		centerBrowser:0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left
		centerScreen:0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left
		height:500, // sets the height in pixels of the window.
		left:0, // left position when the window appears.
		location:0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
		menubar:0, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
		resizable:0, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
		scrollbars:0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
		status:0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
		width:500, // sets the width in pixels of the window.
		windowName:null, // name of window set from the name attribute of the element that invokes the click
		windowURL:null, // url used for the popup
		top:0, // top position when the window appears.
		toolbar:0 // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
	};
	
	settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});
	
	var windowFeatures =    'height=' + settings.height +
							',width=' + settings.width +
							',toolbar=' + settings.toolbar +
							',scrollbars=' + settings.scrollbars +
							',status=' + settings.status + 
							',resizable=' + settings.resizable +
							',location=' + settings.location +
							',menuBar=' + settings.menubar;

			settings.windowName = settings.windowName;
			settings.windowURL = settings.windowURL;
			var centeredY,centeredX;
		
			if(settings.centerBrowser){
					
				if ($.browser.msie) {//hacked together for IE browsers
					centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120)/2) - (settings.height/2)));
					centeredX = window.screenLeft + ((((document.body.offsetWidth + 20)/2) - (settings.width/2)));
				}else{
					centeredY = window.screenY + (((window.outerHeight/2) - (settings.height/2)));
					centeredX = window.screenX + (((window.outerWidth/2) - (settings.width/2)));
				}
				window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
			}else if(settings.centerScreen){
				centeredY = (screen.height - settings.height)/2;
				centeredX = (screen.width - settings.width)/2;
				window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + centeredX +',top=' + centeredY).focus();
			}else{
				window.open(settings.windowURL, settings.windowName, windowFeatures+',left=' + settings.left +',top=' + settings.top).focus();	
			}
			return false;
				
}


function openTwitter(){
	//var pos = jQuery('#event_player').offset();
	//var w = jQuery('#event_player').width();
	//popupWindow({ windowURL: 'event.php?cmd=twitter', windowName: 'Twitter', height:590, width:250, top:pos.top, left:pos.left+w+20, resizable:0, toolbar:0, status:0, location:0 }); 
	
	var s = "<div class=\"twitter_box\"><div><div class=\"twitter_header\">Twitter Feed</div><div class=\"twitter_close\"><a href=\"javascript:closeTwitter();\">Close</a></div></div><div><iframe frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\"  src=\"event.php?cmd=twitter\" name=\"iframe\" width=\"250\" height=\"490\"></iframe></div></div>";
	jQuery(".twitter_box").remove();
	jQuery("div.wrapBody").eq(0).after(s);
	jQuery(".twitter_box").css("position", "fixed");
	//jQuery(".twitter_box").css("left", "0px");
	//jQuery(".twitter_box").css("top", "0px");
	jQuery(".twitter_box").css("width", "250px");
	jQuery(".twitter_box").css("height", "490px");
	jQuery(".twitter_box").css("background-color", "#FFFFFF");
	jQuery(".twitter_box").css("z-index", "9999999");
	
	var offset = jQuery(".twitter_box").offset();
	var dimMainRight= jQuery("div.dimMainRight").offset();
	var player_position = jQuery("div#event_player div.player").offset();
	jQuery(".twitter_box").css("left", dimMainRight.left+"px");
	//var pos = player_position.top-window.scrollY;
	var pos = 0;
	if(pos < 0){
		pos = 0;
	}
	jQuery(".twitter_box").css("top", (pos)+"px");
	jQuery(".twitter_box").draggable();
}

function closeTwitter(){
	jQuery(".twitter_box").remove();
}







