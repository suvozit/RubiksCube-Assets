var _msdn = [ ["default.aspx",'1175',0.1593],["library",'1176',0.24],["ie",'1177',0.081],["netframework",'1178',0.1593],["windowsazure",'1179',0.24],["magazine",'1180',0.1593], ["office",'1181',0.24],["sharepoint",'1183',0.24],["sqlserver",'1184',0.24],["subscriptions",'1185',0.1593],["vbasic",'1186',0.081], ["vcsharp",'1187',0.081],["visualc",'1188',0.081],["vstudio",'1189',0.081],["windows",'1190',0.081]  ];
var _technet = [ ["default.aspx",'1219',0.0513],["library",'1192',0.0513],["windowsserver",'1194',0.0513],["forefront",'1011',0.3],["office",'1195',0.0513], ["sharepoint",'1196',0.3],["sqlserver",'1197',0.3],["systemcenter",'1198',0.0513],["windows",'1199',0.0028],["scriptcenter",'1200',0.0513],["security",'1202',0.0513], ["sysinternals",'1203',0.0028],["virtualization",'1205',0.3],["subscriptions",'1206',0.0513],["magazine",'623',0.0513],["ie",'1220',0.3],["exchange",'1221',0.3],["edge",'1222',0.0513]  ];
var SR_url = window.location.toString().toLowerCase();
var SR_url_stripped = SR_url.split("?");
var _Freq="See deployment report. ",_Site="See deployment report. ",srchMSForumIroot="",_wtsp="",_centerW=90;_networkW=10;_halt=false;
if(document.getElementsByName('Search.MSForums.Iroot')[0] && document.getElementsByName('Search.MSForums.Iroot')[0].getAttribute('content') != null){
		srchMSForumIroot = document.getElementsByName('Search.MSForums.Iroot')[0].getAttribute('content');
}
if(typeof(wtsp)&& typeof(wtsp)!='undefined'){ _wtsp=wtsp.toLowerCase(); if(/_technet_library_windowsserver/i.test(_wtsp)){_wtsp="_technet_library_windowsserver_";} };
var _raw_params = 'Search.MSForums.Iroot='+srchMSForumIroot+"&wtsp="+ _wtsp;

if(SR_url_stripped[0].search('msdn.microsoft.com') != -1){
	setSiteFreq("http://msdn.microsoft.com/en-us/", _msdn);//MSDN center survey check
	checkWTSP();
}else if(SR_url_stripped[0].search('technet.microsoft.com') != -1){
	setSiteFreq("http://technet.microsoft.com/en-us/", _technet);//TechNet center survey check
	checkWTSP();
}
function setSiteFreq(_url, _array){
	for(i=0; i< _array.length; i++){
		if(SR_url.search(_url + _array[i][0].toString().toLowerCase()) != -1){	
			_Site = _array[i][1];
			_Freq = _array[i][2];
			break;
		}
	}
}
function checkWTSP(){
	if(_Site == '1176'){
		if(!(_wtsp=="msdnlib_webdev" || _wtsp=="msdnlib_devtools_lang" || _wtsp=="windowsazure" || _wtsp=="_msdn_library_sqlserver_" || _wtsp=="_msdnlib_w32_com" || _wtsp=="msdnlib_w32_com")){
			_halt=true; _centerW=0; _networkW=100; _Freq=0.021;//reset freq for network study(site=72)
			//alert("WTSP codes invalid: centerWeight="+_centerW+"; NetworkWeight="+_networkW);
		}
		if(_wtsp=="msdnlib_w32_com"){
			_Freq=0.081;
		}else if(_wtsp=="windowsazure" || _wtsp=="_msdn_library_sqlserver_"){
			_Freq=0.24;
		}else if(_wtsp=="msdnlib_webdev" || _wtsp=="msdnlib_devtools_lang"){
			_Freq=0.0038;
		}//Default freq is set in _msdn[] array above
	}else if(_Site=='1192'){
		if(!(_wtsp=="_technet_library_windowsserver_" || _wtsp=="_technet_prodtechnol_office_" || _wtsp=="_technet_library_sqlserver_" || _wtsp=="_sto_technet_systemcenter_" || _wtsp=="_technet_library_win7_" || _wtsp=="scriptcenter_technet" || _wtsp=="_technet_library_security_" || _wtsp=="_technet_library_ie_")){	
				_halt=true; _centerW=0; _networkW=100; _Freq=0.07;//reset freq for network study(site=74)
				//alert("WTSP codes invalid: centerWeight="+_centerW+"; NetworkWeight="+_networkW);
		}
		if(_wtsp=="_technet_library_win7_"){
			_Freq=0.0028;
		}else if(_wtsp=="_technet_library_ie_" || _wtsp=="_technet_library_sqlserver_"){
			_Freq=0.3;
		}//Default is 1232 set in _technet[] array above
	}
}
var _c_halt = true;
function _set_SessionCookie(flag)
{	
  var c = 'srflag=' + flag
  	    	+ '; path=/'
   			 	+ '; domain=.microsoft.com';
	document.cookie = c;	
}

