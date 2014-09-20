Type.registerNamespace('CodePlex');

var UpdateProgress_Hide;

// UpdateProgress Singleton
CodePlex.UpdateProgress=new function(){
    var _this, _ie6, _ff, _rootEl, _panel, _clientID, _resizeTimer, _disabledControls;
    var _manager;
    this.initialize=function(clientID){
        _this=this;
        _manager = Sys.WebForms.PageRequestManager.getInstance();
        _manager.add_endRequest(onEndRequest);
        _disabledControls = [];
        _clientID=clientID;
        _ff=Sys.Browser.name=='Firefox'||Sys.Browser.name=='Mozilla';
        _ie6=(Sys.Browser.name=="Microsoft Internet Explorer"&&Sys.Browser.version<7);
        _rootEl=!_ie6&&typeof(document.documentElement.scrollLeft)!="undefined"?document.documentElement:document.body;
        Sys.UI._UpdateProgress.prototype._startRequest=getDelegate(this,updateProgressPanel,[Sys.UI._UpdateProgress.prototype._startRequest]);
        Sys.UI._UpdateProgress.prototype._handleEndRequest=getDelegate(this,resetProgressPanel,[Sys.UI._UpdateProgress.prototype._handleEndRequest]);
        if(ensurePanel()){
            registerEvents();
            updateProgressPanel.apply(_panel,[null]);
        }
    }
    
    this.dispose=dispose;
    this.show=show;
    this.reset=resetProgressPanel;
    this.displayPanelAndDisableControls = displayPanelAndDisableControls;
    this.hide = hide;
    this.showWithCustomText=showWithCustomText;
    
    // protected exposed
    
    function onEndRequest(sender, args){
        hide();
        for(var i=0;i<_disabledControls.length;i++){
            if(_disabledControls[i]){
                if(_disabledControls[i].disabled)_disabledControls[i].disabled=false;
                var saveClick=_disabledControls[i].saveClick;
                if(saveClick){
                    _disabledControls[i].onclick=saveClick;
                    _disabledControls[i].saveClick=null;
                }
            }
        }
    } 
    
    
    function displayPanelAndDisableControls(text)
    {
        setUpdateProgressText(text);
        show(true);
        
        //disable the variable amount of controls passed in
        for(var i = 1; i < arguments.length; i++)
        {
            try
            {
                if(arguments[i]) 
                {
                    arguments[i].disabled = true;
                    if(arguments[i].onclick){
                        arguments[i].saveClick=arguments[i].onclick;
                        arguments[i].onclick=function(){return false;};
                    }
                    _disabledControls[i-1] = arguments[i];
                }
            }
            catch(err)
            {
            
            }
        }
        
    }
    
    // Hide update progess and restore default text
    function hide()
    {
        setUpdateProgressText("Updating...");
        show(false);
    }
    
    function setUpdateProgressText(text)
    {
        $get('UpdateProgressText').innerHTML = text;
    }
    
    
    function show(visible){
        updateProgressPanel();
        
        visibleStyle = 'visible';
        if(!visible) visibleStyle = 'hidden';
        
        if(ensurePanel()) _panel.style.visibility = visibleStyle;
    }
    
    function showWithCustomText(visible, text){
        setUpdateProgressText(text);
        show(visible);
    }
    
    function dispose(){
        if(_resizeTimer)clearTimeout(_resizeTimer);
        registerEvents(true);
        CodePlex.UpdateProgress=_this.constructor; 
        // or shall we completely snuff our own global reference? 
        // CodePlex.UpdateProgress=null;
        _disabledControls = [];
        _manager = null;
        _this=_ie6=_ff=_rootEl=_panel=_clientID=_resizeTimer=null;
    }

    //protected methods
    function ensurePanel(){
        if(!_panel)_panel=$get(_clientID);
        return !!_panel;
    }

    
    function updateProgressPanel(callback, sender, args){
        if(ensurePanel()){
            if(!_panel)return;
            var root=document.documentElement;
            var dims=[((root.offsetWidth)/2)+root.scrollLeft,((root.offsetHeight)/2)+root.scrollTop];
            _panel.style.left=Math.round(dims[0])+"px";
            _panel.style.top=Math.round(dims[1])+"px";
        }
        fireCallback(callback, sender, args);
    }
    function resetProgressPanel(callback,force){
        hide();
        fireCallback(callback);
        if(!ensurePanel())return;
    }
    function getDelegate(obj,fnc,args){
        return function(){       
            for(var i=0; i<arguments.length; i++) args[args.length] = arguments[i];
            if(fnc)return fnc.apply(obj,args);
        };
    }
    function fireCallback(callback){
        if(typeof(callback)!='function')return;
        var args = [];
        for(var i=1; i<arguments.length; i++) args[args.length] = arguments[i];
        if(ensurePanel())getDelegate(_panel,callback,args)();
    }
    function getChild(id,elt){
        if(!elt||!elt.nodeType)return null;
        for(var i=0;i<elt.childNodes.length;i++){
            if(elt.childNodes[i].id==id)return elt.childNodes[i];
            var child=getChild(id,elt.childNodes[i]);
            if(child)return child;
        }
        return null;
    }
    function registerEvents(disposing){
        var $handler=!disposing?$addHandler:$removeHandler;
        $handler(window,'unload',dispose);
        $handler(window,'scroll',scrollHandler);
        $handler(document,'keydown',keyHandler);
    }
    
    // events
    function showHandler(e){
        if(UpdateProgress_Hide)
        {
            UpdateProgress_Hide = false;
            return;
        }
        if(typeof(Page_IsValid)=='undefined'||Page_IsValid)
            show(true);
    }
    function scrollHandler(e){
        if(!ensurePanel()||_panel.style.visibility == 'hidden') return;
        updateProgressPanel.apply(_panel,[null]);
    }
    function resizeHandler(e){
        if(_resizeTimer)clearTimeout(_resizeTimer);
        _resizeTimer=setTimeout(resetProgressPanel,1);
    }
    function keyHandler(e){
        if(ensurePanel()&&_panel.style.visibility == 'visible'){
            if(e.preventDefault)e.preventDefault();
            if(e.stopPropagation)e.stopPropagation();
            return e.returnValue=false;
        }
    }
};
