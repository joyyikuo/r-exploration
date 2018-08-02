if (self.CavalryLogger) { CavalryLogger.start_js(["YMpUk"]); }

__d("RTCSignalingExperiments",["FBRTCScreenSharingUtils","FBRTCSupport","FBRTCVersionDetection","RTWebClientFeatureGating","UserAgent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){this.$2=new Set(),this.$1=new Set(g.getLocal()),a&&(this.$2=new Set(a))}g.prototype.getLocal=function(){return Array.from(this.$1)};g.prototype.setRemote=function(a){return!a?this:new g(a)};g.prototype.getRemote=function(){return Array.from(this.$2)};g.prototype.support=function(a){return this.localSupport(a)&&this.remoteSupport(a)};g.prototype.localSupport=function(a){return this.$1.has(a)};g.prototype.remoteSupport=function(a){return this.$2.has(a)};g.getLocal=function(){var a=[];(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera")||b("UserAgent").isBrowser("Firefox >= 38"))&&a.push("sdp_update");h()&&a.push("multiple_streams_plan_b");b("FBRTCScreenSharingUtils").canUserReceiveScreenSharing()&&a.push("screen_sharing");b("FBRTCSupport").isOSSupported()?a.push("www"):a.push("mweb");b("RTWebClientFeatureGating").initVideoInAudioCall()&&a.push("video_escalation_by_unmute");return a};function h(){return(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera"))&&b("FBRTCVersionDetection").webrtcVersion()>=34}e.exports=g}),null);