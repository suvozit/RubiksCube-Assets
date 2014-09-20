var mojopro2 = window.location.protocol;
if (mojopro2 == "https:") {
mojosrc = "https://secure.img-cdn.mediaplex.com/0/documentwrite.js";
}
else
  {
mojosrc = "http://img-cdn.mediaplex.com/0/documentwrite.js";
  };
var jssrc = '<scr' + 'ipt type="text/javascript" src="' + mojosrc + '"></scr' + 'ipt>';
if( window.DocumentWrite ){
    DocumentWrite( jssrc );
}
  else {
    document.write( jssrc );
};
//-->
 
(function(){
var mojopro = window.location.protocol;
if (mojopro == "https:") {
mojopro = "https://secure.img-cdn.mediaplex.com/0/";
}
else  {
mojopro = "http://img-cdn.mediaplex.com/0/";
  };  
var mpvce = '<mpvce/>';
if (mpvce == 1) {
mpvclick = encodeURIComponent("http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DBpSrB8cf4Tfj6CoK9cMHUpKgN8cWfhwIAAAAQASCGyvQBOABY-ezEvhhg5crlg7QOsgEUd3d3LmNwcm9ncmFtbWluZy5jb226AQozMDB4MjUwX2FzyAEJ2gE7aHR0cDovL3d3dy5jcHJvZ3JhbW1pbmcuY29tL3R1dG9yaWFsL2JpdHdpc2Vfb3BlcmF0b3JzLmh0bWzgAQKYApQjwAIC4AIA6gIkUnVuT2ZTaXRlX0xhcmdlUmVjdGFuZ2xlX0FURl8zMzZ4Mjgw-ALw0R6QA5oImAPgA6gDAeAEAQ%26num%3D0%26sig%3DAGiWqtydg2VfHLKm-rZ57oMif5hz4hi8DA%26client%3Dca-pub-2560316224908115%26adurl%3D");
mpvc = mpvclick;
}
else if (mpvce == 2) {
mpvclick2 = encodeURIComponent("http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DBpSrB8cf4Tfj6CoK9cMHUpKgN8cWfhwIAAAAQASCGyvQBOABY-ezEvhhg5crlg7QOsgEUd3d3LmNwcm9ncmFtbWluZy5jb226AQozMDB4MjUwX2FzyAEJ2gE7aHR0cDovL3d3dy5jcHJvZ3JhbW1pbmcuY29tL3R1dG9yaWFsL2JpdHdpc2Vfb3BlcmF0b3JzLmh0bWzgAQKYApQjwAIC4AIA6gIkUnVuT2ZTaXRlX0xhcmdlUmVjdGFuZ2xlX0FURl8zMzZ4Mjgw-ALw0R6QA5oImAPgA6gDAeAEAQ%26num%3D0%26sig%3DAGiWqtydg2VfHLKm-rZ57oMif5hz4hi8DA%26client%3Dca-pub-2560316224908115%26adurl%3D");
mpvc = encodeURIComponent(mpvclick2);
}
else
  {
mpvc = ("http://adclick.g.doubleclick.net/aclk%253Fsa%253DL%2526ai%253DBpSrB8cf4Tfj6CoK9cMHUpKgN8cWfhwIAAAAQASCGyvQBOABY-ezEvhhg5crlg7QOsgEUd3d3LmNwcm9ncmFtbWluZy5jb226AQozMDB4MjUwX2FzyAEJ2gE7aHR0cDovL3d3dy5jcHJvZ3JhbW1pbmcuY29tL3R1dG9yaWFsL2JpdHdpc2Vfb3BlcmF0b3JzLmh0bWzgAQKYApQjwAIC4AIA6gIkUnVuT2ZTaXRlX0xhcmdlUmVjdGFuZ2xlX0FURl8zMzZ4Mjgw-ALw0R6QA5oImAPgA6gDAeAEAQ%2526num%253D0%2526sig%253DAGiWqtydg2VfHLKm-rZ57oMif5hz4hi8DA%2526client%253Dca-pub-2560316224908115%2526adurl%253D");
  }; 
var mpcke = '<mpcke/>';
if (mpcke == 1) {
mpcclick = encodeURIComponent("altfarm.mediaplex.com%2Fad%2Fck%2F12124-129374-36735-1%3Fmpt%3D1612524231");
mpck = "http://" + mpcclick;
}
else if (mpcke == 2) {
mpcclick2 = encodeURIComponent("altfarm.mediaplex.com%2Fad%2Fck%2F12124-129374-36735-1%3Fmpt%3D1612524231");
mpck = "http://" + encodeURIComponent(mpcclick2);
}
else
  {
mpck = ("http://altfarm.mediaplex.com%2Fad%2Fck%2F12124-129374-36735-1%3Fmpt%3D1612524231");
  };
var mp_swver = 0, mp_html = "";
if( navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin ) {
  if( navigator.plugins && navigator.plugins["Shockwave Flash"] ) {
    mp_swver = (navigator.plugins["Shockwave Flash"].description.split( " " ))[2];
  }
} else if ( navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && ( navigator.userAgent.indexOf("Windows") >= 0 ) ) {
var mp_axo,e;
  for( var mp_i = 11; mp_i > 6; mp_i-- ) {
    try {
    mp_axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + mp_i );
    mp_swver = mp_i;
    break;
    } catch (e) {}
  }
}
if( mp_swver >= 6 ) {
  mp_html =  '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
  mp_html += ' codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" id="8" name="movie8" width="300" height="250">';
  if( mp_swver > 5 ) {
    mp_html += '<param name="FlashVars" value="clickTAG=' + mpvc + mpck +'&clickTag=' + mpvc + mpck + '&clickTag1=' + mpvc + mpck + '">';
    mp_html += '<param name="movie" value="' + mojopro + '12124/129374/300x250_2_May.swf">';
    mp_html += '<param name="wmode" value="opaque">';
    mp_html += '<param name="allowscriptaccess" value="always">';
  } 
  else {
    mp_html += '<param name="movie" value="' + mojopro + '12124/129374/300x250_2_May.swf?clickTAG=' + mpvc + mpck +'&clickTag=' + mpvc + mpck + '&clickTag1=' + mpvc + mpck + '">';
  	mp_html += '<param name="wmode" value="opaque">';
  	mp_html += '<param name="allowscriptaccess" value="always">';
  }
  if( mp_swver > 5 ) {
    mp_html += '<embed wmode="opaque" allowscriptaccess="always" name="12124/129374/300x250_2_May." src="' + mojopro + '12124/129374/300x250_2_May.swf" FlashVars="clickTAG=' + mpvc + mpck  +'&clickTag=' + mpvc + mpck  +'&clickTag1=' + mpvc + mpck  + '"';
	}
  else {
    mp_html += '<embed wmode="opaque" allowscriptaccess="always" NAME="12124/129374/300x250_2_May." src="' + mojopro + '12124/129374/300x250_2_May.swf?clickTAG=' + mpvc + mpck  +'&clickTag=' + mpvc + mpck  +'&clickTag1=' + mpvc + mpck  + '"';
	}
  mp_html += ' swLiveConnect="false" width="300" height="250" type="application/x-shockwave-flash" pluginspage="">';
  mp_html += '</embed>';
  mp_html += '</object>';
  if( window.DocumentWrite )
    DocumentWrite( mp_html );
  else
    document.write( mp_html );
} else if( !( navigator.appName && navigator.appName.indexOf("Netscape") >= 0 && navigator.appVersion.indexOf("2.") >= 0 ) ) {
  document.write('<a href="http://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DBpSrB8cf4Tfj6CoK9cMHUpKgN8cWfhwIAAAAQASCGyvQBOABY-ezEvhhg5crlg7QOsgEUd3d3LmNwcm9ncmFtbWluZy5jb226AQozMDB4MjUwX2FzyAEJ2gE7aHR0cDovL3d3dy5jcHJvZ3JhbW1pbmcuY29tL3R1dG9yaWFsL2JpdHdpc2Vfb3BlcmF0b3JzLmh0bWzgAQKYApQjwAIC4AIA6gIkUnVuT2ZTaXRlX0xhcmdlUmVjdGFuZ2xlX0FURl8zMzZ4Mjgw-ALw0R6QA5oImAPgA6gDAeAEAQ%26num%3D0%26sig%3DAGiWqtydg2VfHLKm-rZ57oMif5hz4hi8DA%26client%3Dca-pub-2560316224908115%26adurl%3Dhttp://altfarm.mediaplex.com/ad/ck/12124-129374-36735-1?mpt=1612524231" target="_blank"><img src="http://img-cdn.mediaplex.com/0/12124/129374/300x250_2_May.jpg" width="300" height="250" border="0" alt=""></a>');
}
})();
//-->

