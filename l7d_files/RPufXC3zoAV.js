if (self.CavalryLogger) { CavalryLogger.start_js(["QIH68"]); }

__d("FBRTCCallSummaryUploader",["Banzai","FBRTCCallSummary","FBRTCCallSummaryStore"],(function(a,b,c,d,e,f){a={init:function(){var a=b("FBRTCCallSummaryStore").getInstance();b("Banzai").subscribe(b("Banzai").SEND,function(){b("FBRTCCallSummary").logSavedSummaries(a)})}};e.exports=a}),null);