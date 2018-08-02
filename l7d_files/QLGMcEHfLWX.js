if (self.CavalryLogger) { CavalryLogger.start_js(["f593j"]); }

__d("FBRTCVideoEscalationStore",["FBRTCCallControlActions","FBRTCConstants","FBRTCStore","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=25e3,i=1e4,j=b("keyMirror")({direct_video:null,escalated:null,escalation_declined:null,voip:null});c=babelHelpers.inherits(a,b("FBRTCStore"));g=c&&c.prototype;function a(a,b,c){g.constructor.call(this),this.$FBRTCVideoEscalationStore7=a,this.$FBRTCVideoEscalationStore2=b,this.$FBRTCVideoEscalationStore1=c,this.$FBRTCVideoEscalationStore4=c,this.$FBRTCVideoEscalationStore3=!1,this.$FBRTCVideoEscalationStore5=null,this.$FBRTCVideoEscalationStore8=null}a.prototype.isPending=function(){return!!this.$FBRTCVideoEscalationStore5};a.prototype.callHasEscalated=function(){return this.$FBRTCVideoEscalationStore1};a.prototype.getCallType=function(){if(!this.$FBRTCVideoEscalationStore2.isRemoteVideoSupported)return j.voip;else if(this.$FBRTCVideoEscalationStore4)return j.direct_video;else if(this.$FBRTCVideoEscalationStore1)return j.escalated;else if(this.$FBRTCVideoEscalationStore3)return j.escalation_declined;return j.voip};a.prototype.__onDispatch=function(a){__p&&__p();switch(a.type){case b("FBRTCCallControlActions").Types.RECEIVED_SIGNALING_MESSAGE:var c=a.message;a.message_type===b("FBRTCConstants").PayloadType.VIDEO_REQUEST&&(this.$FBRTCVideoEscalationStore3=!0,c.ackID?this.$FBRTCVideoEscalationStore10(c):this.$FBRTCVideoEscalationStore11(c));a.message_type===b("FBRTCConstants").PayloadType.ACK&&c.msg.ack_type===b("FBRTCConstants").PayloadType.VIDEO_REQUEST&&this.$FBRTCVideoEscalationStore12(c);break;case b("FBRTCCallControlActions").Types.ACCEPT_ESCALATION:this.$FBRTCVideoEscalationStore13(!0);break;case b("FBRTCCallControlActions").Types.DECLINE_ESCALATION:this.$FBRTCVideoEscalationStore13(!1);break;case b("FBRTCCallControlActions").Types.TOGGLE_MUTE_VIDEO:this.$FBRTCVideoEscalationStore3=!0;this.getDispatcher().waitFor([this.$FBRTCVideoEscalationStore2.getDispatchToken()]);this.$FBRTCVideoEscalationStore14();break}};a.prototype.$FBRTCVideoEscalationStore12=function(a){this.$FBRTCVideoEscalationStore8&&this.$FBRTCVideoEscalationStore8.msg_id===a.ackID&&this.$FBRTCVideoEscalationStore15()};a.prototype.$FBRTCVideoEscalationStore15=function(){clearTimeout(this.$FBRTCVideoEscalationStore6)};a.prototype.$FBRTCVideoEscalationStore16=function(){this.$FBRTCVideoEscalationStore6=setTimeout(function(){if(!this.$FBRTCVideoEscalationStore8)return;this.$FBRTCVideoEscalationStore7.resendPayload(this.$FBRTCVideoEscalationStore2.peerID,this.$FBRTCVideoEscalationStore8)}.bind(this),i)};a.prototype.$FBRTCVideoEscalationStore10=function(a){__p&&__p();if(!this.$FBRTCVideoEscalationStore8||a.ackID!==this.$FBRTCVideoEscalationStore8.msg_id)return;clearTimeout(this.$FBRTCVideoEscalationStore9);this.$FBRTCVideoEscalationStore15();var b=a.msg,c=a.peerID;a=a.callID;var d=this.$FBRTCVideoEscalationStore17(b);this.$FBRTCVideoEscalationStore7.sendAck(c,a,b);this.$FBRTCVideoEscalationStore8=null;this.$FBRTCVideoEscalationStore1=d;this.$FBRTCVideoEscalationStore18(d);!d&&this.$FBRTCVideoEscalationStore2.localStream.hasVideo()&&this.$FBRTCVideoEscalationStore2.localStream.toggleMuteVideo();this.__emitChange()};a.prototype.$FBRTCVideoEscalationStore11=function(a){if(this.$FBRTCVideoEscalationStore1){this.$FBRTCVideoEscalationStore17(a.msg)?(this.$FBRTCVideoEscalationStore5=a,this.$FBRTCVideoEscalationStore13(!0)):this.$FBRTCVideoEscalationStore2.remoteStream.setVideoEnabled(!1);return}var c=a.msg,d=a.peerID,e=a.callID;this.$FBRTCVideoEscalationStore7.sendAck(d,e,c);this.$FBRTCVideoEscalationStore17(c)?(this.$FBRTCVideoEscalationStore5=a,this.$FBRTCVideoEscalationStore9=setTimeout(function(){b("FBRTCCallControlActions").declineEscalation()},h)):this.$FBRTCVideoEscalationStore5=null;this.__emitChange()};a.prototype.$FBRTCVideoEscalationStore13=function(a){__p&&__p();clearTimeout(this.$FBRTCVideoEscalationStore9);if(this.$FBRTCVideoEscalationStore5){var b=this.$FBRTCVideoEscalationStore5,c=b.peerID,d=b.callID;b=b.msgID;this.$FBRTCVideoEscalationStore8=this.$FBRTCVideoEscalationStore7.sendVideoRequestResponse(c,d,b,a);this.$FBRTCVideoEscalationStore16();this.$FBRTCVideoEscalationStore1=a;this.$FBRTCVideoEscalationStore5=null;this.__emitChange()}};a.prototype.$FBRTCVideoEscalationStore14=function(){if(this.$FBRTCVideoEscalationStore1){this.$FBRTCVideoEscalationStore19();return}this.$FBRTCVideoEscalationStore8=this.$FBRTCVideoEscalationStore7.sendVideoEscalationRequest(this.$FBRTCVideoEscalationStore2.peerID,this.$FBRTCVideoEscalationStore2.callID,this.$FBRTCVideoEscalationStore2.localStream.hasVideo());this.$FBRTCVideoEscalationStore2.localStream.hasVideo()?(this.$FBRTCVideoEscalationStore16(),this.$FBRTCVideoEscalationStore9=setTimeout(function(){this.$FBRTCVideoEscalationStore2.localStream.hasVideo()&&b("FBRTCCallControlActions").toggleMuteVideo()}.bind(this),h)):(this.$FBRTCVideoEscalationStore15(),clearTimeout(this.$FBRTCVideoEscalationStore9),this.$FBRTCVideoEscalationStore8=null);this.__emitChange()};a.prototype.$FBRTCVideoEscalationStore19=function(){if(!this.$FBRTCVideoEscalationStore2.isRemoteVideoSupported)return;this.$FBRTCVideoEscalationStore7.sendMuteStateUpdate(this.$FBRTCVideoEscalationStore2.peerID,this.$FBRTCVideoEscalationStore2.callID,this.$FBRTCVideoEscalationStore2.localStream.hasVideo())};a.prototype.$FBRTCVideoEscalationStore18=function(a){this.$FBRTCVideoEscalationStore2.remoteStream.setVideoEnabled(a)};a.prototype.$FBRTCVideoEscalationStore17=function(a){return!!(a.reqVideoOn||a.videoon)};a.CallType=j;e.exports=a}),null);