if (self.CavalryLogger) { CavalryLogger.start_js(["N1hOR"]); }

__d("FBRTCVersionDetection",["UserAgent","UserAgentData"],(function(a,b,c,d,e,f){__p&&__p();a={isChrome:function(){return b("UserAgent").isBrowser("Chrome")},isFirefox:function(){return b("UserAgent").isBrowser("Firefox")},isChromium:function(){return!!navigator.webkitGetUserMedia},webrtcVersion:function(){if(this.isFirefox()||this.isChrome())return b("UserAgentData").browserVersion||0;if(this.isChromium()){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a!=null?parseInt(a[2],10):999}return 0}};e.exports=a}),null);