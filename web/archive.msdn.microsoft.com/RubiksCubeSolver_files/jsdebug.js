var TaggingService=function() {
TaggingService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
TaggingService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return TaggingService._staticInstance.get_path();},
GetTagList:function(prefixText,count,succeededCallback, failedCallback, userContext) {
/// <param name="prefixText" type="String">System.String</param>
/// <param name="count" type="Number">System.Int32</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'GetTagList',false,{prefixText:prefixText,count:count},succeededCallback,failedCallback,userContext); },
GetTagAutoCompleteInfo:function(prefixText,count,succeededCallback, failedCallback, userContext) {
/// <param name="prefixText" type="String">System.String</param>
/// <param name="count" type="Number">System.Int32</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
return this._invoke(this._get_path(), 'GetTagAutoCompleteInfo',false,{prefixText:prefixText,count:count},succeededCallback,failedCallback,userContext); }}
TaggingService.registerClass('TaggingService',Sys.Net.WebServiceProxy);
TaggingService._staticInstance = new TaggingService();
TaggingService.set_path = function(value) {
TaggingService._staticInstance.set_path(value); }
TaggingService.get_path = function() { 
/// <value type="String" mayBeNull="true">The service url.</value>
return TaggingService._staticInstance.get_path();}
TaggingService.set_timeout = function(value) {
TaggingService._staticInstance.set_timeout(value); }
TaggingService.get_timeout = function() { 
/// <value type="Number">The service timeout.</value>
return TaggingService._staticInstance.get_timeout(); }
TaggingService.set_defaultUserContext = function(value) { 
TaggingService._staticInstance.set_defaultUserContext(value); }
TaggingService.get_defaultUserContext = function() { 
/// <value mayBeNull="true">The service default user context.</value>
return TaggingService._staticInstance.get_defaultUserContext(); }
TaggingService.set_defaultSucceededCallback = function(value) { 
 TaggingService._staticInstance.set_defaultSucceededCallback(value); }
TaggingService.get_defaultSucceededCallback = function() { 
/// <value type="Function" mayBeNull="true">The service default succeeded callback.</value>
return TaggingService._staticInstance.get_defaultSucceededCallback(); }
TaggingService.set_defaultFailedCallback = function(value) { 
TaggingService._staticInstance.set_defaultFailedCallback(value); }
TaggingService.get_defaultFailedCallback = function() { 
/// <value type="Function" mayBeNull="true">The service default failed callback.</value>
return TaggingService._staticInstance.get_defaultFailedCallback(); }
TaggingService.set_path("/Services/TaggingService.asmx");
TaggingService.GetTagList= function(prefixText,count,onSuccess,onFailed,userContext) {
/// <param name="prefixText" type="String">System.String</param>
/// <param name="count" type="Number">System.Int32</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
TaggingService._staticInstance.GetTagList(prefixText,count,onSuccess,onFailed,userContext); }
TaggingService.GetTagAutoCompleteInfo= function(prefixText,count,onSuccess,onFailed,userContext) {
/// <param name="prefixText" type="String">System.String</param>
/// <param name="count" type="Number">System.Int32</param>
/// <param name="succeededCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="failedCallback" type="Function" optional="true" mayBeNull="true"></param>
/// <param name="userContext" optional="true" mayBeNull="true"></param>
TaggingService._staticInstance.GetTagAutoCompleteInfo(prefixText,count,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
Type.registerNamespace('Microsoft.Foundation.Common.Domain');
if (typeof(Microsoft.Foundation.Common.Domain.TagAutoCompleteInfo) === 'undefined') {
Microsoft.Foundation.Common.Domain.TagAutoCompleteInfo=gtc("Microsoft.Foundation.Common.Domain.TagAutoCompleteInfo");
Microsoft.Foundation.Common.Domain.TagAutoCompleteInfo.registerClass('Microsoft.Foundation.Common.Domain.TagAutoCompleteInfo');
}
