if (self.CavalryLogger) { CavalryLogger.start_js(["e9ZIf"]); }

__d("AdsCFAdgroupContext",["AdsCFAdgroupStore","AdsCFAdgroupValidationStore","AdsCFCampaignContext","AdsCFUISlideshowFormatStore","AdsStoreUtils","adsCFActiveCampaignIDSelector","adsCFIsCreativeSplitTestSelector","adsCFSelectedAdgroupSelector","adsCreateSelector","adsCreateStoreSelector","adsCreateStoreThunkSelector","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("AdsCFCampaignContext"));g=c&&c.prototype;function a(a){__p&&__p();var c=b("adsCreateSelector")([a,b("AdsStoreUtils").toSelector(b("AdsCFAdgroupStore"))],function(a,b){return a.map(function(a){return b.get(a).getValue()})},{name:e.id+".selectedAdgroupsSelector"}),d=b("adsCreateSelector")([b("adsCFActiveCampaignIDSelector")],function(a){return a.ids.toArray()},{name:e.id+".selectedCampaignIDsSelector"});g.constructor.call(this,d);this.adgroupSelector=h;this.customSelectors_ASK_ACE_TEAM_BEFORE_USING={isSlideshowSelectedSelector:k};this.adgroupErrorMessageSpecSelector_DEPRECATED=j;this.adgroupErrorsSelector=i;this.selectedAdgroupIDsSelector=a;this.selectedAdgroupsSelector=c;this.adgroupPublishStatusSelector=b("adsCreateSelector")([a],function(a){return b("immutable").Map(a.map(function(a){return[a,{isNew:!0,hasDraft:!0}]}))},{name:e.id+".adgroupPublishStatusSelector"})}var h=b("adsCreateSelector")([b("adsCreateStoreSelector")([],function(a){return a},e.id),b("AdsStoreUtils").toSelector(b("AdsCFAdgroupStore"))],function(a,b){return b.has(a)?b.get(a).getValue():null},{name:e.id+".adgroupSelector"}),i=b("adsCreateSelector")([b("adsCreateStoreThunkSelector")(b("AdsCFAdgroupValidationStore"),b("AdsCFAdgroupValidationStore").getErrors.bind(b("AdsCFAdgroupValidationStore"))),b("adsCFIsCreativeSplitTestSelector"),b("adsCFSelectedAdgroupSelector")],function(a,b,c){return b?a(c.id):a()},{name:e.id+".adgroupErrorsSelector"}),j=b("adsCreateSelector")([b("adsCreateStoreThunkSelector")(b("AdsCFAdgroupValidationStore"),b("AdsCFAdgroupValidationStore").getErrorSpec.bind(b("AdsCFAdgroupValidationStore"))),b("adsCFIsCreativeSplitTestSelector"),b("adsCFSelectedAdgroupSelector")],function(a,b,c){return b?a([c.id]):a()},{name:e.id+".adgroupErrorMessageSpecSelector_DEPRECATED"}),k=b("AdsStoreUtils").toSelector(b("AdsCFUISlideshowFormatStore"));e.exports=a}),null);