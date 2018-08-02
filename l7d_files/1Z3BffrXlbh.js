if (self.CavalryLogger) { CavalryLogger.start_js(["x7u+h"]); }

__d("ChatSidebarActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({AFTER_DOM_LOAD:null,INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarPresencePrivacyActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({PRIVACY_CHANGED:null,USER_PRESENCE_CHANGED:null});e.exports=a}),null);
__d("SidebarType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"})}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarPresencePrivacyActions","SidebarType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").INIT})},afterDomLoad:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").AFTER_DOM_LOAD})},loaded:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").LOADED})},disable:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!1,sidebarType:b("SidebarType").BUDDYLIST})},enable:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!0,sidebarType:a})},show:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SHOW,sidebarType:a})},userPresenceChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})},privacyChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})}};e.exports=a}),null);
__d("VideoCallTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:VideoCallLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoCallLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoCallLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCallID=function(a){this.$1.call_id=a;return this};a.prototype.setErrorDetails=function(a){this.$1.error_details=a;return this};a.prototype.setErrorType=function(a){this.$1.error_type=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setIsClient=function(a){this.$1.is_client=a;return this};a.prototype.setMessage=function(a){this.$1.message=a;return this};a.prototype.setMessageType=function(a){this.$1.message_type=a;return this};a.prototype.setPeerID=function(a){this.$1.peer_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={call_id:!0,error_details:!0,error_type:!0,event:!0,is_client:!0,message:!0,message_type:!0,peer_id:!0,vc:!0};e.exports=a}),null);
__d("ChatOptions",["Arbiter","ArbiterMixin","Bootloader","ChannelConstants","ChatSidebarActions","FBRTCCallBlockingStore","JSLogger","PresenceUtil","SidebarType","mixin","ChatOptionsInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("JSLogger").create("chat_options"),i={};(function(){var a=b("ChatOptionsInitialData");for(var c in a){var d=a[c];c==="call_blocked_until"?b("FBRTCCallBlockingStore").init(d):i[c]=!!d}})();g=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g&&g.prototype;a.prototype.getSetting=function(a){"use strict";return i[a]};a.prototype.setSetting=function(a,c,d){"use strict";__p&&__p();if(a==="sidebar_mode"){b("Bootloader").loadModules(["ChatSidebarVisibility"],function(a){return a.shouldShowSidebarIgnoreEnabled(null,function(a,d){c?b("ChatSidebarActions").enable(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST):b("ChatSidebarActions").disable()})},"ChatOptions");return}if(this.getSetting(a)==c)return;d&&(d="from_"+d,h.log(d,{name:a,new_value:c,old_value:this.getSetting(a)}));i[a]=!!c;b("Arbiter").inform("chat/option-changed",{name:a,value:c})};function a(){"use strict";g.apply(this,arguments)}b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"),function(a,c){a=c.obj;if(a.window_id===b("PresenceUtil").getSessionID())return;j.setSetting(a.setting,!!a.value,"channel")});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.chat_options=i});var j=new a();e.exports=j}),null);
__d("ChatSidebarPreloadStore",["InitialChatFriendsList"],(function(a,b,c,d,e,f){"use strict";a={onLoaded:function(a){a({buddies:b("InitialChatFriendsList").list,groups:b("InitialChatFriendsList").groups,shortProfiles:b("InitialChatFriendsList").shortProfiles,nearby:b("InitialChatFriendsList").nearby,adminedPages:b("InitialChatFriendsList").adminedPages,pageListModule:b("InitialChatFriendsList").pageListModule,pymmList:b("InitialChatFriendsList").pymmList||{},profiles:[]})}};e.exports=a}),null);
__d("ChatProfileStore",["ChatSidebarPreloadStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};a={init:function(){b("ChatSidebarPreloadStore").onLoaded(function(a){var b=a.profiles,c=a.nearby;return b.filter(function(a){return!c||c.indexOf(a.id)===-1}).forEach(function(a){var b=new Date();b=a.birthdate&&b.getDate()===a.birthdate.day&&b.getMonth()+1===a.birthdate.month;var c=a.profile_picture&&a.profile_picture.uri?a.profile_picture.uri:null;g[a.id]={id:a.id,is_birthday:b,thumbSrc:c,name:a.name,is_messenger_only:!!a.is_messenger_only}})})},get:function(a){return g[a]}};e.exports=a}),null);
__d("ChatSortUsers",["ShortProfiles","TokenizeUtil"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){if(g[a])return g[a];var c=(b("ShortProfiles").getNow(a)||{}).name;return c?g[a]=b("TokenizeUtil").flatten(c):"~"}a={sortAlphabetical:function(a,b){a=h(a);b=h(b);return a!==b?a<b?-1:1:0}};e.exports=a}),null);
__d("ChatUnreadCountActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({COUNT_UPDATED:null})}),null);
__d("ChatUnreadCountStore",["ChatDispatcher","ChatUnreadCountActionTypes","FluxStore","ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("ChatDispatcher"))}a.prototype.__onDispatch=function(a){a=a.type;switch(a){case b("ChatUnreadCountActionTypes").COUNT_UPDATED:this.__emitChange();break;default:break}};a.prototype.get=function(a){return b("ifRequired")("ChatUnreadCount",function(b){return b.get().getUnreadCountForUID(a)||0},function(){return 0})};a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatSidebarParticipantTooltipBuilder",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=10,i="\n";function a(a,b){var c=[],d=Math.min(h,a.length);a=a.slice(0,d);a.forEach(function(a){a=a.name;a&&c.push(a)});d<b&&c.push(g._("and {num} more...",[g._param("num",b-d)]));return c.join(i)}e.exports={buildParticipantsTooltip:a,MAX_NUM_PARTICIPANTS_TO_RENDER:h}}),null);
__d("OrderedFriendsList",["AvailableListConstants","ChatProfileStore","ChatSidebarParticipantTooltipBuilder","ChatSidebarPreloadStore","MercuryIDs","PresenceStatus","SearchableEntry","ShortProfiles","WorkModeConfig","createArrayFromMixed","isValidUniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={},i=[],j={};function k(a){a=String(a);return b("MercuryIDs").isValid(a)?a:b("MercuryIDs").getParticipantIDFromUserID(a)}function l(a,c){a=b("createArrayFromMixed")(a);c(a.filter(function(a){a=b("ShortProfiles").getNow(a);return!a||o(a)||a.is_nonfriend_messenger_contact}))}function m(a){g=[];var c=0;a.forEach(function(a){var d=a.slice(0,-2);a=a.slice(-1);b("PresenceStatus").get(d)==a&&(g[c]=d,h[d]=c++)})}function n(a){var c=0;a.forEach(function(a){var d=a.slice(0,-2);a=a.slice(-1);a==b("AvailableListConstants").ACTIVE&&(i[c]=d,j[d]=c++)})}function o(a){return a.type==="friend"||b("WorkModeConfig").is_work_user&&a.type==="fb4c"}var p={contains:function(a){return a in h},getList:function(a){if(g&&g.length){l(g,a);return}b("ChatSidebarPreloadStore").onLoaded(function(b){b=b.buddies;m(b);l(g,a)})},getSearchableEntries:function(a,c,d){__p&&__p();p.getList(function(e){__p&&__p();b("ChatSidebarPreloadStore").onLoaded(function(f){var g=f.groups;b("ShortProfiles").getMulti(e.slice(0,a),function(a){var b=[];for(var e in a)b.push(p.normalizeProfileEntry(a[e],e));a=c?g.map(p.normalizeThreadEntry):[];d(b.concat(a).filter(function(a){return!!a}).sort(function(a,b){return a.getOrder()-b.getOrder()}))})})})},normalizeProfileEntry:function(a,c){var d=a.searchTokens||[],e=a.name,f=null;return new(b("SearchableEntry"))({uniqueID:a.id||c,keywordString:d.join(" "),order:p.getRank(a.id||c),photo:a.thumbSrc,title:e,subtitle:f,type:a.type,uri:a.uri,auxiliaryData:{isMessengerUser:a.is_messenger_user}})},normalizeThreadEntry:function(a,c){__p&&__p();var d=a.mercury_thread,e=a.participants_to_render.map(function(a){return babelHelpers["extends"]({},a,{id:k(a.id)})});d.participants=d.participants.map(k);var f=a.text,g=null;f||(f=d.name);var h=b("ChatSidebarParticipantTooltipBuilder").buildParticipantsTooltip(e,d.participants.length-1),i=e.map(function(a){return a.name}).join(", ");!f?f=i:g=i;i=a.uid;return!f||!b("isValidUniqueID")(i)?null:new(b("SearchableEntry"))({uniqueID:i,order:c,photo:d.image_src,title:f,subtitle:g,type:"thread",auxiliaryData:{participantsToRender:e,tooltipContent:h,thread:d}})},getRank:function(a){return a in h?h[a]:g?g.length:0},getActiveList:function(a){if(i.length>0){a(i);return}p.getList(function(b){return a(b)})},getActiveRank:function(a){return a in j?j[a]:p.getRank(a)}};(function(){b("ChatSidebarPreloadStore").onLoaded(function(a){var c=a.buddies;a=a.shortProfiles;b("ShortProfiles").setMulti(a);n(c);m(c)}),b("ChatProfileStore").init()})();e.exports=p}),null);
__d("PresenceStatusStore",["ChatDispatcher","FluxStore","PresenceStatus","PresenceStatusActionTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("ChatDispatcher"))}a.prototype.__onDispatch=function(a){a=a.type;switch(a){case b("PresenceStatusActionTypes").AVAILABILITY_CHANGED:this.__emitChange();break;default:break}};a.prototype.get=function(a){return b("PresenceStatus").get(a)};a.prototype.getIsPlaying=function(a){return b("PresenceStatus").isPlayingCanvasGameUser(a)};a.__moduleID=e.id;e.exports=new a()}),null);
__d("ShortProfilesActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({PROFILE_UPDATED:null})}),null);
__d("ShortProfilesStore",["ChatDispatcher","ChatProfileStore","FluxStore","ShortProfiles","ShortProfilesActionTypes","debounce","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("ChatDispatcher")),b("gkx")("AT7b-T545bsAAbOyiRE0i8vzwAqg-R4NRaZ4WCkL5TZUAjQ3ntria2ZiM69962yv5cnbq6KuBYvaMYzUdYYVWB-O")&&(this.$ShortProfilesStore1=b("debounce")(this.$ShortProfilesStore1,50))}a.prototype.__onDispatch=function(a){a=a.type;switch(a){case b("ShortProfilesActionTypes").PROFILE_UPDATED:this.__emitChange();break;default:break}};a.prototype.getNow=function(a){var c=b("ChatProfileStore").get(a);c||(c=b("ShortProfiles").getNow(a));return c};a.prototype.getMulti=function(a){b("ShortProfiles").getMulti(a,this.$ShortProfilesStore1)};a.prototype.$ShortProfilesStore1=function(a){b("ChatDispatcher").dispatch({type:b("ShortProfilesActionTypes").PROFILE_UPDATED})};a.__moduleID=e.id;e.exports=new a()}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!1));case 2:case"end":return a.stop()}},null,this)},loadFlyoutAsChild:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!0));case 2:case"end":return a.stop()}},null,this)},_loadFlyout:function(a){__p&&__p();var c,d,e,f,h,i,j,event,k,l;return b("regeneratorRuntime").async(function(m){__p&&__p();while(1)switch(m.prev=m.next){case 0:if(!g){m.next=2;break}return m.abrupt("return");case 2:g=!0;m.next=5;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:c=m.sent,d=c[0],e=c[1],f=e.flyout,h=e.flyoutRoot,i=c[2],j=i.footer,event=i.event,k=i.settingsExitPoint,l=i.basicsExitPoint,d.setIsChild(!!a),d.registerFlyoutToggler(f,h),d.registerSettingsAndBasicsLinkLogging(j,event,k,l),d.loadBody();case 19:case"end":return m.stop()}},null,this)},setChildFlyoutVisible:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:if(!(!g&&!a)){h.next=2;break}return h.abrupt("return");case 2:h.next=4;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:c=h.sent;d=c[0];e=c[1];f=e.flyout;e._flyoutRoot;if(!(a===d.isFlyoutVisible())){h.next=11;break}return h.abrupt("return");case 11:d.setChildFlyoutVisible(a),d.onToggle(f,a?"show":"hide");case 13:case"end":return h.stop()}},null,this)},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})},_getDeferredFooterElements:function(){i==null&&(i=new(b("Deferred"))());return i},registerFooterElements:function(a,event,b,c){this._getDeferredFooterElements().resolve({footer:a,event:event,settingsExitPoint:b,basicsExitPoint:c})}};e.exports=j}),null);
__d("HelpLiteFlyout",["AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={loadBody:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:!0}).send()},resetHelp:function(a){var c=b("ge")("fbContextualHelpContent");c&&b("DOM").replace(c,a);h.isFlyoutVisible()&&h.refreshHelp()},showHelp:function(){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),b("CSS").show(b("ge")("fbHelpLiteFlyout"))},openPrivacy:function(){b("CSS").hide(b("ge")("fbHelpLiteFlyout")),b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)},registerPrivacyBackLink:function(a){b("Event").listen(a,"click",h.showHelp)},registerFlyoutToggler:function(a,c){g=c;a=b("Toggler").createInstance(a);a.setSticky(!1);b("Toggler").listen("hide",c,function(a){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)});b("Toggler").listen("show",c,function(a){h.showHelp()})},isFlyoutVisible:function(){return g&&b("Toggler").getActive()===g},setFlyoutVisible:function(a){a&&b("HelpLiteFlyoutBootloader").loadFlyout(),a?b("Toggler").show(g):b("Toggler").hide(g)}};e.exports=h}),null);
__d("ChatPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDuration=function(a){this.$1.duration=a;return this};a.prototype.setEndpoint=function(a){this.$1.endpoint=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setTabsOpen=function(a){this.$1.tabs_open=a;return this};c={duration:!0,endpoint:!0,event:!0,tabs_open:!0};e.exports=a}),null);
__d("ChatPerfInstrumentation",["Promise","BaseEventEmitter","ChatPerfEvent","ChatPerfTypedLogger","FantaConst","PresenceState","WorkModeConfig","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("WorkModeConfig").is_work_user;c=a?b("FantaConst").cookieIDs.WORK_COOKIE_ID:b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID;d=b("PresenceState").getInitial();var g=d&&d[c]?d[c].length:0,h;f={_startTime:Number,_sidebarStartTime:Number,init:function(){this._startTime=b("performanceAbsoluteNow")();return new(b("Promise"))(function(a){return a()})},initDivebar:function(){this._sidebarStartTime=b("performanceAbsoluteNow")()},_log:function(event,a){a=b("performanceAbsoluteNow")()-(a||this._startTime);h&&h.emit(event,a);var c=new(b("ChatPerfTypedLogger"))();c.setEvent(event).setDuration(a);c.setTabsOpen(g);c.log()},addPerfTimingsListener:function(event,a){h||(h=new(b("BaseEventEmitter"))());return h.once(event,a)},logInitStores:function(){this.logInitStores=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_STORES)},logInitData:function(){this.logInitData=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_DATA)},logInitUI:function(){this.logInitUI=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_UI)},logInitSound:function(){this.logInitSound=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_SOUND)},logDisplayDone:function(){this.logDisplayDone=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_DISPLAY_DONE)},logTTI:function(){this.logTTI=b("emptyFunction"),this._log(b("ChatPerfEvent").TTI)},logCHAT_CONVERSATION_TTI:function(){this.logCHAT_CONVERSATION_TTI=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_CONVERSATION_TTI)},logSIDEBAR_FROM_CLIENT_TTI:function(){this.logSIDEBAR_FROM_CLIENT_TTI=b("emptyFunction"),this._log(b("ChatPerfEvent").SIDEBAR_FROM_CLIENT_TTI,this._sidebarStartTime)},logSIDEBAR_DISPLAY_DONE:function(){this.logSIDEBAR_DISPLAY_DONE=b("emptyFunction"),this._log(b("ChatPerfEvent").SIDEBAR_DISPLAY_DONE,this._sidebarStartTime)}};e.exports=f}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("onAfterLoadSafe",["Run","TimeSlice","requestIdleCallback"],(function(a,b,c,d,e,f){"use strict";a=function(a){return b("TimeSlice").guard(function(){return b("Run").onAfterLoad(function(){b("requestIdleCallback")(a)})},"delayed after load",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};e.exports=a}),null);
__d("ChatSidebarPresencePrivacyStore",["ChatDispatcher","ChatSidebarPresencePrivacyActions","FluxReduceStore","PresencePrivacy"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return{currentUser:b("PresencePrivacy").getVisibility(),onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),friends:b("PresencePrivacy").getFriendsVisibility()}};a.prototype.reduce=function(a,c){switch(c.type){case b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED:return{onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),currentUser:b("PresencePrivacy").getVisibility(),friends:b("PresencePrivacy").getFriendsVisibility()};case b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED:return babelHelpers["extends"]({},a,{onlinePolicy:b("PresencePrivacy").getOnlinePolicy(),currentUser:b("PresencePrivacy").getVisibility()})}return a};a.prototype.isUserOffline=function(){return this.getState().currentUser===b("PresencePrivacy").OFFLINE};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("ChatDispatcher"))}),null);
__d("PresenceOrderedList",["ChatSidebarPreloadStore","ChatSortUsers","PresencePrivacy","PresenceStatus"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function h(a,c){__p&&__p();var d=[];a.forEach(function(a){var e=a[0];a=a[1];if(d.length>=c)return;if(b("PresencePrivacy").getFriendVisibility(e)==b("PresencePrivacy").BLACKLISTED)return;a==b("PresenceStatus").get(e)&&d.push(e)});return d}function a(){"use strict";this.$1=null}a.prototype.getSorted=function(a,c){"use strict";if(this.$1){c(h(this.$1,a));return}b("ChatSidebarPreloadStore").onLoaded(function(b){b=b.buddies;this.$1=g(b);c(h(this.$1,a))}.bind(this))};a.prototype.getAvailableSorted=function(a){"use strict";var c=b("PresenceStatus").getOnlineIDs();a&&(c=c.filter(function(b){return a&&a.indexOf(b)===-1}));return c.sort(b("ChatSortUsers").sortAlphabetical)};a.prototype.getAllSorted=function(a){"use strict";var c=[],d=this.$1||[];b("PresenceStatus").getAllIDs().concat(d.map(function(a){return a[0]})).forEach(function(a){return c.indexOf(a)===-1&&c.push(a)});a&&(c=c.filter(function(b){return a&&a.indexOf(b)===-1}));return c.sort(b("ChatSortUsers").sortAlphabetical)};e.exports=new a()}),null);
__d("ChatSidebarStore",["AvailableListConstants","ChatConfig","ChatDispatcher","ChatOptions","ChatOptionsInitialData","ChatSidebarActionTypes","ChatUnreadCountActionTypes","ChatUnreadCountStore","FluxStore","InitialChatFriendsList","MercuryParticipantTypes","PresenceOrderedList","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","PresenceStatusStore","ShortProfiles","ShortProfilesActionTypes","ShortProfilesStore","WorkModeConfig","gkx","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.map(function(a){var b=a.slice(0,-2);a=Number(a.slice(-1));return[b,a]})}function i(a,c,d){d===void 0&&(d=[]);return a.reduce(function(a,e){var f=e[0];e=e[1];a.length<c&&b("PresencePrivacy").getFriendVisibility(f)!==b("PresencePrivacy").BLACKLISTED&&e===b("PresenceStatus").get(f)&&!d.includes(f)&&a.push(f);return a},[])}function j(a){return b("PresencePrivacy").getVisibility()==b("PresencePrivacy").ONLINE?a.filter(function(a){return b("PresencePrivacy").allows(a)}):a}c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("ChatDispatcher")),this.$ChatSidebarStore2={enabled:!1,initTime:0,initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null},this.setupShortProfiles(),this.$ChatSidebarStore3={enabled:!!b("ChatOptionsInitialData").sidebar_mode,initTime:b("performanceAbsoluteNow")(),initialized:!1,isAfterDomLoad:!1,loaded:!1,visible:null}}a.prototype.setupShortProfiles=function(){var a=b("InitialChatFriendsList").shortProfiles;a&&b("ShortProfiles").setMulti(a)};a.prototype.__onDispatch=function(a){__p&&__p();var c=a.type;this.$ChatSidebarStore2=babelHelpers["extends"]({},this.$ChatSidebarStore3);switch(c){case b("ChatSidebarActionTypes").INIT:this.$ChatSidebarStore2.initialized||(this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initTime:b("performanceAbsoluteNow")()}));this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{initialized:!0});break;case b("ChatSidebarActionTypes").AFTER_DOM_LOAD:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{isAfterDomLoad:!0});break;case b("ChatSidebarActionTypes").LOADED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{loaded:!0});break;case b("ChatSidebarActionTypes").SHOW:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{visible:a.sidebarType});break;case b("ChatSidebarActionTypes").SET_ENABLED:this.$ChatSidebarStore3=babelHelpers["extends"]({},this.$ChatSidebarStore3,{enabled:a.enabled,visible:a.sidebarType});break}if(b("gkx")("AT65aWKrtJj5OrvMCdm_OgNblUKceQOyajsYMcV9YtzUj3ZHj_aVLY1fm-j6_0V9tLsLzk2inEWuRR4F6LAYYSAr")&&(c===b("PresenceStatusActionTypes").AVAILABILITY_CHANGED||c===b("ShortProfilesActionTypes").PROFILE_UPDATED||c===b("ChatUnreadCountActionTypes").COUNT_UPDATED)){this.__emitChange();return}for(var d in this.$ChatSidebarStore3)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore3,d)&&this.$ChatSidebarStore3[d]!==this.$ChatSidebarStore2[d]){this.__emitChange();break}};a.prototype.getPrevState=function(){return this.$ChatSidebarStore2};a.prototype.getState=function(){return this.$ChatSidebarStore3};a.prototype.isInitialized=function(){return this.$ChatSidebarStore3.initialized};a.prototype.isLoaded=function(){return this.$ChatSidebarStore3.loaded};a.prototype.isAfterDomLoad=function(){return this.$ChatSidebarStore3.isAfterDomLoad};a.prototype.isEnabled=function(){return this.$ChatSidebarStore3.enabled};a.prototype.getInitTime=function(){return this.$ChatSidebarStore3.initTime};a.prototype.getVisibleType=function(){return this.$ChatSidebarStore3.visible};a.prototype.getUsersData=function(a){__p&&__p();a=this.getOrderedPresenceUserList(a);var c=b("InitialChatFriendsList").nearby,d=b("WorkModeConfig").is_work_user?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return!a||a.type===b("MercuryParticipantTypes").FB4C}):b("PresenceOrderedList").getAvailableSorted(a.concat(c)),e=b("WorkModeConfig").is_work_user?b("PresenceOrderedList").getAllSorted(a.concat(c)).filter(function(a){a=b("ShortProfilesStore").getNow(a);return a&&a.type!==b("MercuryParticipantTypes").FB4C}):[];a=a.filter(function(a){return!c||c.indexOf(a)===-1});var f=j(a);a=b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_WHITELIST&&b("PresencePrivacy").getVisibility()?a.filter(function(a){return!b("PresencePrivacy").allows(a)}):[];return{availableUsers:d,topUsers:f,workOthers:e,offlineUsers:a}};a.prototype.getExtraData=function(a){__p&&__p();var c=b("InitialChatFriendsList").groups,d=b("InitialChatFriendsList").nearby,e=b("InitialChatFriendsList").adminedPages,f=b("InitialChatFriendsList").pageListModule,g=b("InitialChatFriendsList").pymmList;a--;b("ChatConfig").get("show_header")&&a--;var h=!b("ChatOptions").getSetting("hide_businesses")&&g&&g.pages;h&&(a-=3);e=b("ChatOptions").getSetting("hide_admined_pages")?[]:e;e.length&&(a-=e.length+1);var i=a,k=a;c=this.getGroupsToShow(c);var l=c.length;l===0&&b("gkx")("AT5TWxfoyJTuU3Tr-O8sY_Gkxvimm2rPLn9ZsAsusyJiAYq-zLKg2_7_eMccMJTI9qOx7gwISC6rrsGtqpWk_uDLins6TCNHhi73ZUmc4ebtyg")&&!b("ChatOptions").getSetting("hide_groups")&&l++;l>0&&(k-=l+1);b("ChatConfig").get("nearby_friends_www_chatbar")&&d.length>0&&(k-=d.length+1);b("ChatConfig").get("show_admined_pages")&&e.length>0&&(k-=e.length+1);l=h&&g?g:{pages:[]};b("ChatConfig").get("show_businesses")&&l.pages.length>0&&(k-=2);k=Math.min(a,Math.max(k,b("ChatConfig").get("min_top_friends")||0));h=j(d);return{isUserOffline:b("PresencePrivacy").isUserOffline(),groups:c,numTopFriends:k,nearby:h,maxThreadSlots:i,adminedPages:e,pageListModule:f,pymmList:l}};a.prototype.getGroupsToShow=function(a){if(b("ChatOptions").getSetting("hide_groups"))return[];return b("gkx")("AT5XEYH1ZrReYerzhKj5_PytaAcJxBVvUm8BnU1UXvJkWL3CRwm9HpjP4d4QdvCcJzEps4hn0e9aiGI9CC7UmRMvSwDP5zZ1DHe3XtDkTFXDIg")&&a.length>1?a.sort(function(a,c){return b("PresenceStatus").getGroup(c.mercury_thread.participants)-b("PresenceStatus").getGroup(a.mercury_thread.participants)}).slice(0,b("ChatConfig").getNumber("num_groups_to_show")):a};a.prototype.getOrderedPresenceUserList=function(a){if(this.$ChatSidebarStore1&&Array.isArray(this.$ChatSidebarStore1))return i(this.$ChatSidebarStore1,a);this.$ChatSidebarStore1=h(b("InitialChatFriendsList").list)||[];return i(this.$ChatSidebarStore1,a)};a.prototype.getStatusMap=function(a,c){var d={},e={};a.forEach(function(a){if(c){var f=b("PresenceStatusStore").getIsPlaying(a);d[a]=f}f=b("PresenceStatusStore").get(a);f===b("AvailableListConstants").ACTIVE&&(e[a]=f)});return{statusMap:e,playingMap:d}};a.prototype.getUnreadCountsMap=function(a){var c={};a.forEach(function(a){c[a]=b("ChatUnreadCountStore").get(a)});return c};a.__moduleID=e.id;e.exports=new a()}),null);
__d("ChatSidebarHideReason",[],(function(a,b,c,d,e,f){a=Object.freeze({VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2});e.exports=a}),null);
__d("ChatSidebarVisibility",["ChatConfig","ChatSidebarHideReason","ChatSidebarStore","OrderedFriendsList","SidebarType","getViewportDimensions","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ChatConfig").get("sidebar.min_friends"),h=b("ChatConfig").get("sidebar.minimum_width"),i={getViewport:function(){return b("gkx")("AT4gz_bRY5sNyXC9w4Akayj0OxvthyCO40TL1o3mvHk46uC52cZoFYJtJRK1uwlf9JMyhc21L_1vGUfFxZI19a9hOgbL7cH2dTTH2gcs-MFRwA")?b("getViewportDimensions")():b("getViewportDimensions").withoutScrollbars()},shouldShowSidebar:function(a,c){i.shouldShowSidebarIgnoreEnabled(a,function(a,d){var e=b("ChatSidebarStore").isEnabled();c(a&&e,e?d:d.concat([b("ChatSidebarHideReason").NOT_ENABLED]))})},shouldShowSidebarIgnoreEnabled:function(a,c){b("OrderedFriendsList").getActiveList(function(d){var e=a||i.getViewport();e=e.width>h;d=d.length<g;var f=!0,j=[];e||(f=!1,j.push(b("ChatSidebarHideReason").VIEWPORT_INCAPABLE));d&&(f=!1,j.push(b("ChatSidebarHideReason").LOW_FRIEND_COUNT));c(f,j)})},isSidebarVisible:function(){return b("ChatSidebarStore").getVisibleType()===b("SidebarType").SIDEBAR},isBuddyListVisible:function(){return b("ChatSidebarStore").getVisibleType()===b("SidebarType").BUDDYLIST}};e.exports=i}),null);
__d("ChatSidebar",["csx","Arbiter","AsyncRequest","Bootloader","ChatConfig","ChatDispatcher","ChatPerfInstrumentation","ChatSidebarActions","ChatSidebarBotsDispatcher","ChatSidebarBotsStore","ChatSidebarCachedViewport","ChatSidebarPresencePrivacyStore","ChatSidebarStore","ChatSidebarVisibility","CSS","CurrentUser","DOM","DOMDimensions","Event","LitestandClassicPlaceHolders","Parent","PresencePrivacy","PresenceUtil","SidebarAppsInitialVisibility","SidebarType","SidebarWorkTopGroupsVisibility","Style","TimeSlice","ViewportBounds","WWWSiteOrganizationGating","emptyFunction","ge","gkx","ifRequired","onAfterDisplay","onAfterLoadSafe","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("ChatSidebarBotsDispatcher").module,i=b("ChatSidebarBotsStore").module,j,k,l,m,n,o,p=!0,q=b("ChatSidebarCachedViewport").viewport;a=b("WWWSiteOrganizationGating").largerBlueBar;var r=a?49:44,s=117,t=40,u=32,v=44,w=30,x=171,y=b("ChatConfig").get("expanded_divebar_width");function z(){return b("ChatSidebarStore").getVisibleType()===b("SidebarType").SIDEBAR}function A(a,b){if(!z())return;b?m.hide():(m.show(),E())}function B(){return!z()||!l?0:y}function C(){b("CSS").removeClass(document.documentElement,"sidebarMode"),b("ChatSidebarStore").isInitialized()&&(m.hide(),b("CSS").hide(l),b("CSS").hide(k)),b("Arbiter").inform("sidebar/visibility",!1,b("Arbiter").BEHAVIOR_STATE),b("Arbiter").inform("reflow"),b("ViewportBounds").inform("change")}function D(a){E(a,N._cacheViewport)}function E(a,c){var d;b("queryThenMutateDOM")(function(){c&&c(),(!a||a.height!==q.height)&&(d=J())},function(){(a==null||a.width!==q.width)&&b("ChatSidebarVisibility").shouldShowSidebar(q,function(a,c){b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)}),K(d)})}function F(){b("ChatSidebarVisibility").shouldShowSidebar(q,function(a,c){b("ChatSidebarActions").show(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)}),K(J())}function G(a){b("Bootloader").loadModules(["KeyboardShortcuts"],function(c){c.register("q",function(event){if(b("ChatSidebarStore").getVisibleType()!==b("SidebarType").SIDEBAR)return;b("requireWeak")("ChatTypeaheadCore",function(b){b.focusSearchField(a,event)})},{persistOnTransition:!0})},"ChatSidebar")}function H(a){var c=q||b("ChatSidebarVisibility").getViewport(),d=c.height;a&&a.length?(a.forEach(function(a){a&&a!==j&&!b("CSS").hasClass(a,"hidden_elem")&&(d-=b("DOMDimensions").getElementDimensions(a).height)}),o&&(d-=o.getOffset()),n&&(d-=b("DOMDimensions").getElementDimensions(n).height)):(b("ifRequired")("AppsDivebarDisplayController",function(a){a.isVisible()&&(d-=x)},function(){b("SidebarAppsInitialVisibility").visible&&(d-=x)}),b("CurrentUser").isWorkUser()&&(i&&i.hasBots()&&(d-=s),b("SidebarWorkTopGroupsVisibility").visible&&(d-=t*b("SidebarWorkTopGroupsVisibility").numGroups+u),b("gkx")("AT5IvuE7ZC3UHqOIrperWBqnPRJB-4i3O1lK6UHKCeB2Qv_h-q8tQBe-hbIcjbrwQQAUFvheEGQ08bmOBzC0UNM8sHBTeZ77GLtxYXgmBgZI0g")&&(d-=v)),d-=r,d-=w);return Math.max(0,d)}function I(){b("CSS").show(k),b("CSS").show(l),y>206&&b("CSS").addClass(document.documentElement,"sidebarLarger"),b("CSS").addClass(document.documentElement,"sidebarMode"),m.show(),b("Arbiter").inform("sidebar/visibility",!0,b("Arbiter").BEHAVIOR_STATE),b("LitestandClassicPlaceHolders").destroy("sidebar"),b("ViewportBounds").inform("change")}function J(){return{body:N.getBodyHeight(),item:m.getItemHeight()}}function K(a){if(!a)return;var c=8,d=Math.floor((a.body-c)/a.item);m.setNumTopFriends(d,p,b("SidebarType").SIDEBAR);p=!1;d=Math.floor(a.body-c);b("Style").set(j,"height",a.body+"px");b("Arbiter").inform("sidebar/resized",d,b("Arbiter").BEHAVIOR_STATE);b("Arbiter").inform("reflow")}function L(){var a;b("queryThenMutateDOM")(function(){a=J()},function(){return K(a)})}function M(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(b("emptyFunction")).setErrorHandler(b("emptyFunction")).setData({sidebar_mode:b("ChatSidebarStore").isEnabled(),window_id:b("PresenceUtil").getSessionID()}).setAllowCrossPageTransition(!0).send()}var N={init:function(a,c){__p&&__p();N.init=b("emptyFunction"),b("ChatPerfInstrumentation").initDivebar(),b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarStore")),b("ChatDispatcher").explicitlyRegisterStore(b("ChatSidebarPresencePrivacyStore")),h&&i&&h.explicitlyRegisterStore(i),b("ChatSidebarActions").loaded(),l=a,m=c,j=b("DOM").find(a,"div.fbChatSidebarBody"),k=b("DOM").find(a,"._51x_"),n=b("DOM").find(a,"._5qqe"),b("Event").listen(window,"resize",function(){var a=babelHelpers["extends"]({},q)||{};D(a)}),b("gkx")("AT6ZCntuwGBL1LBDjniJnuZTki0EgqKZ16N0_aKYu1tUnleN5fWyObM-HMcM9_e2aftsyQ6i7hVPvvzxMu5Zazav")?b("onAfterDisplay")(function(){G(a)}):G(a),m.setScrollContainer(b("Parent").byClass(m.getRoot(),"uiScrollableAreaWrap")),b("Arbiter").subscribe("chat/option-changed",function(a,b){a=b.name;(a==="hide_groups"||a==="hide_admined_pages"||a==="hide_businesses")&&L()}),b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps","PagesDivebar/show-pages","PagesDivebar/hide-pages"],L),b("Arbiter").subscribe("sidebar/typeahead/active",A),b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){E(),b("ChatSidebarActions").userPresenceChanged()}),b("PresencePrivacy").subscribe("privacy-changed",function(){E(),b("ChatSidebarActions").privacyChanged()}),b("ChatSidebarStore").addListener(function(){var a=b("ChatSidebarStore").getState(),c=b("ChatSidebarStore").getPrevState();if(a.visible!==c.visible)switch(a.visible){case b("SidebarType").SIDEBAR:I();break;case b("SidebarType").BUDDYLIST:C();break}a.enabled!==c.enabled&&M()}),i&&i.addListener(function(){return L()}),b("gkx")("AT4xuZ6KicTRHJ7-VVo2al5OuIgAH2UnbvppZwmWOFgaXXw1Df_vJXJR_TJQJ8YKN1RjtB4EWptwOe1mw8W6tT1FjYsXDZ_wxr3ljwpzw17dng")?(F(),b("onAfterLoadSafe")(function(){if(q.needsRefresh){var a=b("ChatSidebarStore").getState().visible===b("SidebarType").SIDEBAR;D();b("onAfterLoadSafe")(function(){a!==(b("ChatSidebarStore").getState().visible===b("SidebarType").SIDEBAR)&&b("Bootloader").loadModules(["ChatReliabilityInstrumentation"],function(a){a.logERROR("sidebar flashed")},"ChatSidebar")})}})):D(),b("onAfterLoadSafe")(function(){b("Bootloader").loadModules(["ChatImpressionLogger"],function(a){a.init(m)},"ChatSidebar")}),b("ViewportBounds").addPersistentRight(B),b("Arbiter").inform("sidebar/initialized",N,b("Arbiter").BEHAVIOR_STATE),b("ChatSidebarActions").init(),b("ChatPerfInstrumentation").logSIDEBAR_DISPLAY_DONE()},ensureLoaded:function(){__p&&__p();if(!b("ChatSidebarStore").isEnabled())return;if(b("ChatSidebarStore").isLoaded())return;if(b("ge")("pagelet_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("SidebarPagelet","pagelet_sidebar")},"ChatSidebar");b("ChatSidebarActions").loaded()},hide:function(){if(!b("ChatSidebarStore").isEnabled())return;b("ChatSidebarActions").disable()},unhide:function(){if(b("ChatSidebarStore").isEnabled())return;b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null,function(a,c){b("ChatSidebarActions").enable(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST)})},_cacheViewport:function(){q=b("ChatSidebarVisibility").getViewport()},getBodyHeight:function(){return b("gkx")("AT6ezxCFIuDr3f155YU0cVompttkL6-4ye5A4xnJR5wWiQ5IOmLV0d94XM9VgwajF9248OtJTIz0cnvOn5PCMW2_")?H():H(Array.from(k.childNodes))}};N.init=b("TimeSlice").guard(N.init,"ChatSidebar init");e.exports=N}),null);