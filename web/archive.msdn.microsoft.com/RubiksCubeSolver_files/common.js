var canvasBounced;

//called EVERY full or partial postback
function masterResourcesLoaded(){
    canvasBounced = false;
    
    if(typeof(SmartDate_Load)=='function') SmartDate_Load();

    if(typeof(AjaxControlToolkit)!='undefined'&&AjaxControlToolkit.ModalPopupBehavior&&!AjaxControlToolkit.ModalPopupBehavior.prototype.SAVEDSHOW){
        AjaxControlToolkit.ModalPopupBehavior.prototype.SAVEDSHOW=AjaxControlToolkit.ModalPopupBehavior.prototype.show;
        AjaxControlToolkit.ModalPopupBehavior.prototype.show=AjaxControlToolkitModalPopupBehaviorshowOverride;
        AjaxControlToolkit.ModalPopupBehavior.prototype.SAVEDSCROLL=AjaxControlToolkit.ModalPopupBehavior.prototype._onLayout;
        AjaxControlToolkit.ModalPopupBehavior.prototype._onLayout=AjaxControlToolkitModalPopupBehaviorOnScrollOverride;
    }
   
    fixWikiContentWidth();
}

// only called once per full postback, because it h8s us. (is body onload getting overwritten? no man knows.)
function masterLoad(){
    if(!self.logoImageLoaded)document.body.className+=' NoImages';
    else logoImageLoaded=null;
    CodePlex.UpdateProgress.initialize('UpdateProgressPanel');
    Sys.Net.WebRequestManager.add_completedRequest(masterErrorHandler);
    Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function(){ masterResourcesLoaded(); });
}

function masterErrorHandler(executor,args){
    if (executor.get_responseAvailable()&&executor.get_statusCode()!= 200) {
        var redirectUrl = executor.getResponseHeader("ErrorRedirect");
        if(redirectUrl)location.href = redirectUrl;
    }
}

function addCanvasBounceForFF(){
    if(CodePlex.UI.isFF){
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function(){ canvasBounce(); });
    }
}

function canvasBounce(){
    if(!canvasBounced) {
        CodePlex.UI.bounceFullHeightElement($get('Canvas'));
        canvasBounced = true;
    }
}

function fixWidth(sourceDiv,forceRun){
    if(!forceRun&&!CodePlex.UI.isIE)return;
    var skipMap={html:1,body:1,form:1,tbody:!forceRun,table:!forceRun,td:!forceRun};
    var canvas=$get('CanvasContent');
    var mainContent=(sourceDiv||canvas);
    while(mainContent&&mainContent.tagName){
        if(!skipMap[mainContent.tagName.toLowerCase()]&&mainContent.scrollWidth>(mainContent.clientWidth||mainContent.offsetWidth)){
            mainContent.style.width=mainContent.scrollWidth+'px';
        }
        mainContent=mainContent.parentNode;
    }
    if(!sourceDiv){
        if(CodePlex.UI.isOpera&&document.body.offsetHeight>canvas.scrollHeight){
            canvas.style.height=document.body.offsetHeight+'px';
        }
        CodePlex.UpdateProgress.reset();
    }
}

function fixWikiContentWidth(){
    var mainContents = getChildNodes(document.body, null, 'className', 'WikiContent', true);
    if(CodePlex.UI.isIE) {
        for(i=0;i<mainContents.length;i++)fixWidth(mainContents[i],true);
            fixWidth();
    }
    else {
        for(i=0;i<mainContents.length;i++) 
            mainContents[i].style.width= mainContents[i].scrollWidth+'px';
        if(mainContents.length > 0) 
            canvasBounce();
    }
}

function getResizeHandler(e){
    var _timer=0;
    return function(){
        if(_timer)clearTimeout(_timer);
        _timer=setTimeout(fixWidth,1);
    }
}


function EnterKeyFormSubmitHandler(triggeredBy, event, btnIdToSubmit) 
{
    if(event.keyCode == 13) // Handle Enter Key
    {
        event.returnValue = false;
        event.Cancel = true;
        document.getElementById(getFullIdForControl(triggeredBy, btnIdToSubmit)).click();
    }
}

