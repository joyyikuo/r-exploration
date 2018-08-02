if (self.CavalryLogger) { CavalryLogger.start_js(["231MY"]); }

__d("FBRTCLocalUploadLogLevel",["CurrentUser","FBRTCConstants"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").UploadLogLevel,h={getUploadLogLevel:function(a){return Math.max(h.getLocalUploadLogLevel(),a)},getLocalUploadLogLevel:function(){return b("CurrentUser").isEmployee()?g.LL_DEBUG:g.LL_NONE}};e.exports=h}),null);