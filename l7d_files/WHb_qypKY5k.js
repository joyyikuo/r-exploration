if (self.CavalryLogger) { CavalryLogger.start_js(["pVH9V"]); }

__d("DirectDebitCredentialStatus",[],(function(a,b,c,d,e,f){e.exports={INITED:73,PENDING:80,VERIFIED:86,CANCELED:67}}),null);
__d("AdsValidatorTests",["AppConstants.brands","ClientIDs","DirectDebitCredentialStatus","getObjectValues"],(function(a,b,c,d,e,f){__p&&__p();var g=b("AppConstants.brands").ACCOUNT_STATUS,h="CONFIRMED",i="PENDING",j=/^-?\d+$/,k=/[\f\n\r\t\v]/,l=/^[1-9]\d*$/,m=Date.parse("Jan 1, 1970"),n=Date.parse("March 21, 2100"),o=143,p=b("getObjectValues")(b("DirectDebitCredentialStatus")),q=b("getObjectValues")(g);function a(a){return{isValid:!!a,text:"must have non-zero length"}}function c(a){return{isValid:typeof a==="boolean",text:"must represent a boolean value"}}function d(a){return{isValid:a instanceof Array,text:"must represent a array value"}}function f(a,b){return{isValid:b.length>=a,text:"should contain at least "+a+" items"}}function r(a){return{isValid:a instanceof Object,text:"must represent a object value"}}function s(a,b){return{isValid:b.length===a,text:"string should be exactly "+a+" characters"}}function t(a,b){return{isValid:b.length>=a,text:"must be at least "+a+" characters"}}function u(a,b){return{isValid:b.length<=a,text:"must be at most "+a+" characters"}}function v(a,b){return{isValid:a.test(b),text:"must not contain invalid characters"}}function w(a){return{isValid:!k.test(a),text:"must not contain invalid whitespace characters like tab or return"}}function x(a){var b=parseFloat(a);return{isValid:!isNaN(b)&&b==a,text:"must represent a floating point number"}}function y(a){a=v(j,a);a.text="must represent an integer";return a}function z(a){return{isValid:a%1===0&&a>=0,text:"must be a positive integer or zero"}}function A(a){return{isValid:a%1===0&&a>0,text:"must be a positive integer"}}function B(a){return{isValid:a>m&&a<n,text:"must be in the valid timestamp range,"}}function C(a){return{isValid:B(a).isValid||a===0,text:"must be either in the valid timestamp range or is zero"}}function D(a){return{isValid:Object.prototype.toString.call(a)==="[object Date]",text:"must be a valid date"}}function E(a,b){b=b&&b.endTime;return{isValid:B(a).isValid&&typeof b==="number"&&a<=b,text:"need valid end time and start time cannot be later than end time"}}function F(a,b){b=b.startTime;return{isValid:B(a).isValid&&typeof b==="number"&&b<=a,text:"need valid start time and end time cannot be earlier than start time"}}function G(a){return{isValid:l.test(a),text:"must be a valid FBID"}}function H(a){return{isValid:a>=0&&a<=o,text:"must be a valid timezone id"}}function I(a,b){return{isValid:!a.validateProperties(b),text:"must be a valid object"}}function J(a,b){a=a.every(b.hasOwnProperty,b);return{isValid:a,text:"object must contain all given props"}}function K(a){return{isValid:G(a).isValid||!!b("ClientIDs").isExistingClientID(a),text:"must be a valid FBID or ClientID"}}function L(a,b){__p&&__p();var c=!0,d="";for(var e=0;e<b.length;e++){var f=b[e],g=a(f).text;d="each item "+typeof g==="string"?g:"";if(!a(f).isValid){c=!1;break}}return{isValid:c,text:d}}function M(a){return{isValid:!!(a===h||a===i),text:"must be a CONFIRMED or PENDING status"}}function N(a){return{isValid:q.indexOf(a)>=0,text:"must be a valid ad account status"}}function O(a){return{isValid:p.indexOf(a)>=0,text:"must be a valid direct debit credential status"}}function P(a,b){return{isValid:a.indexOf(b)>=0,text:"must be one of values in array"}}function Q(a){var b=!1,c=new RegExp("[^@]+@[^@]+$");a.match(c)&&(b=!0);return{isValid:b,text:"must be a valid email address"}}e.exports={isLengthyString:a,isExactLengthString:s,isAllValidCharacters:v,hasNoInvalidWhitespace:w,isFloatString:x,isIntegerString:y,isPositiveInteger:A,isPositiveOrZeroInteger:z,isMinLengthString:t,isMaxLengthString:u,isUnixTimestamp:B,isUnixTimestampOrZero:C,isDate:D,isValidStartTime:E,isValidEndTime:F,isBoolean:c,isValidJson:r,isValidArray:d,isMinLengthArray:f,isFBIDString:G,isValidTimeZoneID:H,isValidObject:I,hasProperties:J,isFBIDOrClientIDString:K,isValidCollection:L,isValidAssetStatus:M,isValidAccountStatus:N,isValidDirectDebitStatus:O,isInArray:P,isValidEmail:Q}}),null);
__d("BandicootSession",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.freeze({ACTIVE:"ACTIVE",INACTIVE:"INACTIVE",CLOSED:"CLOSED"}),h=10*60*1e3,i=14*24*60*60*1e3;function j(a){return Date.now()-a.lastUpdated}function a(a){return!!(typeof a==="object"&&a&&a.lastUpdated&&a.status)}function b(a){if(a.status===g.CLOSED)return!1;else if(a.status===g.INACTIVE&&j(a)>h)return!1;return!0}function c(a){return a.status===g.ACTIVE&&j(a)>h}function d(a){return j(a)>i}e.exports={Status:g,isValidSession:a,isTrackedSession:b,isOrphanSession:d,isCrashedSession:c}}),null);
__d("Bandicoot",["invariant","BandicootSession","FBLogger"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=5*1e3,i=h*2,j="Bandicoot:",k=b("BandicootSession").Status,l=b("BandicootSession").isValidSession,m=b("BandicootSession").isTrackedSession,n=b("BandicootSession").isCrashedSession,o=b("BandicootSession").isOrphanSession;function a(){__p&&__p();try{var a=window.localStorage;if(a){var c="__test"+Date.now();a.setItem(c,"");a.removeItem(c)}return a}catch(a){b("FBLogger")("bandicoot").warn("Local storage is full");return null}}var p=a();function c(a){this.$5=j+a,this.$4={},this.$1=this.$7.bind(this),this.sessionID=null,this.sessionStartTime=null,this.storage=p}c.prototype.getCrashTimeData=function(){var a=window.performance&&window.performance.memory||{},b=this.sessionStartTime;return{duration:b?Date.now()-b:0,tabs:Object.keys(this.$8()).length,jsHeapSizeLimit:a.jsHeapSizeLimit,totalJSHeapSize:a.totalJSHeapSize,usedJSHeapSize:a.usedJSHeapSize,elementsInDOM:document.getElementsByTagName("*").length,uri:window.location.href}};c.prototype.getLogTimeData=function(){return{userAgent:window.navigator.userAgent}};c.prototype.logCrash=function(a,c,d){Object.assign({sessionID:a},c,d),b("FBLogger")("bandicoot").warn("Session %s crashed at %s",a,d)};c.prototype.logBrowserUnsupported=function(){b("FBLogger")("bandicoot").warn("Browser not supported")};c.prototype.logTrackingError=function(){b("FBLogger")("bandicoot").warn("Failed to record data for current session")};c.prototype.startSession=function(){__p&&__p();if(!this.storage){this.logBrowserUnsupported();return}if(this.$2)return;this.sessionID||(this.sessionID=Math.random().toString(36).slice(2,9));this.sessionStartTime||(this.sessionStartTime=Date.now());this.$2=setInterval(function(){this.$9()}.bind(this),h);this.$9();document.addEventListener&&document.addEventListener("visibilitychange",this.$1);this.$10()};c.prototype.endSession=function(){__p&&__p();if(!this.storage)return;if(!this.$2)return;clearInterval(this.$2);this.$2=null;this.$3||this.$11({status:k.CLOSED});this.sessionID=null;this.sessionStartTime=null;document.removeEventListener&&document.removeEventListener("visibilitychange",this.$1)};c.prototype.logKnownCrashes=function(){__p&&__p();if(!this.storage)return;if(!this.$2){var a=this.$8();a=this.$12(a,function(a,b){if(n(a)){this.logCrash(b,a,this.getLogTimeData());return null}else return a}.bind(this));this.$13(a)}};c.prototype.$14=function(){var a=this.sessionID;a||g(0);return a};c.prototype.$9=function(){var a=this.$8();this.$15(a);a=this.$16(a);this.$13(a)};c.prototype.$15=function(a){var b=this.$14(),c=a[b]?a[b]:{};a[b]=babelHelpers["extends"]({},c,this.getCrashTimeData(),{lastUpdated:Date.now(),status:this.$17()})};c.prototype.$12=function(a,b){var c={};Object.keys(a).forEach(function(d){var e=a[d];if(l(e)&&m(e)&&!o(e)){e=b(e,d);e&&(c[d]=e)}});return c};c.prototype.$16=function(a){__p&&__p();return this.$12(a,function(a,b){__p&&__p();if(n(a)){var c=a.loggerReportTime||0;if(Date.now()-c>i)a.loggerReportTime=Date.now(),a.loggerReportSession=this.$14();else if(a.loggerReportSession==this.$14()){this.logCrash(b,a,this.getLogTimeData());this.$4[b]=!0;return null}}return a}.bind(this))};c.prototype.$8=function(a){a=a||this.$5;var c=this.storage.getItem(a)||"{}";try{c=JSON.parse(c)}catch(d){c={},this.storage.removeItem(a),b("FBLogger")("bandicoot").catching(d).warn("Invalid JSON data")}return c};c.prototype.$11=function(a){a.lastUpdated=Date.now();var b=this.$8(),c=this.sessionID;c&&b[c]&&(Object.assign(b[c],a),this.$13(b))};c.prototype.$13=function(a){a=JSON.stringify(a);try{this.storage.setItem(this.$5,a)}catch(d){a=this.$6;var c=Date.now();(!a||c>a+h)&&(this.logTrackingError(),this.$6=c);try{this.storage.removeItem(this.$5)}catch(a){this.$3=!0,this.endSession(),b("FBLogger")("bandicoot").catching(a).warn("Removing from storage failed")}}};c.prototype.$10=function(){for(var a=0;a<this.storage.length;++a){var b=this.storage.key(a);if(b.indexOf(j)===0&&b!==this.$5){var c=this.$8(b),d=Object.keys(c).every(function(a){a=c[a];return!l(a)||o(a)});d&&this.storage.removeItem(b)}}};c.prototype.$7=function(){this.$11({status:this.$17()})};c.prototype.$17=function(){return document.hidden?k.INACTIVE:k.ACTIVE};e.exports=c}),null);
__d("ServerHTML.react",["React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){"use strict";var a=this.props,c=a.blob;a=babelHelpers.objectWithoutProperties(a,["blob"]);return typeof c==="string"?b("React").createElement("div",a,c):b("React").createElement("div",babelHelpers["extends"]({},a,{dangerouslySetInnerHTML:c}))};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("BUIComponent",["React"],(function(a,b,c,d,e,f){"use strict";var g;c=b("React").Component;g=babelHelpers.inherits(a,c);g&&g.prototype;function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("ContextualLayer.react",["ContextualLayer","React","ReactBrowserEventEmitter","ReactDOM","ReactLayer","Style"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=b("ReactLayer").createClass({propTypes:{contextRef:a.func,context:function(a,c,d){if(a.context==null==(a.contextRef==null))return new Error("Exactly one of `context` or `contextRef` must be set on `"+(d+"`."));a=a[c];if(a!=null){if(typeof a!=="object")return new Error("Invalid `"+c+"` supplied to `"+d+"`, expected a React component.");if(b("React").isValidElement(a))return new Error("Invalid `"+c+"` supplied to `"+d+"`, expected a React component instance. You're passing a React descriptor.")}}},immutableProps:{modal:null},createLayer:function(a){var c=this._getContextNode(),d={context:c,contextBounds:this.props.contextBounds,"data-testid":this.props["data-testid"],position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties};d=new(b("ContextualLayer"))(d,a);this._node=a;this._matchContextSize(this.props);this.props.contextBounds&&d.setContextWithBounds(c,this.props.contextBounds);this._resizeSubscription=d.subscribe("resize",function(a,c){b("ReactBrowserEventEmitter").isEnabled()&&this.props.onResize&&this.props.onResize(c)}.bind(this));d.conditionShow(this.props.shown);return d},componentWillUnmount:function(){this._resizeSubscription&&(this._resizeSubscription.unsubscribe(),this._resizeSubscription=null)},receiveProps:function(a,b){this.updateBehaviors(b.behaviors,a.behaviors);b=this._getContextNode();a.contextBounds?this.layer.setContextWithBounds(b,a.contextBounds):this.layer.setContext(b);this._matchContextSize(a);this.layer.setPosition(a.position);this.layer.setAlignment(a.alignment);this.layer.setOffsetX(a.offsetX);this.layer.setOffsetY(a.offsetY);this.layer.conditionShow(a.shown)},getDefaultEnabledBehaviors:function(){return b("ContextualLayer").getDefaultBehaviorsAsObject()},_getContextNode:function(){var a;this.props.context?a=b("ReactDOM").findDOMNode(this.props.context):this.props.contextRef&&(a=b("ReactDOM").findDOMNode(this.props.contextRef()));return a},_matchContextSize:function(a){var c=this._node,d=this._getContextNode();a.containerWidthMatchContext&&b("Style").set(c,"width",d.offsetWidth+"px");a.containerHeightMatchContext&&b("Style").set(c,"height",d.offsetHeight+"px")}});e.exports=c}),null);
__d("XUIDialogCancelButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Cancel")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogCloseButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Close")}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SimpleXUIDialog",["cx","AsyncResponse","DialogX","LayerAutoFocusReact","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=445;a={show:function(a,c,d,e){var f=b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",use:"confirm"});return this.showEx(a,c,f,d,e)},showConfirm:function(a,c,d,e){var f=!1,g=b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",className:e&&e.autofocusConfirm?"autofocus":"",use:"confirm",onClick:function(){f=!0}});e&&e.confirmBtnTxt&&(g=b("React").createElement(b("XUIDialogButton.react"),{className:b("joinClasses")(e&&e.autofocusConfirm?"autofocus":"","_2z1w"),action:"cancel",use:"confirm",label:e.confirmBtnTxt,onClick:function(){f=!0}}));g=b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:function(){f=!1}}),g);function h(){d&&d(f)}return this.showEx(a,c,g,h,e)},showEx:function(a,c,d,e,f){__p&&__p();f=f||{};var g=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];f.hideOnBlur!==!1&&g.push(b("LayerHideOnBlur"));f.useReactFocusBehavior&&g.push(b("LayerAutoFocusReact"));g={width:f.width||h,xui:!0,addedBehaviors:g,causalElement:f.causalElement};if(c){var i=b("uniqueID")();g.titleID=i;c=b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:f.showCloseButton!==!1,id:i},c)}d&&(d=b("React").createElement(b("XUIDialogFooter.react"),{"data-testid":"simple_xui_dialog_footer",leftContent:f.leftContent},d));i=b("React").createElement("div",null,c,b("React").createElement(b("XUIDialogBody.react"),null,a),d);f=new(b("DialogX"))(g,i);e&&f.subscribe("hide",e);f.show();return f}};e.exports=a}),null);
__d("WaterfallIDGenerator",["CurrentUser","md5"],(function(a,b,c,d,e,f){function g(){var a=2147483647;return Math.random()*a}function h(){return Math.floor(Date.now()/1e3)}a={generate:function(){return b("md5")([b("CurrentUser").getID(),h(),g()].join(":"))}};e.exports=a}),null);
__d("getDOMImageSize",["EncryptedImg","URI"],(function(a,b,c,d,e,f){__p&&__p();function g(a){a.onload=null,a.onerror=null,a.onreadystatechange=null,a._callback=null,a._thisObj=null,a._srcStr=null,a.parentNode&&a.parentNode.removeChild(a)}function h(){var a=this;a._callback&&a._callback.call(a._thisObj,a.naturalWidth||a.width,a.naturalHeight||a.height,a._srcStr);g(a)}function i(){var a=this;a.readyState==="complete"&&h.call(a)}function j(){var a=this;a._callback&&a._callback.call(a._thisObj,0,0,a._srcStr);g(a)}function k(a,c,d){__p&&__p();d=d||null;if(!a){c.call(d,0,0,"");return}var e=document.body;if(!e){setTimeout(k.bind(this,a,c,d),500);return}var f;if(typeof a==="string")f=a;else if(typeof a==="object")if(typeof a.width==="number"&&typeof a.height==="number"){if(typeof a.src==="string"){f=a.src;if(a.naturalWidth&&a.naturalHeight){c.call(d,a.naturalWidth,a.naturalHeight,f);return}}if(typeof a.uri==="string"){f=a.uri;if(a.width&&a.height){c.call(d,a.width,a.height,f);return}}}else a instanceof b("URI")&&(f=a.toString());if(!f){c(0,0,a);return}a=document.createElement("img");a.onreadystatechange=i;a.onload=h;a.onerror=j;a._callback=c;a._thisObj=d;a._srcStr=f;b("EncryptedImg").isEncrypted(f)?b("EncryptedImg").insertIntoDOM(f,a):a.src=f;a.style.cssText="\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  ".replace(/\s+/," ");e.insertBefore(a,e.firstChild)}e.exports=k}),null);
__d("CachedDOMImageSizePool",["debounce","getDOMImageSize"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){"use strict";this.$1={},this.$2=c,this.$3=0,this.$4=a,this.$5=b("debounce")(this.$6,5e3,this),this.$7={},this.$8={}}a.prototype.get=function(a,c,d){"use strict";if(!a){c.call(d,0,0,a);return}var e=this.$1[a];e?(e.lastAccessTime=Date.now(),c.call(d,e.width,e.height,e.src)):this.$7[a]?(this.$7[a].push(c),this.$8[a].push(d)):(this.$7[a]=[c],this.$8[a]=[d],b("getDOMImageSize")(a,this.$9,this))};a.prototype.set=function(a,b,c){"use strict";this.$3>this.$4&&this.$5();var d=this.$1;if(a&&!d[a]){b={width:b,height:c,src:a,lastAccessTime:Date.now()};d[a]=b;this.$3++}};a.prototype.$9=function(a,b,c){"use strict";this.set(c,a,b);var d=this.$7[c],e=this.$8[c];for(var f=0,g=d.length;f<g;f++)d[f].call(e[f],a,b,c);delete this.$7[c];delete this.$8[c]};a.prototype.$6=function(){"use strict";var a=Date.now(),b=this.$1,c=this.$3,d=this.$2;for(var e in b){var f=b[e];a-f.lastAccessTime>d&&(delete b[e],c--)}this.$3=c};e.exports=a}),null);
__d("isNumberLike",[],(function(a,b,c,d,e,f){function a(a){return!isNaN(parseFloat(a))&&isFinite(a)}e.exports=a}),null);
__d("AssertionError",["ManagedError"],(function(a,b,c,d,e,f){function a(a){b("ManagedError").prototype.constructor.apply(this,arguments)}a.prototype=new(b("ManagedError"))();a.prototype.constructor=a;e.exports=a}),null);
__d("Assert",["AssertionError","sprintf"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(typeof a!=="boolean"||!a)throw new(b("AssertionError"))(c);return a}function h(a,c,d){__p&&__p();var e;if(c===undefined)e="undefined";else if(c===null)e="null";else{var f=Object.prototype.toString.call(c);e=/\s(\w*)/.exec(f)[1].toLowerCase()}g(a.indexOf(e)!==-1,d||b("sprintf")("Expression is of type %s, not %s",e,a));return c}function a(a,b,c){g(b instanceof a,c||"Expression not instance of type");return b}function i(a,b){j["is"+a]=b,j["maybe"+a]=function(a,c){a!=null&&b(a,c)}}var j={isInstanceOf:a,isTrue:g,isTruthy:function(a,b){return g(!!a,b)},type:h,define:function(a,b){a=a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase(),i(a,function(a,c){g(b(a),c)})}};["Array","Boolean","Date","Function","Null","Number","Object","Regexp","String","Undefined"].forEach(function(a){i(a,h.bind(null,a.toLowerCase()))});e.exports=j}),null);
__d("TreeMap",["nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b,c){this.key=a,this.value=b,this.time=c}function a(a){this.$1=function(b,c){var d=a(b,c);return d!==0?d:b.time-c.time},this.$2=new Map(),this.$3=null,this.$4=0,this.size=this.$2.size}a.prototype.clear=function(){this.$2=new Map(),this.$3=null,this.size=this.$2.size};a.prototype.has=function(a){return this.$2.has(a)};a.prototype.set=function(a,b){this.has(a)&&this["delete"](a);b=new g(a,b,this.$4++);this.$2.set(a,b);this.$3=n(this.$3,b,this.$1);this.size=this.$2.size;return this};a.prototype.get=function(a){return this.has(a)?this.$2.get(a).value:undefined};a.prototype["delete"]=function(a){if(!this.has(a))return!1;var b=this.$2.get(a);this.$3=o(this.$3,b,this.$1);this.$2["delete"](a);this.size=this.$2.size;return!0};a.prototype.keys=function(){var a=[];s(this.$3,a,function(a){return a.key});return a};a.prototype.values=function(){var a=[];s(this.$3,a,function(a){return a.value});return a};a.prototype.entries=function(){var a=[];s(this.$3,a,function(a){return{key:a.key,value:a.value}});return a};a.prototype.range=function(a,b){var c=[],d=null;a&&(d=new g(a.key,a.value,-1));a=null;b&&(a=new g(b.key,b.value,this.$4));s(this.$3,c,function(a){return{key:a.key,value:a.value}},this.$1,d,a);return c};a.prototype.min=function(){if(!this.$3)return undefined;var a=p(b("nullthrows")(this.$3)),c=a.key;a=a.value;return{key:c,value:a}};a.prototype.max=function(){if(!this.$3)return undefined;var a=q(b("nullthrows")(this.$3)),c=a.key;a=a.value;return{key:c,value:a}};a.prototype.__testRoot=function(){};function h(a){__p&&__p();if(!a)return a;m(a);if(a.balanceFactor<-1)if(a.right&&a.right.balanceFactor<=0)return i(a);else return j(a);else if(a.balanceFactor>1)if(a.left&&a.left.balanceFactor>=0)return k(a);else return l(a);else return a}function i(a){a=a;var c=b("nullthrows")(a.right),d=c.left;a.right=d;m(a);b("nullthrows")(c).left=a;m(c);return c}function j(a){__p&&__p();a=a;var c=b("nullthrows")(a.right),d=b("nullthrows")(c.left),e=d.left,f=d.right;a.right=e;m(a);c.left=f;m(c);d=b("nullthrows")(d);d.left=a;d.right=c;m(d);return d}function k(a){a=a;var c=b("nullthrows")(a.left),d=c.right;a.left=d;m(a);c.right=a;m(c);return c}function l(a){__p&&__p();a=a;var c=b("nullthrows")(a.left),d=b("nullthrows")(c.right),e=d.left,f=d.right;c.right=e;m(c);a.left=f;m(a);d.left=c;d.right=a;m(d);return d}function m(a){var b=a.left?a.left.height:-1,c=a.right?a.right.height:-1;a.height=Math.max(b,c)+1;a.balanceFactor=b-c}function n(a,b,c){__p&&__p();if(a==null)return h(b);var d=c(b,a);if(d<0){a.left=n(a.left,b,c);return h(a)}else{a.right=n(a.right,b,c);return h(a)}}function o(a,b,c){__p&&__p();if(a==null)return null;if(a===b)if(a.left&&a.right){var d=q(a.left);a.left=r(a.left);d.left=a.left;d.right=a.right;return h(d)}else if(a.left)return h(a.left);else if(a.right)return h(a.right);else return null;d=c(b,a);if(d<0){a.left=o(a.left,b,c);return h(a)}else{a.right=o(a.right,b,c);return h(a)}}function p(a){while(a.left)a=a.left;return a}function q(a){while(a.right)a=a.right;return a}function r(a){if(!a)return null;if(a.right==null)return h(a.left||null);a.right=r(a.right);return h(a)}function s(a,b,c,d,e,f){if(a==null)return;var g=!d||!e||d(a,e)>=0,h=!d||!f||d(a,f)<=0;g&&s(a.left,b,c,d,e,f);g&&h&&b.push(c(a));h&&s(a.right,b,c,d,e,f)}e.exports=a}),null);
__d("Cache",["DateConsts","TimeSlice","TreeMap"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1=new Map()}a.prototype.has=function(a){return this.$1.has(a)};a.prototype.get=function(a,b){a=this.__getRaw(a);return!a?b:a.$2};a.prototype.getAll=function(a,b){var c=new Map();a.forEach(function(a){return c.set(a,this.get(a,b))}.bind(this));return c};a.prototype["delete"]=function(a){var b=this.__getRaw(a);b&&b.$3&&clearTimeout(b.$3);return this.$1["delete"](a)};a.prototype.clear=function(){this.$1.forEach(function(a){a&&a.$3&&clearTimeout(a.$3)}),this.$1.clear()};a.prototype.set=function(a,c,d,e){__p&&__p();if(!this.shouldUpdate(a,d))return!1;var f=this.__getRaw(a);f||(f=this.__getNewRawObject());delete f.$2;delete f.$4;f.$3&&clearTimeout(f.$3);delete f.$3;f.$2=c;d!=null&&(f.$4=d);e!=null&&e>=0&&(f.$3=setTimeout(b("TimeSlice").guard(this["delete"].bind(this,a),"Cache expiration timeout"),e*b("DateConsts").MS_PER_SEC*b("DateConsts").SEC_PER_MIN));this.__setRaw(a,f);return!0};a.prototype.shouldUpdate=function(a,b){a=this.__getRaw(a);return a==null||a.$4==null||b==null||b>a.$4};a.prototype.size=function(){return this.$1.size};a.prototype.__getRaw=function(a){return this.$1.get(a)};a.prototype.__setRaw=function(a,b){this.$1.set(a,b)};a.prototype.__getNewRawObject=function(){return{$2:null,$3:null,$4:null,$5:null,$6:null}};a.prototype.__keys=function(){return this.$1.keys()};e.exports=a}),null);
__d("StrSet",[],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";this.$2={},this.$1=0,a&&this.addAll(a)}g.prototype.add=function(a){"use strict";Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=!0,this.$1++);return this};g.prototype.addAll=function(a){"use strict";a.forEach(this.add,this);return this};g.prototype.remove=function(a){"use strict";Object.prototype.hasOwnProperty.call(this.$2,a)&&(delete this.$2[a],this.$1--);return this};g.prototype.removeAll=function(a){"use strict";a.forEach(this.remove,this);return this};g.prototype.toArray=function(){"use strict";return Object.keys(this.$2)};g.prototype.toMap=function(a){"use strict";var b={};Object.keys(this.$2).forEach(function(c){b[c]=typeof a==="function"?a(c):a||!0});return b};g.prototype.contains=function(a){"use strict";return Object.prototype.hasOwnProperty.call(this.$2,a)};g.prototype.count=function(){"use strict";return this.$1};g.prototype.clear=function(){"use strict";this.$2={};this.$1=0;return this};g.prototype.clone=function(){"use strict";return new g(this)};g.prototype.forEach=function(a,b){"use strict";Object.keys(this.$2).forEach(a,b)};g.prototype.map=function(a,b){"use strict";return Object.keys(this.$2).map(a,b)};g.prototype.some=function(a,b){"use strict";return Object.keys(this.$2).some(a,b)};g.prototype.every=function(a,b){"use strict";return Object.keys(this.$2).every(a,b)};g.prototype.filter=function(a,b){"use strict";return new g(Object.keys(this.$2).filter(a,b))};g.prototype.union=function(a){"use strict";return this.clone().addAll(a)};g.prototype.intersect=function(a){"use strict";return this.filter(function(b){return a.contains(b)})};g.prototype.difference=function(a){"use strict";return a.filter(function(a){return!this.contains(a)}.bind(this))};g.prototype.equals=function(a){"use strict";__p&&__p();var b=function(a,b){return a===b?0:a<b?-1:1},c=this.toArray();a=a.toArray();if(c.length!==a.length)return!1;var d=c.length;c=c.sort(b);a=a.sort(b);while(d--)if(c[d]!==a[d])return!1;return!0};e.exports=g}),null);
__d("htmlSpecialChars",[],(function(a,b,c,d,e,f){__p&&__p();var g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/\'/g;function a(a){if(typeof a==="undefined"||a===null||!a.toString)return"";if(a===!1)return"0";else if(a===!0)return"1";return a.toString().replace(g,"&amp;").replace(j,"&quot;").replace(k,"&#039;").replace(h,"&lt;").replace(i,"&gt;")}e.exports=a}),null);
__d("AYMTTipSettings",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS_GUIDANCE_BLUETIP_DATA:"ads_guidance_bluetip_data",ADS_GUIDANCE_CARD_DATA:"ads_guidance_card_data",ALERT_BLACKLISTED:"alert_blacklisted",ALREADY_DELIVERED:"already_delivered",AYMT_DATA:"aymt_data",AYMT_REQUEST_ID:"aymt_request_id",BY_CHANNEL_IGNORE_ALL_CAPS:"by_channel_ignore_all_caps",CAMPAIGN_ACTION_COUNT_LOWER_BOUND:"campaign_action_count_lower_bound",CAMPAIGN_ACTION_COUNT_UPPER_BOUND:"campaign_action_count_upper_bound",CAMPAIGN_OBJECTIVE:"campaign_objective",CHANNEL_ID:"channel_id",CHURN_PROBABILITY_SCORE_LOWER_BOUND:"churn_probability_score_lower_bound",CHURN_PROBABILITY_SCORE_UPPER_BOUND:"churn_probability_score_upper_bound",CLIENT_SIDE_IMPRESSIONS_COUNT:"client_side_impressions_count",CLIENT_SIDE_RENDERER:"client_side_renderer",CLIENT_SIDE_RENDERING_CLASS:"client_side_rendering_class",CLIENT_SIDE_RENDERING_PARAMS:"client_side_rendering_params",CLIENT_SIDE_RENDERING_SPEC:"client_side_rendering_spec",CLIENT_SIDE_RULES:"client_side_rules",CONTEXT_IDS_CLUSTER_NAME:"context_ids_cluster_name",CONTEXTUAL_TARGETING_SPEC:"contextual_targeting_spec",CMS_ID:"cms_id",DELIVERY_DELAY_IN_SEC:"delay_in_sec",DEPENDS_ON_OTHER_TIP_EVENT:"depends_on_other_tip_event",DELIVER_ONCE_PER:"deliver_once_per",DELIVERY_REQUESTED_BY_USER:"delivery_requested_by_user",ELIGIBILITY_GK:"eligibility_gk",EMAIL_CMS_ID:"email_cms_id",ENT_TIP_CONFIG_ID:"ent_tip_config_id",GUARANTEE_TIP_DELIVERY:"guarantee_delivery",HAS_GLOBAL_HOLDOUT:"has_global_holdout",HIDE_ON_BUSINESS_MANAGER:"hide_on_business_manager",HIDE_TIP_IF_CONVERTED:"hide_if_converted",HOLDOUT_UNIT_TYPE:"holdout_unit_type",IC_TARGETING_SPEC:"ic_targeting_spec",INVALID_REASON_SAMPLE_RATE:"invalid_reason_sample_rate",IS_HIGHLIGHTED_IN_MOBILE_ADS_MANAGER:"is_highlighted_in_mobile_ads_manager",LAUNCH_GK:"launch_gk",LOOKBACK_DAYS:"lookback_days",LOWER_RANGE_COMPLETION_PCT:"lower_range_completion_pct",MAX_INSTANCES_NUM:"max_instances_num",MILESTONE_STAGE:"milestone_stage",MIN_RESULTS:"min_results",MIN_PERCENTILE:"min_percentile",NAME:"name",OWNER:"owner",PIXEL_HELP_LINK:"pixel_help_link",PIXEL_LAST_FIRING_DAYS_BACK:"pixel_last_firing_days_back",PIXEL_COUPON_CONTENT_VALUE:"pixel_coupon_content_value",PROMOTION_ID:"promotion_id",PROMOTION_TEST_QE:"promotion_test_qe",PROMOTION_GROUP_ID:"promotion_group_id",RENDERING_TYPE:"rendering_type",SIGNATURE_PARAMS:"signature_params",SKIP_AUGMENTATION_FOR_CONVERSION:"skip_augmentation_for_conversion",TIME_WINDOW_FROM_START:"time_window_from_start",TIME_WINDOW_TO_END:"time_window_to_end",SUPPORT_FORM_ID:"support_form_id",TASK_NUMBER:"task_number",TASK_SPECIFIC_HOLDOUT:"task_specific_holdout",TASK_SPECIFIC_GK_HOLDOUT:"task_specific_gk_holdout",TIP_CLASS:"tip_class",TIP_CONVERSION_EXPIRES_AFTER:"conversion_expires_after",TIP_CLICK_EXPIRES_AFTER:"click_expires_after",TIP_DELIVERY_CAP:"tip_delivery_cap",TIP_DELIVERY_CAP_RESET_PERIOD:"tip_delivery_cap_reset_period",TIP_GLOBAL_IMPRESSION_CAP:"tip_global_impression_cap",TIP_ID:"tip_id",TIP_IMPRESSION_CAP:"impression_cap",TIP_IMPRESSION_CAP_RESET_PERIOD:"impression_cap_reset_period",TIP_IS_INLINE:"tip_is_inline",TIP_IS_STANDALONE:"tip_is_standalone",TIP_NAME_DELIVERY_CAP:"tip_name_delivery_cap",TIP_NAME_DELIVERY_CAP_RESET_PERIOD:"tip_name_delivery_cap_reset_period",TIP_NAME_IMPRESSION_CAP:"tip_name_impression_cap",TIP_NAME_IMPRESSION_CAP_RESET_PERIOD:"tip_name_impression_cap_reset_period",TIP_NAME_XOUT_CAP:"tip_name_xout_cap",TIP_NAME_XOUT_CAP_RESET_PERIOD:"tip_name_xout_cap_reset_period",TIP_PRIORITY:"tip_priority",TIP_SCORE:"tip_score",TIP_XOUT_EXPIRES_AFTER:"xout_expires_after",TIP_XOUT_IS_BENIGN:"tip_xout_is_benign",TUTORIAL_ID:"tutorial_id",UPPER_RANGE_COMPLETION_PCT:"upper_range_completion_pct",VALIDATE_ONLY_ESSENTIAL:"validate_only_essential",VALIDATION_CACHE_TIMEOUT:"validation_cache_timeout",VISIBILITY_PARAM:"visibility_param",VISIBILITY_QE:"visibility_qe"})}),null);
__d("CallToActionLinkFormats",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIDEO_LEAD:"VIDEO_LEAD",VIDEO_LPP:"VIDEO_LPP",VIDEO_NEKO:"VIDEO_NEKO",VIDEO_NON_LINK:"VIDEO_NON_LINK",VIDEO_SHOP:"VIDEO_SHOP"})}),null);
__d("VideoCreatorProductType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10,FRIENDS_DAY_2016:11,FRIENDVERSARY:12,STORYLINE_WITH_EXTERNAL_MUSIC:13,GOODWILL_VIDEO_BIRTHDAY:14,GOODWILL_VIDEO_ANNIVERSARY:15,GOODWILL_VIDEO_FACEVERSARY:16,GOODWILL_VIDEO_YIR16:17,GOODWILL_VIDEO_FRIENDSDAY17:18,GOODWILL_VIDEO_FRIEND_BIRTHDAY_VIDEO:19,VIDEO_ADS_ICEBERG:20,GOODWILL_VIDEO_TWO_BILLION:21,GOODWILL_VIDEO_RECAP:22,GOODWILL_VIDEO_ANNIVERSARY_V2:23,SPHERICAL_VID_DETECTOR:24,ALOHA_SUPERFRAME:25,GOODWILL_VIDEO_MEMORY:26,ALOHA_CALL_VIDEO:27,GOODWILL_VIDEO_YIR17:28,GOODWILL_VIDEO_FRIENDSDAY18:29,PROFILE_COVER_VIDEO:30,ADS_ANIMATOR_VIDEO:31,GOODWILL_VIDEO_COMMUNITY:32,VCC_TEMPLATIZED_VIDEO:33,VCE_EDITED_VIDEO:34,GOODWILL_VIDEO_GENERAL:35,MERCHANT_OVERLAYS_VIDEO:36})}),null);
__d("VideoStereoFormat",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MONO:"mono",LEFT_RIGHT:"left-right",TOP_BOTTOM:"top-bottom"})}),null);
__d("intlList",["fbt","invariant","React","keyMirror"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("keyMirror")({AND:null,NONE:null,OR:null}),j=b("keyMirror")({COMMA:null,SEMICOLON:null});a=function(a,b,c){__p&&__p();b=b||i.AND;c=c||j.COMMA;var d=a.length;if(d===0)return"";else if(d===1)return a[0];var e=a[d-1],f=a[0];for(var h=1;h<d-1;++h)switch(c){case j.SEMICOLON:f=g._("{previous items}; {following items}",[g._param("previous items",f),g._param("following items",a[h])]);break;default:f=g._("{previous items}, {following items}",[g._param("previous items",f),g._param("following items",a[h])])}return k(f,e,b,c)};function k(a,b,c,d){switch(c){case i.AND:return g._("{list of items} and {last item}",[g._param("list of items",a),g._param("last item",b)]);case i.OR:return g._("{list of items} or {last item}",[g._param("list of items",a),g._param("last item",b)]);case i.NONE:switch(d){case j.SEMICOLON:return g._("{previous items}; {last item}",[g._param("previous items",a),g._param("last item",b)]);default:return g._("{list of items}, {last item}",[g._param("list of items",a),g._param("last item",b)])}default:h(0)}}a.DELIMITERS=j;a.CONJUNCTIONS=i;e.exports=a}),null);
__d("mergeDeepInto",["invariant","mergeHelpers"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("mergeHelpers").ArrayStrategies,i=b("mergeHelpers").checkArrayStrategy,j=b("mergeHelpers").checkMergeArrayArgs,k=b("mergeHelpers").checkMergeLevel,l=b("mergeHelpers").checkMergeObjectArgs,m=b("mergeHelpers").isTerminal,n=b("mergeHelpers").normalizeMergeArg,o=function(a,b,c,d){l(a,b);k(d);var e=b?Object.keys(b):[];for(var f=0;f<e.length;f++){var g=e[f];q(a,b,g,c,d)}},p=function(a,b,c,d){j(a,b);k(d);if(c===h.Concat)a.push.apply(a,b);else{var e=Math.max(a.length,b.length);for(var f=0;f<e;f++)q(a,b,f,c,d)}},q=function(a,b,c,d,e){var f=b[c];b=Object.prototype.hasOwnProperty.call(b,c);var i=b&&m(f),j=b&&Array.isArray(f),k=b&&!j&&!j,l=a[c],n=Object.prototype.hasOwnProperty.call(a,c),q=n&&m(l),r=n&&Array.isArray(l),s=n&&!r&&!r;q?i?a[c]=f:j?(a[c]=[],p(a[c],f,d,e+1)):k?(a[c]={},o(a[c],f,d,e+1)):b||(a[c]=l):r?i?a[c]=f:j?(h[d]||g(0),d===h.Clobber&&(l.length=0),p(l,f,d,e+1)):k?(a[c]={},o(a[c],f,d,e+1)):!b:s?i?a[c]=f:j?(a[c]=[],p(a[c],f,d,e+1)):k?o(l,f,d,e+1):!b:n||(i?a[c]=f:j?(a[c]=[],p(a[c],f,d,e+1)):k?(a[c]={},o(a[c],f,d,e+1)):!b)};a=function(a,b,c){b=n(b);i(c);o(a,b,c,0)};e.exports=a}),null);
__d("Queue",[],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){"use strict";this._opts=babelHelpers["extends"]({interval:0,processor:null},a),this._queue=[],this._stopped=!0}h.prototype._dispatch=function(a){"use strict";__p&&__p();if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=!0;throw new Error("No processor available")}if(this._opts.interval)this._opts.processor.call(this,this._queue.shift()),this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval);else while(this._queue.length)this._opts.processor.call(this,this._queue.shift())};h.prototype.enqueue=function(a){"use strict";this._opts.processor&&!this._stopped?this._opts.processor.call(this,a):this._queue.push(a);return this};h.prototype.start=function(a){"use strict";a&&(this._opts.processor=a);this._stopped=!1;this._dispatch();return this};h.prototype.isStarted=function(){"use strict";return!this._stopped};h.prototype.dispatch=function(){"use strict";this._dispatch(!0)};h.prototype.stop=function(a){"use strict";this._stopped=!0;a&&clearTimeout(this._timeout);return this};h.prototype.merge=function(a,b){"use strict";this._queue[b?"unshift":"push"].apply(this._queue,a._queue);a._queue=[];this._dispatch();return this};h.prototype.getLength=function(){"use strict";return this._queue.length};h.get=function(a,b){"use strict";var c;a in g?c=g[a]:c=g[a]=new h(b);return c};h.exists=function(a){"use strict";return a in g};h.remove=function(a){"use strict";return delete g[a]};e.exports=h}),null);
__d("AbstractSearchSource",["Promise"],(function(a,b,c,d,e,f){__p&&__p();a.prototype.bootstrap=function(a){"use strict";this.$1||(this.$1=new(b("Promise"))(function(a){this.bootstrapImpl(a)}.bind(this)));return this.$1.then(a)};a.prototype.search=function(a,b,c){"use strict";this.searchImpl(a,b,c)};a.prototype.bootstrapImpl=function(a){"use strict";a()};a.prototype.searchImpl=function(a,b,c){"use strict";throw new Error("Abstract method #searchImpl is not implemented.")};a.prototype.clearBootstrappedData=function(){"use strict";this.$1=null};function a(){"use strict"}e.exports=a}),null);