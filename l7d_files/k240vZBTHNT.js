if (self.CavalryLogger) { CavalryLogger.start_js(["NjAGx"]); }

__d("FBRTCConsoleLogger",["Log","LogHistory","formatDate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;h.getInstance=function(){g||(g=new h());return g};function h(){this.$1=b("LogHistory").getInstance(h.MODULE_NAME)}h.prototype.getLogHistory=function(){return this.$1};h.prototype.log=function(a,b,c,event){event===void 0&&(event="Console");var d="";b&&c&&(d=" (peerID:"+b+", callID:"+c+")");this.$1.log(event||"Console",a+d);return this};h.MODULE_NAME="webrtc";e.exports=h}),null);