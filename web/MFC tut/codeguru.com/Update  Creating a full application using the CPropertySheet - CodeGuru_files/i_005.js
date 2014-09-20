
var zzADS_CHAN = '203768695';
if (typeof zzPage_obj != 'undefined' && typeof zzPage_obj[zzADS_CHAN] != 'undefined') {
    var zzStr          = zzPage_obj[zzADS_CHAN].zzStr;
    var zzTrd          = zzPage_obj[zzADS_CHAN].zzTrd;
    var zzParam        = zzPage_obj[zzADS_CHAN].zzParam + ";";
    var zzRef          = zzPage_obj[zzADS_CHAN].zzRef + ";";
    var zzSection      = zzPage_obj[zzADS_CHAN].zzSection;
    var zzD            = zzPage_obj[zzADS_CHAN].zzD;
    var zzFlash        = zzPage_obj[zzADS_CHAN].zzFlash;
    var zzFlashVersion = zzPage_obj[zzADS_CHAN].zzFlashVersion;
    var zzKeyword      = zzPage_obj[zzADS_CHAN].zzKeyword;
    var zzPat          = zzPage_obj[zzADS_CHAN].zzPat;
    var zzCountry      = zzPage_obj[zzADS_CHAN].zzCountry;
    var zzState        = zzPage_obj[zzADS_CHAN].zzState;
    var zzMetro        = zzPage_obj[zzADS_CHAN].zzMetro;
}
else {
    var zz_trd = "";
    var zz_param = "";
    var zz_ref = "";
}


if (typeof zzTrd != 'undefined') { zz_trd = zzTrd; }
if (typeof zzParam != 'undefined') { zz_param = zzParam + ";"; }
if (typeof zzRef != 'undefined') { zz_ref = "y=" + zzRef + ";"; }

var zzDate = new Date(); 

document.write('<script language="javascript">'); 
document.write('var welcomeCookie="intmintc";'); 
document.write('if ((document.cookie.indexOf(welcomeCookie)==-1) && (navigator.userAgent.indexOf("Mozilla")>-1))  {'); 
document.write('var tomorrow = new Date();'); 
document.write('var nowPlus =  tomorrow.getTime() + (24*60*60*1000);'); 
document.write('tomorrow.setTime(nowPlus);'); 
document.write('document.cookie = welcomeCookie +\'__welcome; path=/; expires=\' + tomorrow.toGMTString();'); 
document.write('if (document.cookie.indexOf(welcomeCookie) != -1){'); 
document.write('document.cookie="toURL"+ "=" +escape(document.URL)+";path=/; expires="+tomorrow.toGMTString();'); 
document.write('this.location=\'/welcomead/\';'); 
document.write('}'); 
document.write('}'); 
document.write('<\/script>'); 


