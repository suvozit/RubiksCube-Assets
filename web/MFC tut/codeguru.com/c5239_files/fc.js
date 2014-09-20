//  Copyright (c) 2011 QuinStreet Inc. All Rights Reserved.
//  prod:49
function N2(){
zzPage_obj.zzGeo=zzPage_obj['cookies']['qsg'];
zzPage_obj.zzCountry=parseInt(U2(zzPage_obj.zzGeo));
zzPage_obj.zzState=parseInt(N3(zzPage_obj.zzGeo));
zzPage_obj.zzMetro=parseInt(F3(zzPage_obj.zzGeo));
zzPage_obj.zzFlash=(zzPage_obj['cookies']['QUADIDX']& 0x8);
zzPage_obj.zzFlashVersion=4+((zzPage_obj['cookies']['QUADIDX']& 0x70)>>4);
zzPage_obj.zzUserAgent=navigator.userAgent.toLowerCase();
zzPage_obj.zzIsMac=(zzPage_obj.zzUserAgent.indexOf('mac')!=-1);
zzPage_obj.zzIsOpera=(zzPage_obj.zzUserAgent.indexOf('opera')!=-1);
zzPage_obj.zd_inject_params=U8();
}
function N9(){
if(zzPage_obj['cookies']['QIDA'].indexOf('OPT_OUT')==-1){
if((zzPage_obj['cookies']['qsg']==254)||(!('qsgr' in zzPage_obj['cookies']))){
N0('qsgr','1',2592000000);
if(typeof zz_in_ihtml!='undefined'){
var d9=F0('g',false);
N0('qsg',d9,2592000000);
zzPage_obj['cookies']['qsg']=d9;
}
else{
document.write("<SC"+"RIPT LANGUAGE='JavaScript' SRC='http://o1.qnsr.com/init/"+Math.random()+"/g.js'><\/SCR"+"IPT>");
}}
if(zzPage_obj['cookies']['QUADIDX']==0||(!('qidxr' in zzPage_obj['cookies']))){
N0('qidxr','1',2592000000);
if(typeof zz_in_ihtml!='undefined'){
var f6=F0('x',false);
N0('QUADIDX',f6,2592000000);
zzPage_obj['cookies']['QUADIDX']=f6;
zzPage_obj.d0=f6;
}
else{
if(document.all&&!zzPage_obj.zzIsMac&&!zzPage_obj.zzIsOpera){
zzPage_obj.d0=U3();
}
else{
zzPage_obj.d0=F4();
}
N0('QUADIDX',zzPage_obj.d0,2592000000);
zzPage_obj['cookies']['QUADIDX']=zzPage_obj.d0;
}}}}
function U1(){
var i0=document.cookie;var v1=new Array();var r2=new Array();
zzPage_obj['cookies']=new Array();
if(!('qsg' in zzPage_obj['cookies'])){zzPage_obj['cookies']['qsg']=254;}
if(!('QUADIDX' in zzPage_obj['cookies'])){zzPage_obj['cookies']['QUADIDX']=0;}
if(!('QIDA' in zzPage_obj['cookies'])){zzPage_obj['cookies']['QIDA']="";}
v1=i0.split(';');
var t9=(v1!=null)?v1.length:0;
for(var i=0;i<t9;i++){
v1[i]=v1[i].replace(/^\s/,'');
r2=v1[i].split('=');
if(r2&&r2.length==2){
zzPage_obj['cookies'][r2[0]]=r2[1];
}}}
function U6(m2,k6){
if(k6){
U1();
}
if(m2 in zzPage_obj['cookies']){return zzPage_obj['cookies'][m2];}
else{return '';}
}
function N0(b1,d5,k3){
if(document.cookie.indexOf('OPT_OUT')==-1){
var r3=new Date();var k0;
if(typeof k3=='undefined'||k3==-1){
k0="Thu,01-Jan-1970 00:00:01 GMT";
}
else{
r3.setTime(r3.getTime()+k3);
k0=r3.toGMTString();
}
document.cookie=b1+'='+d5+';expires='+k0+';path=/;';
zzPage_obj['cookies'][b1]=d5;
}}
function zzChkFCapCookie(v5,t3,b1){
var g0;var i0=U6(b1,true);var i;var v0;var d2=0;var f1=new Date();
if(i0!=""){
g0=i0.split(":");
for(i=0;i<g0.length;i++){
v0=g0[i].split(",");
if(v0[0]==v5){
d2=1;
if(f1.valueOf()<v0[2]&&t3>v0[1]){
return 1;
}
else{
return-1;
}}}}
if(!d2){
return 0 
}}
function zzSetFCapCookie(m5,t5,k5,t3,b1){
var f1=new Date();var i0;var g0;var d2=0;var m1=0;var g3=1000 * 60 * 60 * 24 * k5;var k0=new Date(f1.valueOf()+g3);var i;var t2="";var v0;var t0;
v0=m5+""+t5;
var k2=0;
i0=U6(b1,true);
var v8=N5(i0);
if(i0!=v8){
i0=v8;
k2=1;
}
if(i0!=""){
g0=i0.split(":");
for(i=0;i<g0.length;i++){
if(g0[i]!=""){
t0=g0[i].split(",");
if(t0[0]==v0){
d2=1;
t2+=v0+","+(parseInt(t0[1])+1)+","+k0.valueOf()+":";
k2=1;
}
else{
t2+=g0[i]+":";
}}}
m1=N7(i0);
}
if(!d2){
t2+=v0+",1,"+k0.valueOf()+":";
k2=1;
}
if(m1<k0.valueOf()){
g3=k0.valueOf()-f1.valueOf();
}
if(k2){
N0(b1,t2,g3);
}}
function N5(b3){
var g0;var i;var t0;var f1=new Date();var i0="";
if(b3!=""){
g0=b3.split(":");
for(i=0;i<g0.length;i++){
t0=g0[i].split(",");
if(t0[2]>=f1.valueOf()){
i0+=g0[i]+":";
}}}
return i0;
}
function N7(b3){
var g0;var i;var t0;var m1=0;
g0=b3.split(":");
for(i=0;i<g0.length;i++){
t0=g0[i].split(";");
if(t0[3]>m1){
m1=t0[2];
}}
return m1;
}
function U4(i6){
var d3=i6.toString().match(/function\s+(\w*)/)[1];
if((d3==null)||(d3.length==0)){
return "anonymous();";
}
else{
return d3+"();";
}}
function N4(){
var i5="";
for(var a=arguments.caller;a!=null;a=a.caller){
i5+=U4(a.callee);
if(a.caller==a)break;
}
return i5;
}
function F2(){
var d1="";var d3="anonymous();";var v4=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
d1+='a'+i+'='+arguments[i]+';';
if(i==2){
v4=escape(arguments[i]);
}}
d1=N4()+d1;
if(navigator.cookieEnabled){
d1=d1+'c='+navigator.cookieEnabled+';';
}
d1=d1+"C="+document.cookie+";";
if(document.cookie.indexOf('QUADERROR')==-1){
var zzQTobj=new Object();
N0('QUADERROR',v4,259200000,zzQTobj);
var m6=new Image();
m6.src='http://l1.cdn.qnsr.com/log/ERR.gif?v=./ar/lite/e1/v49/;'+d1+'b='+navigator.userAgent+';'+Math.random();
}
return true;
}
function U2(g2){
return g2 & 255;
}
function F3(g2){
return(g2>>14)& 1023;
}
function N3(g2){
return(g2>>8)& 63;
}
function zzIndexOfList(ll,obj){
for(var i=0;i<ll.length;i++){
if(ll[i]==obj){
return i;
}}
return-1;
}
function U3(){
var d0=1;
zzPage_obj.d4=0;
document.writeln('<SCR'+'IPT LANGUAGE="VBS'+'cript">');
document.writeln('on error resume next\n');
document.writeln('For i=4 to 11');
document.writeln('If Not(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & i)))Then');
document.writeln('Else');
document.writeln('zzPage_obj.d4=i');
document.writeln('End If');
document.writeln('Next');
document.writeln('</scr'+'ipt>');
if(navigator.javaEnabled()){d0 |=2;}
if(zzPage_obj.d4>=4){
d0 |=((zzPage_obj.d4-4)<<4);
d0 |=8;
}
return d0;
}
function F4(){
var d4=0;var d0=1;
if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var d7=navigator.plugins["Shockwave Flash"].description;
try{
d4=d7.match(/(\d+)\./)[1];
}
catch(e1){
}}}
if(navigator.javaEnabled()){d0 |=2;}
if(d4>=4){
d0 |=((d4-4)<<4);
d0 |=8;
}
return d0;
}
var y0='';
function zzrnd(ii){
return(Math.floor((Math.random()* 10000000000006)% ii));
}
function F1(y0){
var v3='';var f10='';var i3='';var y2=y0.split(':');
zzChosenCamps='';
zzChosenComp='';
zzChosenAds='';
zzRndCamp=0;
if(y2.length==3){
i3=y2[0];
if(i3!=''){
zzChosenCamps=i3.split('~');
zzRndCamp=parseInt(Math.random()* zzChosenCamps.length);
}
zzChosenComp=y2[1];
v3=y2[2];
if(v3!=''){
zzChosenAds=v3.split('~');
}}}
var t6=new Array();var y5=0;var r6=0;
function F0(m2,y9){
if(y5<1||y9){
var f4=''+window.location.search;var b4=new Array();var k10='';var v10='';
f4=f4.replace(/^\?/,'');
if(m2=='l'){
var g8="";
r6=f4.indexOf(";l=http");
if(r6!=-1){
g8=f4.substring(r6+3,f4.length);
y5=0;
}
return g8;
}
else{
b4=f4.split(';');
y5=b4.length;
for(var i=0;i<y5;i++){
if(b4[i].length>2){
k10=b4[i].split('=');
t6[b4[i].substring(0,1)]=b4[i].substring(2,b4[i].length);
}}}}
if(t6[m2]){return t6[m2];}
else{return '';}
}
function U8(){
var i4;var t8='';
if(document.all){
i4=document.all.tags('meta');
}
else if(document.documentElement){
i4=document.getElementsByTagName('meta');
}
if(typeof(i4)!='undefined'){
var f9=i4.length;
for(var i=0;i<f9;i++){
var i8=i4.item(i).name;
if((i8.length>0)&&(i8.match(/^inject_params/))){
var f8=i4.item(i).content;
f8.replace(/&/g,';');
t8=f8;
break;
}}}
return t8;
}
var zzBrowserDetect={
init:function(){
if(!this.alreadyLookedup){
this.zzbrowser=this.searchString(this.dataBrowser)||"An unknown browser";
this.zzversion=this.searchVersion(navigator.userAgent)
||this.searchVersion(navigator.appVersion)
||"an unknown version";
var str=''+this.zzversion;
this.zzbrowser=this.zzbrowser+" "+str.replace(/(\d*).*/,'$1.x');
this.zzOS=this.searchString(this.dataOS)||"an unknown OS";
this.alreadyLookedup=1;
}
},
searchString:function(data){
for(var i=0;i<data.length;i++){
var r4=data[i].string;var v9=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(r4){
if(r4.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(v9)
return data[i].identity;
}
},
searchVersion:function(r4){
var d8=r4.indexOf(this.versionSearchString);
if(d8==-1)return;
return parseFloat(r4.substring(d8+this.versionSearchString.length+1));
},
dataBrowser:[
{
string:navigator.userAgent,
subString:"Chrome",
identity:"Chrome"
},
{string:navigator.userAgent,
subString:"OmniWeb",
versionSearch:"OmniWeb/",
identity:"OmniWeb"
},
{
string:navigator.vendor,
subString:"Apple",
identity:"Safari",
versionSearch:"Version"
},
{
prop:window.opera,
identity:"Opera"
},
{
string:navigator.vendor,
subString:"iCab",
identity:"iCab"
},
{
string:navigator.vendor,
subString:"KDE",
identity:"Konqueror"
},
{
string:navigator.userAgent,
subString:"KONQUEROR",
identity:"Konqueror"
},
{
string:navigator.userAgent,
subString:"AOLBROWSER",
identity:"AOL"
},
{
string:navigator.userAgent,
subString:"WEBTV",
identity:"WebTV"
},
{
string:navigator.userAgent,
subString:"Firefox",
identity:"Firefox"
},
{
string:navigator.vendor,
subString:"Camino",
identity:"Camino"
},
{
string:navigator.userAgent,
subString:"Netscape",
identity:"Netscape"
},
{
string:navigator.userAgent,
subString:"MSIE",
identity:"MS Explorer",
versionSearch:"MSIE"
},
{
string:navigator.userAgent,
subString:"MICROSOFT INTERNET EXPLORER",
identity:"MS Explorer"
},
{
string:navigator.userAgent,
subString:"Gecko",
identity:"Mozilla",
versionSearch:"rv"
},
{
string:navigator.userAgent,
subString:"Mozilla",
identity:"Netscape",
versionSearch:"Mozilla"
},
{
string:navigator.userAgent,
subString:"Lynx",
identity:"Text-only"
},
{
string:navigator.userAgent,
subString:"ELinks",
identity:"Text-only"
},
{
string:navigator.userAgent,
subString:"galeon",
identity:"Galeon"
}
],
dataOS:[
{
string:navigator.userAgent,
subString:"Windows NT 6.0",
identity:"Windows Vista"
},
{
string:navigator.userAgent,
subString:"Windows_XP",
identity:"Windows XP"
},
{
string:navigator.userAgent,
subString:"Windows NT 5.1",
identity:"Windows XP"
},
{
string:navigator.platform,
subString:"Mac",
identity:"Macintosh"
},
{
string:navigator.userAgent,
subString:"iPhone",
identity:"iPhone/iPod"
},
{
string:navigator.userAgent,
subString:"AMIGA-AWEB",
identity:"Amiga"
},
{
string:navigator.userAgent,
subString:"HP-UX",
identity:"Unix"
},
{
string:navigator.userAgent,
subString:"LINUX",
identity:"Unix"
},
{
string:navigator.userAgent,
subString:"Windows NT 5.0",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows_NT 5.0",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows_2000",
identity:"Windows 2000"
},
{
string:navigator.userAgent,
subString:"Windows ME",
identity:"Windows ME"
},
{
string:navigator.userAgent,
subString:"WIN 9X",
identity:"Windows ME"
},
{
string:navigator.userAgent,
subString:"WIN95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"Windows 95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"Windows_95",
identity:"Windows 95"
},
{
string:navigator.userAgent,
subString:"WIN98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"Windows 98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"Windows_98",
identity:"Windows 98"
},
{
string:navigator.userAgent,
subString:"WINNT",
identity:"Windows NT"
},
{
string:navigator.userAgent,
subString:"Windows NT",
identity:"Windows NT"
},
{
string:navigator.userAgent,
subString:"Windows_NT",
identity:"Windows NT"
}
]
};
function F10(zzQTobj){
if((!zzQTobj.y1)&&(zzQTobj.zzTrd!='')){
zzQTobj.zzTrd=';l='+zzQTobj.zzTrd;
}
zzQTobj.f0=zzPage_obj.zd_inject_params+zzQTobj.f0;
if(zzQTobj.f0!=''){
zzQTobj.zzParam=zzQTobj.f0.replace(/;/g,'&');
if(!zzQTobj.y1){
zzQTobj.f0=';p='+escape(zzQTobj.zzParam);
}
else{
zzQTobj.f0='&p='+escape(zzQTobj.zzParam);
}}
if(typeof y7!='undefined'&&document.referrer){
zzQTobj.zzRef=document.referrer;
}
else{
zzQTobj.zzRef=document.URL;
}
zzQTobj.zzRef=zzQTobj.zzRef.replace(/;/g,'QQQQ');
zzQTobj.zzRef=zzQTobj.zzRef.replace(/&.*/,'');
zzQTobj.zzStr=zzQTobj.zzStr+'e=i;s='+zzQTobj.zzSection+';g='+zzPage_obj.zzCountry+';w='+zzPage_obj.zzState 
+';m='+zzPage_obj.zzMetro+';'+zzPage_obj.zd_inject_params+';z='+zzrnd(1000000000);
zzQTobj.f2=zzQTobj.m3 * 256;
y0=';d=::';
if(typeof zzcompete!='undefined'){
F1(zzcompete.chosencampstr+':'+zzcompete.chosencomp+':'+zzcompete.chosenadstr);
y0=';d='+zzcompete.chosencampstr+':'+zzcompete.chosencomp+':'+zzcompete.chosenadstr;
}}
function U10(zzQTobj){
F10(zzQTobj);
if(document.layers){
zzQTobj.b0='n='+zzQTobj.r1+';c='+zzQTobj.t1+';s='+zzQTobj.k1+';x='+zzQTobj.f2+';u=j;z='+zzrnd(1000000000)+';'
document.write("<a href='http://o1.qnsr.com/cgi/r?"+zzQTobj.b0+zzQTobj.f0+";y="+
zzRef+zzTrd+"'><img border='0' width='"+zzQTobj.g1+"' height='"+zzQTobj.i1+
"' src='http://o1.qnsr.com/cgi/x?"+zzQTobj.b0+"'></a>");
}
else{
zzQTobj.f2+=1;
if(zzQTobj.y1==1){
zzQTobj.b0='http://e1.cdn.qnsr.com/cgi/d/'+zzQTobj.f2+'/0/'+zzQTobj.r1+
'/'+zzQTobj.t1+'/i0.js?'+';z='+zzrnd(1000000000);
document.write('<scr'+'ipt language="JavaScript" src="'+zzQTobj.b0+'"><\/sc'+'ript>');
}
else{
zzQTobj.b0='http://e1.cdn.qnsr.com/cgi/d/'+zzQTobj.f2+'/0/'+zzQTobj.r1+
'/'+zzQTobj.t1+'/i0.html?'+zzQTobj.f0+
';s='+zzQTobj.k1+';g='+zzPage_obj.zzGeo+';x='+zzPage_obj['cookies']['QUADIDX']+
';y='+zzQTobj.zzRef+y0+';z='+zzrnd(1000000000)+';'+zzQTobj.zzTrd;
document.write("<iframe src='"+zzQTobj.b0+"' frameborder=0 marginheight=0 marginwidth=0 scrolling='no' allowTransparency='true' width="
+zzQTobj.g1+" height="+zzQTobj.i1+"></iframe>");
}}}
function F6(zzQTobj){
zzQTobj.t1=0;
zzQTobj.i1=0;
zzQTobj.f2=0;
zzQTobj.r1=0;
zzQTobj.f0='';
zzQTobj.k1=0;
zzQTobj.m3=0;
zzQTobj.g1=0;
zzQTobj.zzChosenAds='';
zzQTobj.zzChosenCamps='';
zzQTobj.zzChosenComp='';
zzQTobj.zzD=window.document;
zzQTobj.zzParam='';
zzQTobj.zzRef='';
zzQTobj.zzRndCamp=0;
zzQTobj.zzSection=zzQTobj.k1;
zzQTobj.zzStr='';
zzQTobj.zzTrd='';
}
function zzfocrender(f5,y4,t4,r5,g1,i1,f0,k4,m8){
zzflcrender(f5,y4,t4,r5,g1,i1,f0,k4,m8,1);
}
function zzflcrender(f5,y4,t4,r5,g1,i1,f0,k4,m8,y1){
var zzQTobj=new Object();
F6(zzQTobj);
if(!zzPage_obj.zzIsMac){
zzPage_obj['zz_old_error_handler']=window.onerror;
window.onerror=F2;
}
if(typeof f5!='undefined')zzQTobj.r1=f5;
if(typeof y4!='undefined'){zzQTobj.k1=y4;zzQTobj.zzSection=y4;}
if(typeof t4!='undefined')zzQTobj.t1=t4;
if(typeof r5!='undefined')zzQTobj.m3=r5;
if(typeof i1!='undefined')zzQTobj.i1=i1;
if(typeof g1!='undefined')zzQTobj.g1=g1;
if(typeof f0!='undefined')zzQTobj.f0=f0;
if(typeof k4!='undefined'){zzQTobj.zflag_trd=k4;zzQTobj.zzTrd=k4;}
if(typeof y1!='undefined')zzQTobj.y1=y1;
U1();
N2();
zzQTobj.zzGeo=zzPage_obj.zzGeo;
zzQTobj.zzCountry=zzPage_obj.zzCountry
zzQTobj.zzState=zzPage_obj.zzState;
zzQTobj.zzMetro=zzPage_obj.zzMetro 
zzQTobj.zzFlash=zzPage_obj.zzFlash
zzQTobj.zzFlashVersion=zzPage_obj.zzFlashVersion
var g7=parseInt(t4.replace(/\/.*/,''));
g7=((parseInt(f5)* 1000000)+g7);
zzPage_obj[g7]=zzQTobj;
U10(zzQTobj);
if(!zzPage_obj.zzIsMac){
window.onerror=zzPage_obj['zz_old_error_handler'];
}}
if(typeof zzPage_obj=='undefined'){
var zzPage_obj=new Object();
zzPage_obj.zz_old_error_handler=window.onerror;
U1();
N2();
N9();
}