if(qI_loaded==true){
	var tempCookie = document.cookie.toString();
	var SR_ref = document.referrer.toString().toLowerCase();
	var SR_ref_stripped = SR_ref.split("?");
 	if(tempCookie.indexOf("srflag") != -1 || SR_ref_stripped[0].search('careers\\.microsoft\\.com/careers/') != -1){
			_c_halt = false;		
	}else{
		_set_SessionCookie(1);
	}
}
//if(!_halt){alert("Site=" + _Site + "\n" +_raw_params + "\nFreq: " + _Freq);}
COMSCORE.SiteRecruit.Broker.config={version:"4.6.3",testMode:false,cookie:{name:"msresearch",path:"/",domain:".microsoft.com",duration:90,rapidDuration:0,expireDate:""},prefixUrl:"",mapping:[{m:"//careers\\.microsoft\\.com/careers/en/us",c:"inv_c_MS-Careers-qInvite-US.js",f:0.5,p:0,halt:_c_halt},{m:"//careers\\.microsoft\\.com/careers/en/gb",c:"inv_c_MS-Careers-qInvite-GB.js",f:0.5,p:0,halt:_c_halt},{m:"//careers\\.microsoft\\.com/careers/en/gbl",c:"inv_c_MS-Careers-qInvite-GBL.js",f:0.5,p:1,halt:_c_halt},{m:"//careers\\.microsoft\\.com/careers/en/ie",c:"inv_c_MS-Careers-qInvite-IE.js",f:0.5,p:0,halt:_c_halt},{m:"//careers\\.microsoft\\.com/careers/en/in",c:"inv_c_MS-Careers-qInvite-IN.js",f:0.5,p:0,halt:_c_halt},{m:"//careers\\.microsoft\\.com/careers/zh-cn/cn",c:"inv_c_MS-Careers-qInvite-ZH-CN.js",f:0.5,p:0,halt:_c_halt},{m:"(code\\.msdn\\.microsoft\\.com|cpapp02)",c:"inv_c_CODE-p26386365_661-p15808382mt.js",f:0.021,p:0},{m:"(gallery\\.msdn\\.microsoft)[\\w\\.-]+/ScriptJunkie",c:"inv_c_GA-MSDN-p77737117-1210.js",f:0.021,p:0},{m:"(gallery\\.technet\\.microsoft)[\\w\\.-]+/",c:"inv_c_GA-TN-p77737117-1212.js",f:0.07,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/de-de/",c:"inv_c_MSDN-p15466742-DE-DE.js",f:0.016,p:1},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-au",c:"inv_c_MSDN-p15466742-en-au.js",f:0.5,p:1},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/en-us/((default\\.aspx)|(windows/)|(library|ie|netframework|windowsazure|magazine|office|sharepoint|sqlserver|subscriptions|vbasic|vcsharp|visualc|vstudio))",c:"inv_c_MSDN-p77596864_TIER5.js",f:_Freq,p:2,halt:_halt},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/fr-fr/",c:"inv_c_MSDN-p15466742-fr-fr.js",f:0.017,p:0},{m:"/(sr-msdn|msdnstage|msdntest|msdnlive|msdn\\.microsoft)[\\w\\.-]+/ja-jp/",c:"inv_c_MSDN-p15466742-JA.js",f:0.0012,p:0},{m:"(.*?social\\.msdn\\.microsoft)[\\w\\.-/]+/Forums/en-(us|US)",c:"inv_c_SC-MSDN-p77596864-p77737117-Tier1.js",f:0.1593,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"netframework"}],cookie:[]}},{m:"(.*?social\\.msdn\\.microsoft)[\\w\\.-/]+/Forums/en-(us|US)",c:"inv_c_SC-MSDN-p77596864-p77737117-Tier2.js",f:0.081,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"ie|vbasic|vcsharp|visualc|vstudio|windows"}],cookie:[]}},{m:"(.*?social\\.msdn\\.microsoft)[\\w\\.-/]+/Forums/en-(us|US)",c:"inv_c_SC-MSDN-p77596864-p77737117-Tier3.js",f:0.24,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"windowsazure|office|sharepoint|sqlserver"}],cookie:[]}},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/Forums/en/",c:"inv_c_SC-TN-p77596864-1308.js",f:0.0513,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"scriptcenter|windowsserver"}],cookie:[]}},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/Forums/en/",c:"inv_c_SC-TN-p77596864-p77737117-1308.js",f:0.0028,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"windows"}],cookie:[]}},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/forums/en-(us|US)",c:"inv_c_SC-TN-p77596864-p77737117-TIER1.js",f:0.0513,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"windowsserver|office|systemcenter|scriptcenter"}],cookie:[]}},{m:"(.*?social\\.technet\\.microsoft|sr-technet)[\\w\\.-]+/forums/en-(us|US)",c:"inv_c_SC-TN-p77596864-p77737117-TIER2.js",f:0.3,p:1,prereqs:{content:[{"element":"meta","attrib":"content","attribValue":"forefront|sharepoint|sqlserver|exchange"}],cookie:[]}},{m:"(.*?social\\.technet\\.microsoft)[\\w\\.-]+/wiki",c:"inv_c_SC-TN-p77737117-1213.js",f:0.07,p:0},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/de-de/",c:"inv_c_TN-p15466742-p81712691-DE.js",f:0.01575,p:2},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-au",c:"inv_c_TN-p15466742-en-au.js",f:0.2,p:1},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/en-us/((default\\.aspx)|(windows/)|(library|windowsserver|forefront|office|sharepoint|sqlserver|systemcenter|scriptcenter|security|sysinternals|virtualization|subscriptions|magazine|ie|exchange|edge))",c:"inv_c_TechNet-p77596864.js",f:_Freq,p:2,halt:_halt},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/fr-fr/",c:"inv_c_TN-p15466742-p81712691-FR.js",f:0.014,p:2},{m:"/(sr-technet|tnstage|tnlive|tntest|technet\\.microsoft)[\\w\\.-]+/ja-jp",c:"inv_c_TECHNET-p15466742-p81712691-JA.js",f:0.0033,p:1},{m:"(visualstudiogallery\\.msdn\\.microsoft)[\\w\\.-]+/",c:"inv_c_GA-MSDN-p77737117-1211.js",f:0.021,p:0}]};
COMSCORE.SiteRecruit.Broker.run();