if (self.CavalryLogger) { CavalryLogger.start_js(["hyZFi"]); }

__d("RTCCallabilityStore",["fbt","Cache","FBRTCCallabilityActions","FBRTCCallabilityDataManager","FluxStore","MercuryThreadInfo"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=.5,j=5;c=babelHelpers.inherits(a,b("FluxStore"));h=c&&c.prototype;function a(a){h.constructor.call(this,a),this.$RTCCallabilityStore2=new(b("FBRTCCallabilityDataManager"))(a),this.$RTCCallabilityStore1=new(b("Cache"))()}a.prototype.__onDispatch=function(a){__p&&__p();var c=a.type;switch(c){case b("FBRTCCallabilityActions").Types.CALLABILITY_FETCHED:c=a.userID;var d=a.callability;this.$RTCCallabilityStore1.set(c,{callable:d.is_callable,isBlocked:d.is_blocked},null,d.is_callable?j:i);this.__emitChange();break;case b("FBRTCCallabilityActions").Types.CALLABILITY_FETCH_ERROR:this.$RTCCallabilityStore1.set(a.userID,{callable:!1,isBlocked:!1},null,i);this.__emitChange();break}};a.prototype.isCallable=function(a,b){b=b?b.message_count>0&&b.folder==="inbox":!1;a=this.fetchUserFromCache(a);return a&&a.callable||b};a.prototype.isBlocked=function(a,c){c=c?b("MercuryThreadInfo").canReply(c):!0;a=this.fetchUserFromCache(a);return a&&a.isBlocked||!c};a.prototype.fetchUserFromCache=function(a){this.$RTCCallabilityStore1.has(a)||(this.$RTCCallabilityStore2.fetchCallability(a),this.$RTCCallabilityStore1.set(a,{callable:!1,isBlocked:!1},null,i));return this.$RTCCallabilityStore1.get(a)};a.prototype.callButtonTooltip=function(a,b,c,d){c===void 0&&(c=!0);return!this.isBlocked(a,d)&&(c||this.isCallable(a))?g._("Start a video chat with {shortname}",[g._param("shortname",b)]):g._("{shortname} is currently unavailable for video calling",[g._param("shortname",b)])};a.prototype.voiceCallButtonTooltip=function(a,b,c,d){c===void 0&&(c=!0);return!this.isBlocked(a,d)&&(c||this.isCallable(a))?g._("Start a voice call with {shortname}",[g._param("shortname",b)]):g._("{shortname} is currently unavailable for voice calling",[g._param("shortname",b)])};a.__moduleID=e.id;e.exports=a}),null);