function getElementByClass(tagCollection, className)
{
    var tagCount = tagCollection.length;
    for (i=0; i<tagCount; i++)
    {
        if (tagCollection[i].className==className)
        {
            return tagCollection[i];
        }
    }
    return null;
}

function expandAndCollapseDivs(divClass, divId, expandButtonClass, collapseButtonClass)
{
	var allTags = document.all ? document.all : document.getElementsByTagName("*");
	var divElement = getElementByClass(allTags, divClass);    
    var displayState = getCookie(divId);

    if (displayState == "expanded")
    {
        var expandButton = getElementByClass(allTags, expandButtonClass);
        displayContentDisplay(expandButton, "collapseButton", divId);
    }	
    else
    {
        var collapseButton = getElementByClass(allTags, collapseButtonClass);
        hideContentDisplay(collapseButton, "expandButton", divId);       
    }
}

function displayAllContentInlineDisplay(divClassToShow, divClassToHide, imgClassToShow, imgClassToHide, displayLink, hideLink)
{
    var divs = document.getElementsByTagName("div");
    var imgs = document.getElementsByTagName("img");
    
    var divsToShow = [], divsToHide = [];
    var imgsToShow = [], imgsToHide = [];
    
    for (var i = 0; i < divs.length; i++)
    {
        if (divs[i].className == divClassToShow)
            divsToShow.push(divs[i]);
        else if (divs[i].className == divClassToHide)
            divsToHide.push(divs[i]);
    }
    
    for (var i = 0; i < imgs.length; i++)
    {
        if (imgs[i].className == imgClassToShow)
            imgsToShow.push(imgs[i]);
        else if (imgs[i].className == imgClassToHide)
            imgsToHide.push(imgs[i]);
    }
    
    for (var i = 0; i < divsToShow.length; i++)
    {
        divsToShow[i].style.display = "inline";
    }
    
    for (var i = 0; i < divsToHide.length; i++)
    {
        divsToHide[i].style.display = "none";
    }
    
    for (var i = 0; i < imgsToShow.length; i++)
    {
        imgsToShow[i].style.display = "inline";
    }
    
    for (var i = 0; i < imgsToHide.length; i++)
    {
        imgsToHide[i].style.display = "none";
    }

    var displayLinkAnchor = document.getElementById(displayLink);
    if(displayLinkAnchor)
        displayLinkAnchor.style.display = "inline";
    var hideLinkAnchor = document.getElementById(hideLink);
    if(hideLinkAnchor)
        hideLinkAnchor.style.display = "none";

}

function getFullIdForControl(triggeredBy, controlId) 
{
    var fullId = triggeredBy.id.substring(0, triggeredBy.id.lastIndexOf('_')+1) + controlId;
    return fullId;
}

function displayContentDisplay(triggeredBy, buttonToDisplay, contentDiv) 
{
    var contentSection = document.getElementById(getFullIdForControl(triggeredBy, contentDiv));    
    var imageButtonToDisplay = document.getElementById(getFullIdForControl(triggeredBy, buttonToDisplay));
        
    triggeredBy.style.display = "none";
    imageButtonToDisplay.style.display = "inline";
    contentSection.style.display = "block";
    
    setCookie(contentDiv, "expanded");        
}

function hideContentDisplay(triggeredBy, buttonToDisplay, contentDiv)
{
    var contentSection = document.getElementById(getFullIdForControl(triggeredBy, contentDiv));
    var imageButtonToDisplay = document.getElementById(getFullIdForControl(triggeredBy, buttonToDisplay));

    triggeredBy.style.display = "none";
    imageButtonToDisplay.style.display = "inline";
    contentSection.style.display = "none";
    setCookie(contentDiv, "collapsed");        
}

