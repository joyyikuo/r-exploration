if (self.CavalryLogger) { CavalryLogger.start_js(["ItPcc"]); }

__d("VideoComposerPublishDrawerContainer.react",["FluxContainer","React","VideoComposerPublishDrawer.react","VideoComposerPublishingStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("VideoComposerPublishingStore")]};a.calculateState=function(){var a=b("VideoComposerPublishingStore").getState(),c=a.isPosting,d=a.isPostPending;a=a.isDraft;c=(c||d)&&!a;return{isPublishing:c}};a.prototype.render=function(){return b("React").createElement(b("VideoComposerPublishDrawer.react"),this.state)};function a(){g.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);