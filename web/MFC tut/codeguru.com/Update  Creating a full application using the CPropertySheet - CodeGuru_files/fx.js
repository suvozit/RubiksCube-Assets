//  Copyright (c) 2011 QuinStreet Inc. All Rights Reserved.
//  prod:49
function zzshuffle(xa){
for(var t10,tmp,i=xa.length;i;rnd=parseInt(Math.random()*i),tmp=xa[--i],xa[i]=xa[rnd],xa[rnd]=tmp);
return xa;
}
function zzIndexOfList(ll,obj){
for(var i=0;i<ll.length;i++){
if(ll[i]==obj){
return i;
}}
return-1;
}
function zzrnd(ii){
return(Math.floor((Math.random()* 10000000000006)% ii));
}
function N8(m0){
if(zzIndexOfList(zzcompete.bannedcamps,m0)<0){
zzcompete.chosencamps.push(m0);
}
else{
}}
function U5(m0){
if(zzIndexOfList(zzcompete.chosencamps,m0)<0){
zzcompete.bannedcamps.push(m0);
}
else{
}}
function N6(b8,b2){
for(var ii=0;ii<b8.length;ii++){
m0=b8[ii];
if(m0!=b2){
if(zzIndexOfList(zzcompete.bannedcamps,m0)<0){
U5(m0);
if(typeof zzcompete.parent2camps[m0]!='undefined'){
for(var jj=0;jj<zzcompete.parent2camps[m0].length;jj++){
U5(zzcompete.parent2camps[m0][jj]);
}}}}}}
var y6;
function F7(b2){
if(y6<5){
y6++;
N8(b2);
N6(zzcompete.cat2camps[cat],b2);
for(var jj in zzcompete.camp2cats[b2]){
cat2=zzcompete.camp2cats[b2][jj];
N6(zzcompete.cat2camps[cat2],b2);
}
for(var k8 in zzcompete.parent2camps){
if(zzIndexOfList(zzcompete.parent2camps[k8],b2)>=0){
F7(k8);
}}}
else{
}}
function zzcompute_compete(){
if(typeof zzcompete!='undefined'){
var zzshufflecats=zzshuffle(zzcompete.allcats);var ii;
if(!zzcompete.chosencamps)zzcompete.chosencamps=[];
if(!zzcompete.chosenads)zzcompete.chosenads=[];
if(!zzcompete.chosencomp)zzcompete.chosencomp='';
zzcompete.bannedcamps=[];
zzcompete.chosencampstr='';
zzcompete.chosenadsstr='';
zzcompete.processedcats=[];
for(ii=0;ii<zzshufflecats.length;ii++){
cat=zzshufflecats[ii];
if(zzIndexOfList(zzcompete.processedcats,cat)>=0){
continue;
}
zzcompete.processedcats.push(cat);
var g10=zzcompete.cat2camps[cat].length;var rnd=zzrnd(zzcompete.cat2camps[cat].length);var b2=0;
while(g10-->0){
var f7=zzcompete.cat2camps[cat][rnd];
if(zzIndexOfList(zzcompete.bannedcamps,f7)<0 
&&zzIndexOfList(zzcompete.chosencamps,f7)<0){
b2=f7;
break;
}
else{
rnd=(rnd+1)% zzcompete.cat2camps[cat].length
}}
if(b2){
y6=0;
F7(b2);
}
else{
}}
if(zzcompete.chosencamps.length>0){
zzcompete.chosencampstr=zzcompete.chosencamps.join("~");
}
if(zzcompete.compcamps.length>0){
var v7=0;
while(!v7){
var rnd=zzrnd(zzcompete.campcount);
if(rnd<zzcompete.compcamps.length){
if(zzIndexOfList(zzcompete.bannedcamps,zzcompete.compcamps[rnd])<0){
zzcompete.chosencomp=zzcompete.compcamps[rnd];
v7=1;
}}
else{
break;
}}
for(var m0 in zzcompete.compcamps){
if(m0!=zzcompete.chosencomp){
U5(m0);
}}}
var y3={};
y3[0]=99999999;
for(var m0 in zzcompete.exads){
var rnd,tag,last_used_tag;
if(zzIndexOfList(zzcompete.bannedcamps,m0)>=0){
continue;
}
var rnd=zzrnd(zzcompete.exads[m0].length);var g9=zzcompete.exads[m0].length;var b7=-1;
tag=last_used_tag=0;
while(g9-->0){
var d10=zzcompete.exads[m0][rnd];
tag=d10.replace(/ad[0-9]+/i,'');
if((typeof y3[tag])=='undefined'){
last_used_tag=tag;
b7=rnd;
}
else if(y3[last_used_tag]>y3[tag]){
last_used_tag=tag;
b7=rnd;
}
else{
}
rnd=(rnd+1)% zzcompete.exads[m0].length;
}
if(typeof y3[last_used_tag]=='undefined'){
y3[last_used_tag]=1;
}
else{
y3[last_used_tag]++;
}
zzcompete.chosenads.push(zzcompete.exads[m0][b7]);
}
if(zzcompete.chosenads.length>0){
zzcompete.chosenadstr=zzcompete.chosenads.join("~");
}}}
zzcompute_compete();