function displayContentInlineDisplay(triggeredBy, buttonToDisplay, contentDiv, hideContentDiv) 
{
    var contentSection = document.getElementById(getFullIdForControl(triggeredBy, contentDiv));    
    var hideContentSection = document.getElementById(getFullIdForControl(triggeredBy, hideContentDiv));    
    var imageButtonToDisplay = document.getElementById(getFullIdForControl(triggeredBy, buttonToDisplay));
        
    triggeredBy.style.display = "none";
    imageButtonToDisplay.style.display = "inline";
    contentSection.style.display = "inline";
    hideContentSection.style.display = "none";
}



function setCookie(name, value, expires, path, domain, secure)
{
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name)
{
    var start = document.cookie.indexOf( name + "=" );
    var len = start + name.length + 1;
    if ( ( !start ) &&
         ( name != document.cookie.substring( 0, name.length ) ) )
    {
       return null;
    }
    if ( start == -1 ) return null;
    var end = document.cookie.indexOf( ";", len );
    if ( end == -1 ) end = document.cookie.length;
    return unescape( document.cookie.substring( len, end ) );
}
	
function deleteCookie(name, path, domain) 
{
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
function getChildNodes(parentDiv,tagName,propertyName,propertyValue,fuzzyMatch){
    var ret=[];
    if(parentDiv&&parentDiv.childNodes){
        for(var i=0;i<parentDiv.childNodes.length;i++){
            if(parentDiv.childNodes[i].nodeType!=1)continue;
            if((!tagName||parentDiv.childNodes[i].tagName.toLowerCase()==tagName.toLowerCase())&&(!propertyName||(!fuzzyMatch&&parentDiv.childNodes[i][propertyName]==propertyValue)||(fuzzyMatch&&parentDiv.childNodes[i][propertyName]&&parentDiv.childNodes[i][propertyName].indexOf(propertyValue)>-1)))ret[ret.length]=parentDiv.childNodes[i];
            else ret=ret.concat(getChildNodes(parentDiv.childNodes[i],tagName,propertyName,propertyValue,fuzzyMatch));
        }
    }
    return ret;
}
function getParentNode(childNode,tagName,propertyName,propertyValue,fuzzyMatch){
    var ret=null;
    var tmp=childNode.parentNode;
    while(tmp){
        if((!tagName||tmp.tagName.toLowerCase()==tagName.toLowerCase())&&(!propertyName||(!fuzzyMatch&&tmp[propertyName]==propertyValue)||(fuzzyMatch&&tmp[propertyName]&&tmp[propertyName].indexOf(propertyValue)>-1))){
            ret=tmp;
            break;
        }
        tmp=tmp.parentNode;
    }
    return ret;
}
function createNode(parentNode,attributes,tagName){
    var elt=document.createElement(tagName?tagName:'div');
    if(attributes)for(var x in attributes)elt[x]=attributes[x];
    if(parentNode)parentNode.appendChild(elt);
    return elt;
}

// AJAX LIBRARY CORRECTIONS

if(typeof(WebForm_FireDefaultButton)!='undefined'){
    if(!self.CodePlex_Preserve_WebForm_FireDefaultButton)self.CodePlex_Preserve_WebForm_FireDefaultButton = WebForm_FireDefaultButton;
    WebForm_FireDefaultButton=function(event, target) {
        if(!event.srcElement&&event.target)event.srcElement=event.target;
        return CodePlex_Preserve_WebForm_FireDefaultButton(event, target);
    }
}

Type.registerNamespace("CodePlex");
CodePlex.UI=new function(){
    this.isIE=document.documentElement.className.indexOf('IE')>-1;
    this.isIE6=document.documentElement.className.indexOf('IE6')>-1;
    this.isIE7=document.documentElement.className.indexOf('IE7')>-1;
    this.isFF=document.documentElement.className.indexOf('FF')>-1;
    this.isSafari=document.documentElement.className.indexOf('Safari')>-1;
    this.isOpera=document.documentElement.className.indexOf('Opera')>-1;
    this.Browser=document.documentElement.className.replace(/IE /,'');
    
    this.Point = function(x, y) {
        this.x = x;
        this.y = y;
    };
    this.getElementPosition = function(element) {
        var x = 0;
        var y = 0;
        while (element.offsetParent) {
            x += element.offsetLeft;
            y += element.offsetTop;
            
            element = element.offsetParent;
        }
        
        x += element.offsetLeft;
        y += element.offsetTop;
        
        return new CodePlex.UI.Point(x, y);
    }

    this.focus = function(elt) {
        if(!elt)return false;
        try{elt.focus();return true;}catch(e){return false;}
    }
    
    var _babel = null;
    this.encodeHtml = function(value, isAttribute) {
        if (!_babel) _babel = document.createElement("div");
        _babel.innerHTML = "";
        _babel.appendChild(document.createTextNode(value));
        return (isAttribute ? _babel.innerHTML.split('"').join("&quot;") : _babel.innerHTML).split(' ').join("&nbsp;");
    }
    
    var _bounceTimer=0;
    this.bounceElement=function(elt,callback){
        if(!elt)return;
        var width=elt.style.width;
        elt.style.width=(width!='auto'?'auto':'100%');
        if(_bounceTimer)clearTimeout(_bounceTimer);
        _bounceTimer=setTimeout(function(){
            elt.style.width=width;
            if(typeof(callback)=='function')callback();
        },1);
    }
    this.bounceFullHeightElement=function(elt,callback){
        if(!elt)return;
        elt.style.height='99.9%';
        if(_bounceTimer)clearTimeout(_bounceTimer);
        _bounceTimer=setTimeout(function(){
            elt.style.height='100%';
            if(typeof(callback)=='function')callback();
        },1);
    }
};

// AJAX JS LIBRARY EXTENSIONS
Function.createDelegateWithParameters=function(instance,method){
    var args=[];
    for(var i=2;i<arguments.length;i++)args.push(arguments[i]);
    return function(){
        for(var i=0;i<arguments.length;i++)args.push(arguments[i]);
        return method.apply(instance,args);
    }
}
function AjaxControlToolkitModalPopupBehaviorshowOverride(blanko,ending){
    if(CodePlex.UI.isIE6){
        this._layoutBackgroundElement();
        if(!ending)return setTimeout(Function.createDelegateWithParameters(this,AjaxControlToolkitModalPopupBehaviorshowOverride,null,true),1);
    }
    this.SAVEDSHOW();
    if(ending){
        setTimeout(Function.createDelegate(this,this._layoutBackgroundElement),50);
    }
}
function AjaxControlToolkitModalPopupBehaviorOnScrollOverride(e,ending){
    if(!ending&&CodePlex.UI.isIE6){
        if(AjaxControlToolkitModalPopupBehaviorOnScrollOverride.Timer)clearTimeout(AjaxControlToolkitModalPopupBehaviorOnScrollOverride.Timer);
        AjaxControlToolkitModalPopupBehaviorOnScrollOverride.Timer=setTimeout(Function.createDelegateWithParameters(this,AjaxControlToolkitModalPopupBehaviorOnScrollOverride,e,true),250);
    }
    this.SAVEDSCROLL(e);
    if(!CodePlex.UI.isIE6)return;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(this._backgroundElement.offsetTop>scrollTop){
        this._backgroundElement.style.top=scrollTop+"px";    
        this._backgroundElement.style.height=document.documentElement.clientHeight+"px";
    }
}

if(typeof(originalRegularExpressionValidatorEvaluateIsValid) == 'undefined' &&
   typeof(RegularExpressionValidatorEvaluateIsValid) == 'function')
{
    originalRegularExpressionValidatorEvaluateIsValid = RegularExpressionValidatorEvaluateIsValid;
    RegularExpressionValidatorEvaluateIsValid = 
        function (val) {
            if(val.invalidinIEifonlywhitespace)
            {
                if(val.invalidinIEifonlywhitespace == 'true')
                {
                    var value = ValidatorGetValue(val.controltovalidate);
                    if(value.replace(/\s*/g,'').length == 0 && value.length > 0) return false;
                    return originalRegularExpressionValidatorEvaluateIsValid(val);
                }
            }
            
            return originalRegularExpressionValidatorEvaluateIsValid(val);
        }
}
