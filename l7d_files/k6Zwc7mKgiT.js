if (self.CavalryLogger) { CavalryLogger.start_js(["5fwBq"]); }

__d("FBRTCMessage",["FBRTCConstants","FBRTCExperiment","FBRTCSdpUtils","FBRTCSupport"],(function(a,b,c,d,e,f){__p&&__p();var g="mobile";function a(a){"use strict";__p&&__p();if(!this.$1(a))throw new Error("invalid webrtc message");this.originalMessageData=a;this.peerID=a.from;this.callID=parseInt(a.call_id,10);this.msg=JSON.parse(a.payload);this.msg.json_payload&&(this.escalationName=this.msg.sessionName,this.msg=this.msg.json_payload);this.msgType=this.msg.type;this.msgID=this.msg.msg_id;this.ackID=this.msg.ack_id;this.source=a.source;this.peerSupportsVideoInterop=!!this.msg.supports_video_interop;this.$2();this.$3();this.$4();this.$5()}a.prototype.$1=function(a){"use strict";return a.from&&a.call_id&&a.payload};a.prototype.$2=function(){"use strict";if(this.peerSupportsVideoInterop)return;this.isFromMobile()&&this.disableVideo()};a.prototype.disableVideo=function(){"use strict";this.msg.sdp&&(this.msg.sdp=b("FBRTCSdpUtils").disableVideo(this.msg.sdp)),(this.msgType===b("FBRTCConstants").PayloadType.SET_VIDEO||this.msgType===b("FBRTCConstants").PayloadType.OFFER||this.msgType===b("FBRTCConstants").PayloadType.ICERESTART_OFFER||this.msgType===b("FBRTCConstants").PayloadType.ANSWER||this.msgType===b("FBRTCConstants").PayloadType.ICERESTART_ANSWER)&&(this.msg.videoon=!1)};a.prototype.$3=function(){"use strict";this.isFromMobile()&&this.msg.sdp&&this.msgType!==b("FBRTCConstants").PayloadType.ICE_CANDIDATE&&(this.msg.sdp=b("FBRTCSdpUtils").removeRED(this.msg.sdp))};a.prototype.$4=function(){"use strict";if(this.isFromMobile()&&b("FBRTCSupport").isWebrtcSupported()&&this.msg.sdp&&this.msgType!==b("FBRTCConstants").PayloadType.ICE_CANDIDATE){var a=b("FBRTCExperiment").gen("rtc_browser_use_h264");a=a.getParam("allow_h264","no");a!=="yes"&&(this.msg.sdp=b("FBRTCSdpUtils").removeH264(this.msg.sdp))}};a.prototype.$5=function(){"use strict";if(this.isFromMobile()&&b("FBRTCSupport").isWebrtcSupported()&&this.msg.sdp&&this.msgType!==b("FBRTCConstants").PayloadType.ICE_CANDIDATE){var a=b("FBRTCExperiment").gen("rtc_browser_use_vp9");a=a.getParam("allow_vp9","no");a!=="yes"&&(this.msg.sdp=b("FBRTCSdpUtils").removeVP9(this.msg.sdp))}};a.prototype.isOffer=function(){"use strict";return this.msgType===b("FBRTCConstants").PayloadType.OFFER};a.prototype.isFromMobile=function(){"use strict";return this.source===g};a.prototype.isRemoteVideoSupported=function(){"use strict";return!this.msg.sdp||this.msgType===b("FBRTCConstants").PayloadType.ICE_CANDIDATE?!0:b("FBRTCSdpUtils").isVideoSupported(this.msg.sdp)};a.prototype.isRetry=function(){"use strict";return!!this.msg.flag};a.prototype.isForCall=function(a,c){"use strict";return this.escalationName&&(this.msgType===b("FBRTCConstants").PayloadType.HANGUP||this.msgType===b("FBRTCConstants").PayloadType.SWITCH_TO_MULTIWAY)?c===this.escalationName:!a||a===this.callID||this.msgType===b("FBRTCConstants").PayloadType.OFFER||this.msgType===b("FBRTCConstants").PayloadType.ICERESTART_OFFER||this.msgType===b("FBRTCConstants").PayloadType.PCRESTART_OFFER||this.msgType===b("FBRTCConstants").PayloadType.ICE_CANDIDATE};a.prototype.getSignalingExperiments=function(){"use strict";return this.isFromMobile()&&!this.msg.experiments?["sdp_update"]:this.msg.experiments};e.exports=a}),null);