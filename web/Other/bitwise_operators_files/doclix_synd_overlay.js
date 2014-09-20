/*[AdSide/DOCLIX anchor ad unit: first tier]*/

if (typeof doclix_lib == 'undefined') {
	(function () {/*[load common script library v1.0]*/
		var d = document, gT = 'getElementsByTagName', cE = 'createElement', sA = 'setAttribute', aC = 'appendChild', js = d[cE]('script');
		js[sA]('type', 'text/javascript');
		js[sA]('async', 'async');
		js[sA]('charset', 'utf-8');
		js[sA]('src', 'http://ads.doclix.com/adserver/serve/js/doclix_lib.js');
		if (d[gT]('head').length > 0) {d[gT]('head')[0][aC](js);} else {d.body[aC](js);};
	})();
};

typeof document.ads_pub_ad_setup != 'undefined' ? doclix_setup_mode = true : doclix_setup_mode = false;

if (typeof _docix_service_anchor == 'undefined' || doclix_setup_mode) {

	if (typeof doclix_anchor == 'undefined' || doclix_setup_mode) {
	
		if (typeof doclix_demo_mode == 'undefined') doclix_demo_mode = false;
		if (typeof doclix_pause_mode == 'undefined') doclix_pause_mode = false;
		
		doclix_setup_mode && document.location.protocol == 'https:' ? doclix_anchor_domain = '/' : doclix_anchor_domain = 'http://ads.doclix.com/';
		
		(_docix_service_anchor = function () {
			try {
				doclix_lib.loaded = true;
				/*[continue]*/
				if (typeof doclix_pid == 'undefined') doclix_pid = 0;
				
				doclix_params_anchor = 'pid=' + doclix_pid;
				if (typeof doclix_cid_anchor != 'undefined') {
					doclix_params_anchor += '&codeId=' + doclix_cid_anchor;
				} else if (typeof doclix_cid != 'undefined') {
					doclix_params_anchor += '&codeId=' + doclix_cid;
				}
				doclix_params_anchor += '&scrw=' + screen.width;
				
				doclix_anchor = {
					no_flip_mode : (doclix_pid == 16441 || doclix_pid == 16755) ? true : false,
					_find_mouse: function (event) {
						doclix_anchor.mX = event.clientX;
						doclix_anchor.mY = event.clientY;
					},
					_next: function () {
						var d = document, dx_a = doclix_anchor, gT = 'getElementsByTagName', cE = 'createElement', sA = 'setAttribute', aC = 'appendChild', ef = d[cE]('script');
						ef[sA]('type', 'text/javascript');
						if (typeof doclix_ifrm_cnt != 'undefined') doclix_params_anchor += '&ifrm_ad=1';
						ef[sA]('src', '' + doclix_anchor_domain + 'adserver/serve/js/anchor_settings.jsp?' + doclix_params_anchor);
						ef[sA]('async', true);
						ef[sA]('charset', 'utf-8');
						if (d[gT]('head').length > 0) {
							d[gT]('head')[0][aC](ef);
						} else {
							d.body[aC](ef);
						}
					},
					info_html :	(function () {
						var html_str;
						if (doclix_lib.ua.is('IEold')) {
							html_str = '<iframe src="' + doclix_anchor_domain + 'resources/blank.html" scrolling="no" frameborder="0" height="240" width="300" style="position:absolute;z-index:-1;top:0px;left:0px;filter:alpha(opacity=0);"></iframe>';
						} else {
							html_str = '';
						}
						html_str += '<a id="doclix_anchor_info_x" href="javascript:void(0);" onclick="this.parentNode.style.display=\'none\';" title="Close ad info"></a>' +
									'<b>Paid Advertisement</b>' +
									'<br />' +
									'This is an ad paid for by an AdSide customer. AdSide serves pre-screened pay-per-click ads that meet the FTC\'s and this Publisher\'s ad guidelines. We strive to serve user friendly ads that maintain the site\'s editorial integrity. We welcome your feedback at <a href="mailto:feedback@adside.com">feedback@adside.com</a>.' +
									'<br />' +
									'<b>Publishers</b>: Learn about monetizing your web properties <a href="http://www.adside.com/adside/publisher.html" target="_blank">here</a>.' +
									'<br />' +
									'<b>Advertisers</b>: Learn about serving ads across this and other quality sites <a href="http://www.adside.com/adside/advertiser.html" target="_blank">here</a>.' +
									'<br />' +
									'<b>Users</b>: You may click on the [x] to stop the ads from displaying.';
						return html_str;														
						})(),
					setup: ''
				};
				/*[START]*/
				if (doclix_lib.cookie._read('doclix_anchor_ads') == null) {
					if (!/(iPod|iPhone|iPad)/.test(doclix_lib.ua)) {
						if (doclix_demo_mode && document.ads_pub_ad_setup) {
							doclix_anchor._next();
						} else if (doclix_lib.ua.has('IE')) {
							(function () {
								var tempNode = document.createElement('document:ready');
								try {
									tempNode.doScroll('left');
									doclix_anchor._next();
									tempNode = null;
								} catch (e) {
									setTimeout(arguments.callee, 0);
								}
							})();
						} else {
							/*[call database to continue]*/
							doclix_anchor._next();
						}
					} else {
						if (document.location.href.has('product_anchor.html')) alert('Sorry, the ANCHOR unit is not supported on the ' + doclix_lib.ua + ' at the moment.');
					}
				}
			} catch (e) {//alert(e.message);
				setTimeout(_docix_service_anchor, 0);
			}
		})();
	};
};
/*[end AdSide/DOCLIX anchor ad unit: first tier]*/
