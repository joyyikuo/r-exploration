if (self.CavalryLogger) { CavalryLogger.start_js(["D4EAB"]); }

__d("FBRTCConfig",["CurrentUser","RTCSignalingExperiments"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=null,i=0,j={};a={setConfig:function(a){var b=a.isVCEndpointCall,c=a.meetingID,d=a.peerID;a=a.serverConfig;g=b;h=c;i=d;j=a},isVCEndpointCall:function(){return g},getMeetingID:function(){return h},getPeerID:function(){return i},statsInterpreterConfig:function(){return{bad_score_count:3,frr_weight:800,plr_weight:500,rtt_weight:2,score_threshold:1e3}},shouldAutoDisableVideo:function(){return!1},unsupportedBrowserUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.unsupported_browser)return j.troubleshooting_urls.unsupported_browser;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.user_media_error)return j.troubleshooting_urls.user_media_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.user_media_permission_error)return j.troubleshooting_urls.user_media_permission_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},supportedSignalingExperiments:function(){return b("RTCSignalingExperiments").getLocal()},isMessengerDotCom:function(){return j.is_messenger_dot_com},useMessengerCallUI:function(){return j.messenger_call_ui},useHDVideoQuality:function(){return j.use_hd_video_quality},shouldCreateDataChannel:function(){return j.data_channel},disableURLManager:function(){return j.disable_url_manager}};e.exports=a}),null);