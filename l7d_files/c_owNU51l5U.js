if (self.CavalryLogger) { CavalryLogger.start_js(["yaBwJ"]); }

__d("FBRTCCallSummary",["FBRTCConstants","FBRTCIceStatsParser","FBRTCLocalUploadLogLevel","FBRTCLogger","FBRTCMediaMetricsConst","FBRTCMediaMetricTracker","SiteData","UserAgentData","performanceNow"],(function(a,b,c,d,e,f){__p&&__p();var g=5*60*1e3,h={CALL_STARTED:"started",SENT_OFFER:"s_o",RECV_OFFER:"r_o",SENT_OFFER_ACK:"s_oack",RECV_OFFER_ACK:"r_oack",SENT_RETRIED_OFFER:"s_o2",RECV_RETRIED_OFFER:"r_o2",SENT_RETRIED_OFFER_ACK:"s_oack2",RECV_RETRIED_OFFER_ACK:"r_oack2",SENT_PRANSWER:"s_pr",RECV_PRANSWER:"r_pr",NETWORK_READY:"network_ready",SENT_ANSWER:"s_a",RECV_ANSWER:"r_a",SENT_ANSWER_ACK:"s_aack",RECV_ANSWER_ACK:"r_aack",SENT_RETRIED_ANSWER:"s_a2",RECV_RETRIED_ANSWER:"r_a2",SENT_RETRIED_ANSWER_ACK:"s_aack2",RECV_RETRIED_ANSWER_ACK:"r_aack2",SENT_OK:"s_ok",RECV_OK:"r_ok",CALL_CONNECTED:"connected",CALL_ENDED:"ended",SENT_JOIN_REQUEST:"s_jreq",RECV_JOIN_RESPONSE:"r_jresp",PROC_JOIN_RESPONSE:"p_jresp",RECV_RING_REQUEST:"r_rreq",SENT_RING_RESPONSE:"s_rresp"},i={FELLBACK_TO_AUDIO:"f_a",MEDIA_REQUESTED:"m_r",MEDIA_SUCCEEDED:"m_s",POPUP_OPENED:"opened",PRESSED_ANSWER:"p_a"},j={ESCALATION_IS_AVAILABLE:"esc_available",USER_INITIATED_REQUEST:"out_started",RECEIVED_INCOMING_REQUEST:"inc_started",REJECTED_INVALID_P2P_STATE:"rej_invalid_state",CONNECTING_TO_MULTIWAY:"u_connecting_mw",CONNECTED_TO_MULTIWAY:"u_connected_mw",PEER_CONNECTING_TO_MULTIWAY:"p_connecting_mw",PEER_CONNECTED_TO_MULTIWAY:"p_connected_mw",READY_TO_ESCALATE:"ready_esc",PEER_FAILED_TO_CONNECT_TO_MULTIWAY:"p_fail_conn",MULTIWAY_CALL_ENDED:"mw_call_ended",TIMED_OUT:"timed_out",PEER_ABORTED:"p_aborted",INTERNAL_ERROR:"internal_err"},k={ESCALATION_INITIATION_BUTTON_CLICKED:"esc_init_button",ESCALATION_APPROVED_BUTTON_CLICKED:"esc_appr_button",ESCALATION_DECLINED_BUTTON_CLICKED:"esc_decl_button",USERMEDIA_REQUEST:"media_req",USERMEDIA_SUCCESS:"media_success",USERMEDIA_FAILURE:"media_fail",SENT_ESC_REQUEST:"s_esc_req",RECV_ESC_REQUEST:"r_esc_req",SENT_ESC_REQUEST_ACK:"s_esc_req_ack",RECV_ESC_REQUEST_ACK:"s_esc_req_ack",SENT_ESC_RESPONSE:"s_esc_rep",RECV_ESC_ACCEPT:"r_esc_accept",RECV_ESC_DECLINE:"r_esc_decl",RECV_ESC_TIMEOUT:"r_esc_timeout"};l.nullSummary=function(){"use strict";return new l({peerID:"0",callID:"0",isCaller:!1,callTrigger:"NULL_SUMMARY"})};function l(a){"use strict";this.peerID=String(a.peerID),this.callID=String(a.callID),this.$1=a.isCaller,this.$2=b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel(),this.$13=new Date().valueOf(),this.$3=a.callTrigger||null,this.$4={},this.$6={},this.$7={},this.$12={},this.$35=null,this.$36=null,this.$37=null,this.$15=0,this.$16=0,this.$34=!1,this.$23={},this.$24={},this.$8={},this.$9={},this.$10={},this.$11={},this.$25=null,this.$18=b("performanceNow")(),this.$14=0,this.$5={},this.$17=this.$18,this.$19=0,this.$20={},this.addExtraInfo(b("FBRTCLogger").Key.DEVICE_INFO,this.$39()),this.$40(),this.$22=b("FBRTCIceStatsParser").getInstance(),this.$38=new(b("FBRTCMediaMetricTracker"))(),this.$21=b("FBRTCLogger").getInstance()}l.prototype.toJsonString=function(){"use strict";this.$16=new Date().valueOf();return JSON.stringify({version:l.CURRENT_SUMMARY_VERSION,peerID:this.peerID,callID:this.callID,isCaller:this.$1,uploadLogLevel:this.$2,clientVersion:this.$25,callType:this.$30,conferenceName:this.$27,joinWithSID:this.$28,activeConn:this.$26,escP2PCallID:this.$29,serverInfoData:this.$31,localVideoDuration:this.$32,remoteVideoDuration:this.$33,startTime:this.$13,trigger:this.$3,signalingTime:this.$4,escStateTimes:this.$6,applicationEventTime:this.$7,videoEscTimes:this.$12,endCallReason:this.$35,endCallSubreason:this.$36,isRemoteEnded:this.$37,lastUpdatedTime:this.$15,lastSerializedTime:this.$16,unsetOnRetrieve:this.$34,openCount:this.$19,extraInfo:this.$20,pcStats:this.$23,captureStats:this.$24,gen0IceSentCount:this.$8,gen0IceReceivedCount:this.$9,iceSentCount:this.$10,iceReceivedCount:this.$11,mediaMetricStats:this.$38.toJsonString(),newSignalingTime:this.$5,accumulatedCallTime:this.$41()})};l.fromJsonString=function(a){"use strict";__p&&__p();try{a=JSON.parse(a)}catch(a){return null}if(a.version!==l.CURRENT_SUMMARY_VERSION)return null;if(!Object.prototype.hasOwnProperty.call(a,"peerID")||!Object.prototype.hasOwnProperty.call(a,"callID")||!Object.prototype.hasOwnProperty.call(a,"isCaller")||!Object.prototype.hasOwnProperty.call(a,"startTime")||!Object.prototype.hasOwnProperty.call(a,"trigger")||!Object.prototype.hasOwnProperty.call(a,"signalingTime")||!Object.prototype.hasOwnProperty.call(a,"endCallReason")||!Object.prototype.hasOwnProperty.call(a,"isRemoteEnded")||!Object.prototype.hasOwnProperty.call(a,"lastUpdatedTime")||!Object.prototype.hasOwnProperty.call(a,"lastSerializedTime"))return null;var c=new l({peerID:a.peerID,callID:a.callID,isCaller:a.isCaller});c.$2=a.uploadLogLevel;c.$25=a.clientVersion;c.$13=a.startTime;c.$3=a.trigger;c.$4=a.signalingTime;c.$35=a.endCallReason;c.$36=a.endCallSubreason;c.$37=a.isRemoteEnded;c.$15=a.lastUpdatedTime;c.$16=a.lastSerializedTime;c.$28=a.joinWithSID;a.callType&&(c.$30=a.callType);a.conferenceName&&(c.$27=a.conferenceName);a.escP2PCallID&&(c.$29=a.escP2PCallID);a.activeConn&&(c.$26=a.activeConn);a.serverInfoData&&(c.$31=a.serverInfoData);a.localVideoDuration&&(c.$32=a.localVideoDuration);a.remoteVideoDuration&&(c.$33=a.remoteVideoDuration);a.unsetOnRetrieve&&(c.$34=a.unsetOnRetrieve);a.openCount&&(c.$19=a.openCount);a.extraInfo&&(c.$20=a.extraInfo);a.pcStats&&(c.$23=a.pcStats);a.captureStats&&(c.$24=a.captureStats);a.gen0IceSentCount&&(c.$8=a.gen0IceSentCount);a.gen0IceReceivedCount&&(c.$9=a.gen0IceReceivedCount);a.iceSentCount&&(c.$10=a.iceSentCount);a.iceReceivedCount&&(c.$11=a.iceReceivedCount);a.newSignalingTime&&(c.$5=a.newSignalingTime);a.accumulatedCallTime&&(c.$14=a.accumulatedCallTime);a.escStateTimes&&(c.$6=a.escStateTimes);a.applicationEventTime&&(c.$7=a.applicationEventTime);a.videoEscTimes&&(c.$12=a.videoEscTimes);a.mediaMetricStats&&(c.$38=b("FBRTCMediaMetricTracker").fromJsonString(a.mediaMetricStats));return c};l.restoreOrInitialize=function(a,c,d,e,f,g){"use strict";c=String(c);d=String(d);a=a.retrieveCallSummary(c,d);!a?(a=new l({peerID:c,callID:d,isCaller:e}),f?(a.onFullMessageReceived({msg:f}),a.onOfferAckSent(f)):a.onCallStarted(g||b("FBRTCLogger").Trigger.UNKNOWN),b("FBRTCLogger").getInstance().logError(c,d,"Missing call summary from storage")):a.$34&&(a.$35=null,a.$36=null,a.$37=null,delete a.$4[h.CALL_ENDED],delete a.$5[h.CALL_ENDED],a.$34=null);return a};l.logSavedSummaries=function(a){"use strict";__p&&__p();var c=a.getLoggableSummaries(),d=c.length;if(d<=0)return;var e=b("FBRTCLogger").getInstance(),f=[];for(var g=0;g<d;g++){var h=c[g];e.logEndCallSummary(h);f.push({peerID:h.peerID,callID:h.callID})}a.removeCallSummaries(f);e.logToConsole("Logged pending summaries: "+d)};l.prototype.isNull=function(){"use strict";var a=l.CANONICAL_NULL_SUMMARY;return this.peerID===a.peerID&&this.callID===a.callID&&this.isCaller()===a.isCaller()&&this.getCallTrigger()===a.getCallTrigger()};l.prototype.save=function(a){"use strict";var c=b("performanceNow")(),d=c-this.$17;if(d>g){this.$21.logInfo(this.peerID,this.callID,"Summary too old: "+d);return}a.storeCallSummary(this.peerID,this.callID,this);this.$17=c};l.prototype.getLastUpdatedTime=function(){"use strict";return this.$15};l.prototype.setLastUpdatedTime=function(a){"use strict";this.$15=a};l.prototype.getExtraInfo=function(){"use strict";return this.$20};l.prototype.getCallTrigger=function(){"use strict";return this.$3};l.prototype.addExtraInfo=function(a,b){"use strict";this.$20[a]=b,this.$40()};l.prototype.isCaller=function(){"use strict";return this.$1};l.prototype.isNetworkReady=function(){"use strict";if(this.$4[h.NETWORK_READY])return!0;else return!1};l.prototype.isAnswerReceived=function(){"use strict";if(this.$4[h.RECV_ANSWER])return!0;else return!1};l.prototype.onCallStarted=function(a){"use strict";this.$3=a,this.$42(h.CALL_STARTED),this.$40()};l.prototype.setCallTrigger=function(a){"use strict";this.$3=a,this.$40()};l.prototype.onPopupOpened=function(){"use strict";this.$43(i.POPUP_OPENED),this.$19++,this.$40()};l.prototype.onPressedAnswer=function(){"use strict";this.$43(i.PRESSED_ANSWER),this.$40()};l.prototype.onMediaRequested=function(){"use strict";this.$43(i.MEDIA_REQUESTED),this.$40()};l.prototype.onMediaSucceeded=function(){"use strict";this.$43(i.MEDIA_SUCCEEDED),this.$40()};l.prototype.onFellbackToAudio=function(){"use strict";this.$43(i.FELLBACK_TO_AUDIO),this.$40()};l.prototype.setPcStats=function(a){"use strict";this.$23=a,this.$40()};l.prototype.setVideoCaptureStats=function(a,b){"use strict";this.$24={w:a,h:b},this.$40()};l.prototype.setUploadLogLevel=function(a){"use strict";this.$2=a,this.$40()};l.prototype.getCallType=function(){"use strict";return this.$30};l.prototype.setCallType=function(a){"use strict";this.$30=a,this.addExtraInfo("call_type",a),this.$40()};l.prototype.setVideoDurations=function(a,b){"use strict";this.$32=a,this.$33=b,this.$40()};l.prototype.setScreenDuration=function(a){"use strict";this.addExtraInfo(b("FBRTCLogger").Key.SCREEN_DURATION,a)};l.prototype.setConferenceName=function(a){"use strict";this.$27=a,this.$40()};l.prototype.setTotalVideoFilterDuration=function(a){"use strict";this.addExtraInfo("rtc_video_duration_with_filter_enabled",Math.ceil(a).toString())};l.prototype.setCoExperienceEffectDuration=function(a){"use strict";this.addExtraInfo("rtc_effect_total_duration",Math.ceil(a).toString())};l.prototype.setEffectCount=function(a){"use strict";this.addExtraInfo("rtc_effect_count",a.toString())};l.prototype.setJoinWithSID=function(a){"use strict";this.$28=a,this.$40()};l.prototype.setServerInfoData=function(a){"use strict";this.$31=a,this.$40()};l.prototype.setActiveConnection=function(a){"use strict";this.$26=a,this.$40()};l.prototype.setEscalationP2PCallID=function(a){"use strict";this.$29=a,this.$40()};l.prototype.onOfferAckSent=function(a){"use strict";this.onMessageSent({type:b("FBRTCConstants").PayloadType.OFFER_ACK,flag:a.flag})};l.prototype.onMessageSent=function(a){"use strict";__p&&__p();var c=a.flag===1;switch(a.type){case b("FBRTCConstants").PayloadType.OFFER:this.$44(c,h.SENT_OFFER,h.SENT_RETRIED_OFFER);this.$45(a,this.$8,this.$10);break;case b("FBRTCConstants").PayloadType.ANSWER:this.$44(c,h.SENT_ANSWER,h.SENT_RETRIED_ANSWER);this.$45(a,this.$8,this.$10);break;case b("FBRTCConstants").PayloadType.OK:this.$42(h.SENT_OK);break;case b("FBRTCConstants").PayloadType.PRANSWER:this.$42(h.SENT_PRANSWER);break;case b("FBRTCConstants").PayloadType.OFFER_ACK:this.$44(c,h.SENT_OFFER_ACK,h.SENT_RETRIED_OFFER_ACK);break;case b("FBRTCConstants").PayloadType.ANSWER_ACK:this.$44(c,h.SENT_ANSWER_ACK,h.SENT_RETRIED_ANSWER_ACK);break;case b("FBRTCConstants").PayloadType.ICE_CANDIDATE:this.$45(a,this.$8,this.$10);break;case b("FBRTCConstants").PayloadType.ACK:a.ack_type===b("FBRTCConstants").PayloadType.VIDEO_REQUEST&&this.$46(k.SENT_ESC_REQUEST_ACK);break;case b("FBRTCConstants").PayloadType.VIDEO_REQUEST:a.ack_id?this.$46(k.SENT_ESC_RESPONSE):this.$46(k.SENT_ESC_REQUEST);break;default:}this.$40()};l.prototype.$45=function(a,b,c){"use strict";var d,e=null;a=this.$22.extractIceInfo(a.sdp);for(var f=0;f<a.length;f++)d=a[f].gen,e=a[f].type,d===0&&this.$47(b,e),this.$47(c,e)};l.prototype.$47=function(a,b){"use strict";!a[b]?a[b]=1:a[b]=a[b]+1};l.prototype.$48=function(a){"use strict";this.addExtraInfo(b("FBRTCLogger").Key.PEER_IS_MOBILE,a.isFromMobile()?"1":"0")};l.prototype.onFullMessageReceived=function(a){"use strict";__p&&__p();var c=a.msg,d=c.flag===1;switch(c.type){case b("FBRTCConstants").PayloadType.OFFER:this.$48(a);this.$44(d,h.RECV_OFFER,h.RECV_RETRIED_OFFER);this.$45(c,this.$9,this.$11);break;case b("FBRTCConstants").PayloadType.ANSWER:this.$48(a);this.$44(d,h.RECV_ANSWER,h.RECV_RETRIED_ANSWER);this.$45(c,this.$9,this.$11);break;case b("FBRTCConstants").PayloadType.OK:this.$42(h.RECV_OK);break;case b("FBRTCConstants").PayloadType.PRANSWER:this.$42(h.RECV_PRANSWER);break;case b("FBRTCConstants").PayloadType.OFFER_ACK:this.$44(d,h.RECV_OFFER_ACK,h.RECV_RETRIED_OFFER_ACK);break;case b("FBRTCConstants").PayloadType.ANSWER_ACK:this.$44(d,h.RECV_ANSWER_ACK,h.RECV_RETRIED_ANSWER_ACK);break;case b("FBRTCConstants").PayloadType.ICE_CANDIDATE:this.$45(c,this.$9,this.$11);break;case b("FBRTCConstants").PayloadType.ACK:c.ack_type===b("FBRTCConstants").PayloadType.VIDEO_REQUEST&&this.$46(k.RECV_ESC_REQUEST_ACK);break;case b("FBRTCConstants").PayloadType.VIDEO_REQUEST:c.ack_id?c.videoon||c.reqVideoOn?this.$46(k.RECV_ESC_ACCEPT):this.$46(k.RECV_ESC_DECLINE):c.videoon||c.reqVideoOn?this.$46(k.RECV_ESC_REQUEST):this.$46(k.RECV_ESC_TIMEOUT);default:}this.$40()};l.prototype.onMsgAckReceived=function(a,b){"use strict";a=a.msg.flag===1;b?this.$44(a,h.RECV_OFFER_ACK,h.RECV_RETRIED_OFFER_ACK):this.$44(a,h.RECV_ANSWER_ACK,h.RECV_RETRIED_ANSWER_ACK)};l.prototype.onNetworkReady=function(){"use strict";this.$42(h.NETWORK_READY),this.$40()};l.prototype.onCallConnected=function(){"use strict";this.$42(h.CALL_CONNECTED),this.$40()};l.prototype.onCallEnded=function(a,b,c,d){"use strict";this.$34=c,this.$35=String(a),this.$36=d,this.$37=b,this.$42(h.CALL_ENDED),this.$40()};l.prototype.setOfferSentTime=function(){"use strict";this.$42(h.SENT_OFFER)};l.prototype.setOfferAckReceivedTime=function(){"use strict";this.$42(h.RECV_OFFER_ACK)};l.prototype.setAnswerSentTime=function(){"use strict";this.$42(h.SENT_ANSWER)};l.prototype.setAnswerReceivedTime=function(){"use strict";this.$42(h.RECV_ANSWER)};l.prototype.setJoinRequestSent=function(){"use strict";this.$42(h.SENT_JOIN_REQUEST),this.$40()};l.prototype.setJoinResponseReceived=function(){"use strict";this.$42(h.RECV_JOIN_RESPONSE),this.$40()};l.prototype.setJoinResponseProcessed=function(){"use strict";this.$42(h.PROC_JOIN_RESPONSE),this.$40()};l.prototype.setRingRequestReceived=function(){"use strict";this.$42(h.RECV_RING_REQUEST),this.$40()};l.prototype.setRingResponseSent=function(){"use strict";this.$42(h.SENT_RING_RESPONSE),this.$40()};l.prototype.setEscalationAvailable=function(){"use strict";this.$49(j.ESCALATION_IS_AVAILABLE)};l.prototype.setEscalationInitiated=function(){"use strict";this.$49(j.USER_INITIATED_REQUEST)};l.prototype.setReceivedEscalationRequest=function(){"use strict";this.$49(j.RECEIVED_INCOMING_REQUEST)};l.prototype.setInvalidP2PEscalationState=function(){"use strict";this.$49(j.REJECTED_INVALID_P2P_STATE)};l.prototype.setEscalationConnectingToMultiway=function(){"use strict";this.$49(j.CONNECTING_TO_MULTIWAY)};l.prototype.setEscalationConnectedToMultiway=function(){"use strict";this.$49(j.CONNECTED_TO_MULTIWAY)};l.prototype.setEscalationPeerConnectingToMultiway=function(){"use strict";this.$49(j.PEER_CONNECTING_TO_MULTIWAY)};l.prototype.setEscalationPeerConnectedToMultiway=function(){"use strict";this.$49(j.PEER_CONNECTED_TO_MULTIWAY)};l.prototype.setReadyToEscalate=function(){"use strict";this.$49(j.READY_TO_ESCALATE)};l.prototype.setEscalationPeerFailedToConnectToMultiway=function(){"use strict";this.$49(j.PEER_FAILED_TO_CONNECT_TO_MULTIWAY)};l.prototype.setEscalationTimedOut=function(){"use strict";this.$49(j.TIMED_OUT)};l.prototype.setVidEscalationInitClick=function(){"use strict";this.$46(k.ESCALATION_INITIATION_BUTTON_CLICKED)};l.prototype.setVidEscalationAcceptedClick=function(){"use strict";this.$46(k.ESCALATION_APPROVED_BUTTON_CLICKED)};l.prototype.setVidEscalationDeclinedClick=function(){"use strict";this.$46(k.ESCALATION_DECLINED_BUTTON_CLICKED)};l.prototype.setVidEscalationMediaRequested=function(){"use strict";this.$46(k.USERMEDIA_REQUEST)};l.prototype.setVidEscalationMediaSuccess=function(){"use strict";this.$46(k.USERMEDIA_SUCCESS)};l.prototype.setVidEscalationMediaFailed=function(){"use strict";this.$46(k.USERMEDIA_FAILURE)};l.prototype.toString=function(){"use strict";var a={};a.core_metrics=this.$50();a.time_series=null;return JSON.stringify(a)};l.prototype.$50=function(){"use strict";__p&&__p();var a={};a.ver=l.CURRENT_SUMMARY_VERSION;a.log_level=b("FBRTCConstants").uploadLogLevelString(this.$2);a.caller=this.$1;a.call_type=this.$30;a.active_conn=this.$26;a.app_event_times=this.$7;a.conf_name=this.$27;a.join_with_sid=this.$28;a.esc_p2p_call_id=this.$29;a.esc_state_times=this.$6;a.vid_esc_times=this.$12;a.serv_info=this.$31;a.conn=this.$51();a.peer_id=this.peerID;a.has_video=!0;a.open_count=this.$19;a.signaling=this.$52();a.sender=this.$53();a.receiver=this.$54();a.end=this.$55();a.video=this.$56();a.push_phase=b("SiteData").push_phase;a.client_version=this.$25;a.DebugAudioMetrics=this.$57();return a};l.prototype.$57=function(){"use strict";return{NetworkReceive:{jb_nm:this.$58()}}};l.prototype.$58=function(){"use strict";var a={},b=this.$38.getAudioStreamReportKeys().pop(),c=this.$38.getMetricKeys(b);c.forEach(function(c){var d=this.$38.getMetricStats(b,c);d&&(a[c]={m:d.min,M:d.max,avg:d.mean})}.bind(this));c=this.$38.getJitterBufferStats(b);a.neteq={maxWait:c.max,meanWait:c.mean||0,mediaWait:c.median||0,minWait:c.min};return a};l.prototype.$51=function(){"use strict";var a={dtls:1};this.$23.sender&&this.$23.sender.rtt&&(a.rtt=this.$23.sender.rtt);return a};l.prototype.$52=function(){"use strict";__p&&__p();var a={};this.$3&&(a.trigger=this.$3);a.start_time=this.$13;a.time_from_start=this.$4;a.new_time_from_start=this.$5;var b=this.$5[h.CALL_CONNECTED]||this.$5[h.NETWORK_READY],c=this.$5[h.CALL_ENDED];if(b){c||(this.$14>0?c=this.$14:c=this.$41());c=c-b;c>0&&(a.duration=c)}return a};l.prototype.$53=function(){"use strict";var a={};this.$8&&(a.ice_g0=this.$8);this.$10&&(a.ice=this.$10);this.$23.sender&&Object.assign(a,this.$23.sender);return a};l.prototype.$54=function(){"use strict";var a={};this.$9&&(a.ice_g0=this.$9);this.$11&&(a.ice=this.$11);return a};l.prototype.$55=function(){"use strict";var a={};this.$35!==null&&(a.end_call_reason_string=b("FBRTCConstants").callEndReasonString(this.$35),this.$36!==null&&(a.end_call_subreason_string=this.$36),a.remote_ended=this.$37);this.$23.end&&Object.assign(a,this.$23.end);return a};l.prototype.$56=function(){"use strict";var a={capture:{},eqp:this.$59()};this.$23.video&&this.$23.video.sender&&Object.assign(a,this.$23.video.sender);this.$24&&Object.assign(a.capture,this.$24);return{sender:a,receiver:this.$60(),ld:this.$32,rd:this.$33,bwe:{avg_enc_bitrate:this.$61()}}};l.prototype.$61=function(){"use strict";__p&&__p();var a=this.$38.getVideoStreamReportKeys(),c=null;a.some(function(a){a=this.$38.getVideoMetric(a,b("FBRTCMediaMetricsConst").VIDEO_BYTES_SENT);if(a){var d=a.current-a.first;a=a.updatedTime-a.startedTime;a>0&&(c=d*8/a*1e3);return!0}return!1}.bind(this));return c};l.prototype.$59=function(){"use strict";__p&&__p();var a=this.$38.getVideoStreamReportKeys(),c=null;a.some(function(a){var d=this.$38.getVideoMetric(a,b("FBRTCMediaMetricsConst").OUTBOUND_QP);a=this.$38.getVideoMetric(a,b("FBRTCMediaMetricsConst").FRAMES_ENCODED);if(d&&a){c=d.current/a.current;return!0}return!1}.bind(this));return c};l.prototype.$62=function(){"use strict";__p&&__p();var a=this.$38.getVideoStreamReportKeys(),c=null;a.some(function(a){var d=this.$38.getVideoMetric(a,b("FBRTCMediaMetricsConst").INBOUND_QP);a=this.$38.getVideoMetric(a,b("FBRTCMediaMetricsConst").FRAMES_DECODED);if(d&&a){c=d.current/a.current;return!0}return!1}.bind(this));return c};l.prototype.$60=function(){"use strict";__p&&__p();var a={inboundEQp:this.$62(),dec_bytes:null,dec_time:null},c=this.$38.getVideoStreamReportKeys();c.some(function(c){c=this.$38.getVideoMetric(c,b("FBRTCMediaMetricsConst").VIDEO_BYTES_RECEIVED);if(c){a.dec_bytes=c.current-c.first;a.dec_time=c.updatedTime-c.startedTime;return!0}return!1}.bind(this));return a};l.prototype.$63=function(){"use strict";return new Date().valueOf()-this.$13};l.prototype.$41=function(){"use strict";var a=b("performanceNow")()-this.$18;return Math.floor(this.$14+a)};l.prototype.$42=function(a){"use strict";if(this.$4[a])return;this.$4[a]=this.$63();this.$5[a]=this.$41()};l.prototype.$49=function(a){"use strict";if(this.$6[a])return;this.$6[a]=this.$63()};l.prototype.$43=function(event){"use strict";if(this.$7[event])return;this.$7[event]=this.$63()};l.prototype.$46=function(event){"use strict";if(this.$12[event])return;this.$12[event]=this.$63()};l.prototype.$44=function(a,b,c){"use strict";a?this.$42(c):this.$42(b)};l.prototype.$40=function(){"use strict";this.$15=new Date().valueOf()};l.prototype.$39=function(){"use strict";return{device:b("UserAgentData").deviceName,os:b("UserAgentData").platformName,os_version:b("UserAgentData").platformFullVersion,browser:b("UserAgentData").browserName,browser_version:b("UserAgentData").browserFullVersion,screen_height:window.screen.availHeight,screen_width:window.screen.availWidth}};l.prototype.setClientVersion=function(a){"use strict";this.$25=a};l.prototype.getCallDuration=function(){"use strict";var a=this.$52();return a.duration?a.duration:0};l.prototype.getConnectedStartTime=function(){"use strict";return this.$4[h.CALL_CONNECTED]?this.$4[h.CALL_CONNECTED]+this.$13:0};l.prototype.getCurrentTimeFromCallConnected=function(){"use strict";var a=this.$5[h.CALL_CONNECTED];return this.$41()-a};l.prototype.getMediaMetricTracker=function(){"use strict";return this.$38};l.CANONICAL_NULL_SUMMARY=Object.freeze(l.nullSummary());l.CURRENT_SUMMARY_VERSION=19;l.REPORT_KEY="reportID";e.exports=l}),null);