if (self.CavalryLogger) { CavalryLogger.start_js(["Sg4jS"]); }

__d("FBRTCCallabilityActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({CALLABILITY_FETCHED:null,CALLABILITY_FETCH_ERROR:null});function a(a){this.$1=a}a.prototype.callabilityFetched=function(a,b){this.$1.dispatch({type:g.CALLABILITY_FETCHED,userID:a,callability:b})};a.prototype.callabilityFetchError=function(a){this.$1.dispatch({type:g.CALLABILITY_FETCH_ERROR,userID:a})};a.Types=g;e.exports=a}),null);