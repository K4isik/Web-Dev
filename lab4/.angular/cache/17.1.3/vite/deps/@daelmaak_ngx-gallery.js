import {
  DomSanitizer
} from "./chunk-CKJ2FRFV.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-L42NEIK5.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgZone,
  Output,
  Pipe,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YUUC2MIQ.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
var _AnimationBuilder = class _AnimationBuilder {
};
_AnimationBuilder.ɵfac = function AnimationBuilder_Factory(t) {
  return new (t || _AnimationBuilder)();
};
_AnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _AnimationBuilder,
  factory: () => (() => inject(BrowserAnimationBuilder))(),
  providedIn: "root"
});
var AnimationBuilder = _AnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var _BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
};
_BrowserAnimationBuilder.ɵfac = function BrowserAnimationBuilder_Factory(t) {
  return new (t || _BrowserAnimationBuilder)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
};
_BrowserAnimationBuilder.ɵprov = ɵɵdefineInjectable({
  token: _BrowserAnimationBuilder,
  factory: _BrowserAnimationBuilder.ɵfac,
  providedIn: "root"
});
var BrowserAnimationBuilder = _BrowserAnimationBuilder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.ɵtype;
  return type === 0 || type === 1;
}

// node_modules/@daelmaak/ngx-gallery/fesm2022/daelmaak-ngx-gallery.mjs
var _c0 = ["thumbs"];
var _c1 = ["thumb"];
function ThumbsComponent_button_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "chevron-icon");
    ɵɵelementEnd();
  }
}
function ThumbsComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function ThumbsComponent_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.slide(-1));
    });
    ɵɵtemplate(1, ThumbsComponent_button_0_div_1_Template, 2, 0, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.arrowTemplate)("ngIfElse", ctx_r0.arrowTemplate);
  }
}
function ThumbsComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
  }
}
function ThumbsComponent_li_4_ng_container_2_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelement(1, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ɵɵnextContext(3).$implicit;
    ɵɵadvance();
    ɵɵclassProp("thumbs-error-icon--video", item_r8.video);
  }
}
function ThumbsComponent_li_4_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ThumbsComponent_li_4_ng_container_2_ng_container_2_div_1_Template, 2, 2, "div", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r14.errorTemplate)("ngIfElse", ctx_r14.errorTemplate);
  }
}
function ThumbsComponent_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "img", 11);
    ɵɵlistener("load", function ThumbsComponent_li_4_ng_container_2_Template_img_load_1_listener() {
      ɵɵrestoreView(_r19);
      const item_r8 = ɵɵnextContext().$implicit;
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.onLoadChange(item_r8, true));
    })("error", function ThumbsComponent_li_4_ng_container_2_Template_img_error_1_listener() {
      ɵɵrestoreView(_r19);
      const item_r8 = ɵɵnextContext().$implicit;
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.onLoadChange(item_r8, false));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, ThumbsComponent_li_4_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("src", item_r8.thumbSrc || "", ɵɵsanitizeUrl)("alt", item_r8.alt);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r8._thumbFailed);
  }
}
function ThumbsComponent_li_4_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c2 = (a0, a1, a2) => ({
  index: a0,
  selectedIndex: a1,
  item: a2
});
function ThumbsComponent_li_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ThumbsComponent_li_4_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r24 = ɵɵnextContext();
    const i_r9 = ctx_r24.index;
    const item_r8 = ctx_r24.$implicit;
    const ctx_r12 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.thumbTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c2, i_r9, ctx_r12.selectedIndex, item_r8));
  }
}
function ThumbsComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8, 9);
    ɵɵlistener("click", function ThumbsComponent_li_4_Template_li_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r26);
      const i_r9 = restoredCtx.index;
      const item_r8 = restoredCtx.$implicit;
      const ctx_r25 = ɵɵnextContext();
      return ɵɵresetView(ctx_r25.emitEvent(i_r9, item_r8, $event, ctx_r25.thumbClick));
    })("mouseenter", function ThumbsComponent_li_4_Template_li_mouseenter_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r26);
      const i_r9 = restoredCtx.index;
      const item_r8 = restoredCtx.$implicit;
      const ctx_r27 = ɵɵnextContext();
      return ɵɵresetView(ctx_r27.emitEvent(i_r9, item_r8, $event, ctx_r27.thumbHover));
    });
    ɵɵtemplate(2, ThumbsComponent_li_4_ng_container_2_Template, 3, 3, "ng-container", 6)(3, ThumbsComponent_li_4_ng_template_3_Template, 1, 6, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const _r13 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("thumbs-item--selected", i_r9 === ctx_r3.selectedIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r3.thumbTemplate)("ngIfElse", _r13);
  }
}
function ThumbsComponent_button_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "chevron-icon");
    ɵɵelementEnd();
  }
}
function ThumbsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ThumbsComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r30);
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.slide(1));
    });
    ɵɵtemplate(1, ThumbsComponent_button_5_div_1_Template, 2, 0, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.arrowTemplate)("ngIfElse", ctx_r4.arrowTemplate);
  }
}
var _c3 = ["itemList"];
var _c4 = ["itemsRef"];
function ViewerComponent_button_0_chevron_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "chevron-icon");
  }
}
function ViewerComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("mousedown", function ViewerComponent_button_0_Template_button_mousedown_0_listener($event) {
      return $event.stopPropagation();
    })("click", function ViewerComponent_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.selectByDelta(-ctx_r10.moveByItems));
    });
    ɵɵtemplate(1, ViewerComponent_button_0_chevron_icon_1_Template, 1, 0, "chevron-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.arrowTemplate)("ngIfElse", ctx_r0.arrowTemplate);
  }
}
function ViewerComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 10);
  }
}
function ViewerComponent_li_4_ng_container_2_picture_1_source_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "source", 20);
  }
  if (rf & 2) {
    const source_r23 = ctx.$implicit;
    ɵɵproperty("srcset", source_r23.srcset);
    ɵɵattribute("media", source_r23.media)("sizes", source_r23.sizes)("type", source_r23.type);
  }
}
function ViewerComponent_li_4_ng_container_2_picture_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "picture");
    ɵɵtemplate(1, ViewerComponent_li_4_ng_container_2_picture_1_source_1_Template, 1, 4, "source", 18);
    ɵɵelement(2, "img", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r12 = ɵɵnextContext(2).$implicit;
    const ctx_r19 = ɵɵnextContext();
    ɵɵproperty("@mediaAnimate", void 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", item_r12.pictureSources);
    ɵɵadvance();
    ɵɵstyleProp("object-fit", ctx_r19.objectFit);
    ɵɵproperty("src", item_r12.src, ɵɵsanitizeUrl)("alt", item_r12.alt);
    ɵɵattribute("loading", ctx_r19.loading);
  }
}
function ViewerComponent_li_4_ng_container_2_video_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "video", 21);
  }
  if (rf & 2) {
    const item_r12 = ɵɵnextContext(2).$implicit;
    const ctx_r20 = ɵɵnextContext();
    ɵɵstyleProp("object-fit", ctx_r20.objectFit);
    ɵɵproperty("@mediaAnimate", void 0)("src", item_r12.src, ɵɵsanitizeUrl)("poster", item_r12.thumbSrc || "", ɵɵsanitizeUrl);
    ɵɵattribute("preload", ctx_r20.loading === "lazy" ? "metadata" : "auto");
  }
}
function ViewerComponent_li_4_ng_container_2_iframe_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe", 22);
    ɵɵpipe(1, "safe");
  }
  if (rf & 2) {
    const item_r12 = ɵɵnextContext(2).$implicit;
    const ctx_r21 = ɵɵnextContext();
    ɵɵproperty("@mediaAnimate", void 0)("src", ɵɵpipeBind1(1, 3, item_r12.src), ɵɵsanitizeResourceUrl);
    ɵɵattribute("loading", ctx_r21.loading);
  }
}
function ViewerComponent_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ViewerComponent_li_4_ng_container_2_picture_1_Template, 3, 7, "picture", 13)(2, ViewerComponent_li_4_ng_container_2_video_2_Template, 1, 6, "video", 16)(3, ViewerComponent_li_4_ng_container_2_iframe_3_Template, 2, 5, "iframe", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r12 = ɵɵnextContext().$implicit;
    const ctx_r15 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r12.video);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r15.isYoutube(item_r12) && item_r12.video);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r15.isYoutube(item_r12));
  }
}
function ViewerComponent_li_4_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24)(1, "div", 25);
    ɵɵtext(2, "⚠");
    ɵɵelementEnd();
    ɵɵelementStart(3, "p", 26);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r28.errorText || "Loading of this media failed", " ");
  }
}
function ViewerComponent_li_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ViewerComponent_li_4_ng_container_3_div_1_Template, 5, 1, "div", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r16.errorTemplate)("ngIfElse", ctx_r16.errorTemplate);
  }
}
function ViewerComponent_li_4_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c5 = (a0, a1, a2, a3) => ({
  index: a0,
  selectedIndex: a1,
  item: a2,
  video: a3
});
function ViewerComponent_li_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ViewerComponent_li_4_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const item_r12 = ɵɵnextContext().$implicit;
    const ctx_r17 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r17.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c5, ctx_r17.items == null ? null : ctx_r17.items.indexOf(item_r12), ctx_r17.selectedIndex, item_r12, item_r12.video));
  }
}
function ViewerComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 11, 12);
    ɵɵlistener("click", function ViewerComponent_li_4_Template_li_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r32);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.onImageClick(item_r12, $event));
    })("mediaLoadError", function ViewerComponent_li_4_Template_li_mediaLoadError_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r32);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r33 = ɵɵnextContext();
      return ɵɵresetView(ctx_r33.onItemErrored(item_r12));
    })("keydown.Tab", function ViewerComponent_li_4_Template_li_keydown_Tab_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r32);
      const i_r13 = restoredCtx.index;
      const ctx_r34 = ɵɵnextContext();
      return ɵɵresetView(ctx_r34.onTab(i_r13 + 1));
    })("keydown.shift.Tab", function ViewerComponent_li_4_Template_li_keydown_shift_Tab_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r32);
      const i_r13 = restoredCtx.index;
      const ctx_r35 = ɵɵnextContext();
      return ɵɵresetView(ctx_r35.onTab(i_r13 - 1));
    });
    ɵɵtemplate(2, ViewerComponent_li_4_ng_container_2_Template, 4, 3, "ng-container", 9)(3, ViewerComponent_li_4_ng_container_3_Template, 2, 2, "ng-container", 13);
    ɵɵelement(4, "span", 14);
    ɵɵtemplate(5, ViewerComponent_li_4_ng_template_5_Template, 1, 7, "ng-template", null, 15, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const _r18 = ɵɵreference(6);
    const ctx_r3 = ɵɵnextContext();
    ɵɵattribute("tabindex", ctx_r3.itemTabbable(i_r13))("aria-label", item_r12.alt)("aria-describedby", "viewer-aria-description-" + i_r13);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r3.itemTemplate)("ngIfElse", _r18);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.itemFailedToLoad(item_r12));
    ɵɵadvance();
    ɵɵproperty("id", "viewer-aria-description-" + i_r13)("innerHTML", item_r12.description, ɵɵsanitizeHtml);
  }
}
function ViewerComponent_button_5_chevron_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "chevron-icon");
  }
}
function ViewerComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("mousedown", function ViewerComponent_button_5_Template_button_mousedown_0_listener($event) {
      return $event.stopPropagation();
    })("click", function ViewerComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r39);
      const ctx_r38 = ɵɵnextContext();
      return ɵɵresetView(ctx_r38.selectByDelta(ctx_r38.moveByItems));
    });
    ɵɵtemplate(1, ViewerComponent_button_5_chevron_icon_1_Template, 1, 0, "chevron-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.arrowTemplate)("ngIfElse", ctx_r4.arrowTemplate);
  }
}
function ViewerComponent_counter_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "counter", 28);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("itemQuantity", ctx_r5.items.length)("selectedIndex", ctx_r5.counterIndex)("orientation", ctx_r5.counterOrientation);
  }
}
function ViewerComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ViewerComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵlistener("click", function ViewerComponent_div_8_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r43);
      const ctx_r42 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r42.descriptionClick.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const description_r41 = ctx.ngIf;
    ɵɵproperty("innerHTML", description_r41, ɵɵsanitizeHtml);
  }
}
function ViewerComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, ViewerComponent_div_8_div_1_Template, 1, 1, "div", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassProp("viewer-description--above-counter", ctx_r7.counter && ctx_r7.counterOrientation === "bottom");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.items[ctx_r7.selectedIndex] == null ? null : ctx_r7.items[ctx_r7.selectedIndex].description);
  }
}
var _c6 = (a0) => ({
  selectedIndex: a0
});
function GalleryComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.aria.galleryLabel, "\n");
  }
}
function GalleryComponent_thumbs_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "thumbs", 4);
    ɵɵlistener("thumbClick", function GalleryComponent_thumbs_1_Template_thumbs_thumbClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2._onThumbClick($event));
    })("thumbHover", function GalleryComponent_thumbs_1_Template_thumbs_thumbHover_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.thumbHover.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("items", ctx_r1.items)("selectedIndex", ctx_r1.selectedIndex)("orientation", ctx_r1.thumbsOrientation)("arrows", ctx_r1.thumbsArrows)("arrowSlideByLength", ctx_r1.thumbsArrowSlideByLength)("autoScroll", ctx_r1.thumbsAutoScroll)("scrollBehavior", ctx_r1.thumbsScrollBehavior)("thumbTemplate", ctx_r1.thumbTemplate)("arrowTemplate", ctx_r1.thumbsArrowTemplate)("errorTemplate", ctx_r1.thumbErrorTemplate)("aria", ctx_r1.aria)("isRtl", ctx_r1.isRtl);
  }
}
var defaultAria = {
  galleryLabel: "Image Gallery",
  viewerLabel: "Displayed gallery images."
};
var isBrowser = typeof window !== "undefined";
var SUPPORT = {
  scrollBehavior: isBrowser && "scrollBehavior" in document.body.style
};
var UA = {
  ios: isBrowser && !!window.navigator.userAgent.match(/iP(ad|hone|od)/)
};
var orientations = {
  left: 2,
  right: 4,
  top: 8,
  bottom: 16
  /* OrientationFlag.BOTTOM */
};
var _ChevronIconComponent = class _ChevronIconComponent {
};
_ChevronIconComponent.ɵfac = function ChevronIconComponent_Factory(t) {
  return new (t || _ChevronIconComponent)();
};
_ChevronIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _ChevronIconComponent,
  selectors: [["chevron-icon"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 17,
  vars: 0,
  consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 407.436 407.436", 0, "xml", "space", "preserve"], ["points", "112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "]],
  template: function ChevronIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "polygon", 1)(2, "g")(3, "g")(4, "g")(5, "g")(6, "g")(7, "g")(8, "g")(9, "g")(10, "g")(11, "g")(12, "g")(13, "g")(14, "g")(15, "g")(16, "g");
      ɵɵelementEnd();
    }
  },
  styles: ["svg[_ngcontent-%COMP%]{width:26px;height:26px}svg[_ngcontent-%COMP%]{fill:#fff;filter:drop-shadow(0 0 1px black);display:block}"],
  changeDetection: 0
});
var ChevronIconComponent = _ChevronIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronIconComponent, [{
    type: Component,
    args: [{
      selector: "chevron-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: '<!-- Icon made by Dave Gandy from www.flaticon.com -->\n<svg\n  version="1.1"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  x="0px"\n  y="0px"\n  viewBox="0 0 407.436 407.436"\n  xml:space="preserve"\n>\n  <polygon\n    points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "\n  />\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n</svg>\n',
      styles: ["svg{width:26px;height:26px}svg{fill:#fff;filter:drop-shadow(0 0 1px black);display:block}\n"]
    }]
  }], null, null);
})();
var _ThumbsComponent = class _ThumbsComponent {
  get cssClass() {
    return `thumbs--${this.orientation}`;
  }
  get hostOffsetAxis() {
    return this.vertical ? this.elRef.nativeElement.offsetHeight : this.elRef.nativeElement.offsetWidth;
  }
  get scrollKey() {
    return this.vertical ? "scrollTop" : "scrollLeft";
  }
  get thumbsEmpty() {
    return !this.thumbsRef || !this.thumbsRef.length;
  }
  get vertical() {
    return this.orientation === "left" || this.orientation === "right";
  }
  constructor(cd, elRef) {
    this.cd = cd;
    this.elRef = elRef;
    this.items = [];
    this.thumbClick = new EventEmitter();
    this.thumbHover = new EventEmitter();
    this.showStartArrow = false;
    this.showEndArrow = false;
    this.onArrowsObserved = (entries) => {
      if (this.thumbsEmpty)
        return;
      const firstTarget = entries[0].target;
      const {
        first,
        last
      } = this.thumbsRef;
      const firstThumbEntry = firstTarget === first.nativeElement ? entries[0] : entries[1];
      const lastThumbEntry = firstTarget === last.nativeElement ? entries[0] : entries[1];
      this.setObservedArrows(firstThumbEntry, lastThumbEntry);
      this.cd.detectChanges();
    };
  }
  ngOnChanges({
    arrows,
    items
  }) {
    if (arrows) {
      if (arrows.currentValue) {
        this.observeArrows();
      } else if (!arrows.currentValue) {
        this.showStartArrow = this.showEndArrow = false;
        this.unobserveArrows();
      }
    }
    if (items) {
      setTimeout(() => {
        if (this.arrows) {
          this.observeArrows();
        }
        this.centerThumbIfNeeded(this.selectedIndex);
      });
    }
  }
  ngOnDestroy() {
    this.unobserveArrows();
  }
  slide(direction) {
    let delta;
    if (this.arrowSlideByLength) {
      delta = this.arrowSlideByLength;
    } else {
      const thumbList = this.thumbListRef.nativeElement;
      const thumbListScrollAxis = this.vertical ? thumbList.scrollHeight : thumbList.scrollWidth;
      const thumbListOffsetAxis = this.vertical ? thumbList.offsetHeight : thumbList.offsetWidth;
      delta = Math.min(thumbListOffsetAxis, thumbListScrollAxis - thumbListOffsetAxis);
    }
    this.scroll(delta * direction);
  }
  centerThumbIfNeeded(index) {
    if (!this.items || this.items.length <= 1) {
      return;
    }
    const nextItemRef = this.thumbsRef.toArray()[index];
    if (!nextItemRef) {
      return;
    }
    const nextItemEl = nextItemRef.nativeElement;
    const {
      offsetLeft,
      offsetTop,
      offsetWidth,
      offsetHeight
    } = nextItemEl;
    const itemOffset = this.vertical ? offsetTop : offsetLeft;
    const itemOffsetAxis = this.vertical ? offsetHeight : offsetWidth;
    const hostScrollAxis = this.hostOffsetAxis;
    const thumbListScroll = this.thumbListRef.nativeElement[this.scrollKey];
    const nextScrollDelta = itemOffset + itemOffsetAxis / 2 - hostScrollAxis / 2 - thumbListScroll;
    if (thumbListScroll + hostScrollAxis < itemOffset + itemOffsetAxis || thumbListScroll > itemOffset) {
      this.scroll(nextScrollDelta);
    }
  }
  select(index) {
    this.selectedIndex = index;
    this.cd.detectChanges();
    if (this.autoScroll) {
      setTimeout(() => this.centerThumbIfNeeded(index));
    }
  }
  emitEvent(index, item, event, emitter) {
    emitter.emit({
      index,
      item,
      event
    });
  }
  onLoadChange(item, success) {
    item._thumbFailed = !success;
  }
  scroll(totalScrollDelta) {
    if (!isBrowser) {
      return;
    }
    if (SUPPORT.scrollBehavior || this.scrollBehavior === "auto") {
      this.shiftByDelta(totalScrollDelta);
      return;
    }
    if (this.scrollId != null) {
      cancelAnimationFrame(this.scrollId);
    }
    const totalDistance = Math.abs(totalScrollDelta);
    const startTime = Date.now();
    const baseArrowSlideTime = 200;
    let totalTime = (Math.log10(totalDistance) - 1.1) * baseArrowSlideTime;
    if (totalTime < 0) {
      totalTime = baseArrowSlideTime;
    }
    let currentScroll = 0;
    const animate2 = () => {
      const suggestedScroll = Math.ceil((Date.now() - startTime) / totalTime * totalDistance);
      let frameScroll = Math.min(suggestedScroll - currentScroll, totalDistance - currentScroll);
      frameScroll *= Math.sign(totalScrollDelta);
      currentScroll = suggestedScroll;
      this.shiftByDelta(frameScroll);
      if (currentScroll <= totalDistance) {
        this.scrollId = requestAnimationFrame(animate2);
      }
    };
    this.scrollId = requestAnimationFrame(animate2);
  }
  shiftByDelta(delta) {
    this.thumbListRef.nativeElement[this.scrollKey] += delta;
  }
  observeArrows() {
    if (this.thumbsEmpty)
      return;
    if (!this.arrowObserver) {
      this.arrowObserver = new IntersectionObserver(this.onArrowsObserved, {
        root: this.thumbListRef.nativeElement,
        threshold: 1
      });
    } else {
      this.unobserveArrows();
    }
    this.arrowObserver.observe(this.thumbsRef.first.nativeElement);
    this.arrowObserver.observe(this.thumbsRef.last.nativeElement);
  }
  setObservedArrows(firstThumb, lastThumb) {
    const inverse = this.isRtl && !this.vertical;
    if (inverse) {
      if (lastThumb)
        this.showStartArrow = lastThumb.intersectionRatio < 1;
      if (firstThumb)
        this.showEndArrow = firstThumb.intersectionRatio < 1;
    } else {
      if (firstThumb)
        this.showStartArrow = firstThumb.intersectionRatio < 1;
      if (lastThumb)
        this.showEndArrow = lastThumb.intersectionRatio < 1;
    }
  }
  unobserveArrows() {
    this.arrowObserver && this.arrowObserver.disconnect();
  }
};
_ThumbsComponent.ɵfac = function ThumbsComponent_Factory(t) {
  return new (t || _ThumbsComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
_ThumbsComponent.ɵcmp = ɵɵdefineComponent({
  type: _ThumbsComponent,
  selectors: [["thumbs"]],
  viewQuery: function ThumbsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumbListRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumbsRef = _t);
    }
  },
  hostVars: 2,
  hostBindings: function ThumbsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.cssClass);
    }
  },
  inputs: {
    items: "items",
    selectedIndex: "selectedIndex",
    aria: "aria",
    orientation: "orientation",
    arrows: "arrows",
    arrowSlideByLength: "arrowSlideByLength",
    autoScroll: "autoScroll",
    thumbTemplate: "thumbTemplate",
    arrowTemplate: "arrowTemplate",
    errorTemplate: "errorTemplate",
    scrollBehavior: "scrollBehavior",
    isRtl: "isRtl"
  },
  outputs: {
    thumbClick: "thumbClick",
    thumbHover: "thumbHover"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 8,
  consts: [["aria-label", "Previous thumbnails", "class", "thumbs-arrow thumbs-arrow-prev", 3, "click", 4, "ngIf"], ["thumbs", ""], ["class", "thumbs-initial-item", 4, "ngIf"], ["aria-hidden", "true", 3, "thumbs-item--selected", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["aria-label", "Next thumbnails", "class", "thumbs-arrow thumbs-arrow-next", 3, "click", 4, "ngIf"], ["aria-label", "Previous thumbnails", 1, "thumbs-arrow", "thumbs-arrow-prev", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "thumbs-initial-item"], ["aria-hidden", "true", 3, "click", "mouseenter"], ["thumb", ""], ["customThumbTemplate", ""], [3, "src", "alt", "load", "error"], [4, "ngIf"], ["class", "thumbs-error", 4, "ngIf", "ngIfElse"], [1, "thumbs-error"], [1, "thumbs-error-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", "Next thumbnails", 1, "thumbs-arrow", "thumbs-arrow-next", 3, "click"]],
  template: function ThumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ThumbsComponent_button_0_Template, 2, 2, "button", 0);
      ɵɵelementStart(1, "ul", null, 1);
      ɵɵtemplate(3, ThumbsComponent_li_3_Template, 1, 0, "li", 2)(4, ThumbsComponent_li_4_Template, 5, 4, "li", 3);
      ɵɵelementEnd();
      ɵɵtemplate(5, ThumbsComponent_button_5_Template, 2, 2, "button", 4);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showStartArrow);
      ɵɵadvance();
      ɵɵstyleProp("scroll-behavior", ctx.scrollBehavior);
      ɵɵclassProp("rtl", ctx.isRtl);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.items || !ctx.items.length);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.items);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showEndArrow);
    }
  },
  dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, ChevronIconComponent],
  styles: ['[_nghost-%COMP%]{flex:1 0 auto;position:relative;background-color:#f3f3f3}.thumbs--top[_nghost-%COMP%], .thumbs--bottom[_nghost-%COMP%]{width:100%}.thumbs--top[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;display:flex;overflow-x:scroll;overflow-y:hidden}.thumbs--top[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child, .thumbs--bottom[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-left:0;margin-right:auto}.thumbs--top[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .thumbs--bottom[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0;margin-left:auto}.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]{flex:none}.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child), .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child){border-left:0}.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:first-child, .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-left:auto}.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:last-child, .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:auto}.thumbs--top[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]{top:0;height:100%}.thumbs--top[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:100%}.thumbs--top[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%]{left:0}.thumbs--top[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%]{right:0}.thumbs--top[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%]{border-right:1px solid #cecece}.thumbs--left[_nghost-%COMP%], .thumbs--right[_nghost-%COMP%]{height:100%}.thumbs--left[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;overflow-y:scroll;overflow-x:hidden}.thumbs--left[_nghost-%COMP%]   li[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   li[_ngcontent-%COMP%]{border-top:0}.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]{width:100%}.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:30px}.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}.thumbs--left[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%]{top:0}.thumbs--left[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%]{bottom:0}.thumbs--left[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%]{border-bottom:1px solid #cecece}.thumbs--bottom[_nghost-%COMP%], .thumbs--right[_nghost-%COMP%]{order:1}ul[_ngcontent-%COMP%]{outline:0;scrollbar-width:none;-webkit-overflow-scrolling:touch;transform:translateZ(0)}ul[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}li[_ngcontent-%COMP%]{box-sizing:border-box;width:120px;height:80px;position:relative;cursor:pointer}li.thumbs-initial-item[_ngcontent-%COMP%]{visibility:hidden}li.thumbs-item--selected[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;left:0;bottom:0;width:100%;height:100%;border:10px solid rgba(255,255,255,.8117647059);box-sizing:border-box}img[_ngcontent-%COMP%]{width:100%;height:100%;background-repeat:no-repeat;background-position:center;object-fit:cover;color:transparent}.thumbs-error[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background:#e8e8e8;box-sizing:border-box}.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video){position:relative;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:28px solid #a5a5a5;margin-left:-8px}.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video):before, .thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video):after{content:"";position:absolute}.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video):before{height:10px;width:10px;background-color:#a5a5a5;border-radius:100%;left:14px}.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video):after{border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:17px solid #a5a5a5;top:11px}.thumbs-error-icon--video[_ngcontent-%COMP%]{border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:28px solid #a5a5a5;margin-left:9px}.thumbs-arrow[_ngcontent-%COMP%]{position:absolute;padding:0;background-color:transparent;cursor:pointer;z-index:10}.thumbs-arrow-prev[_ngcontent-%COMP%]{transform:scale(-1)}.thumbs-arrow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.5);padding:0;opacity:.7}@media (hover: hover) and (pointer: fine){.thumbs-arrow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:hover{opacity:1}}'],
  changeDetection: 0
});
var ThumbsComponent = _ThumbsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbsComponent, [{
    type: Component,
    args: [{
      selector: "thumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CommonModule, ChevronIconComponent],
      template: `<button
  *ngIf="showStartArrow"
  aria-label="Previous thumbnails"
  class="thumbs-arrow thumbs-arrow-prev"
  (click)="slide(-1)"
>
  <div *ngIf="!arrowTemplate; else $any(arrowTemplate)">
    <chevron-icon></chevron-icon>
  </div>
</button>

<ul #thumbs [style.scrollBehavior]="scrollBehavior" [class.rtl]="isRtl">
  <li *ngIf="!items || !items.length" class="thumbs-initial-item"></li>
  <li
    #thumb
    *ngFor="let item of items; let i = index"
    [class.thumbs-item--selected]="i === selectedIndex"
    aria-hidden="true"
    (click)="emitEvent(i, item, $event, thumbClick)"
    (mouseenter)="emitEvent(i, item, $event, thumbHover)"
  >
    <ng-container *ngIf="!thumbTemplate; else customThumbTemplate">
      <img
        [src]="item.thumbSrc || ''"
        [alt]="item.alt"
        (load)="onLoadChange(item, true)"
        (error)="onLoadChange(item, false)"
      />

      <ng-container *ngIf="item._thumbFailed">
        <div
          *ngIf="!errorTemplate; else $any(errorTemplate)"
          class="thumbs-error"
        >
          <div
            class="thumbs-error-icon"
            [class.thumbs-error-icon--video]="item.video"
          ></div>
        </div>
      </ng-container>
    </ng-container>

    <ng-template #customThumbTemplate>
      <ng-container
        *ngTemplateOutlet="
          $any(thumbTemplate);
          context: { index: i, selectedIndex: selectedIndex, item: item }
        "
      ></ng-container>
    </ng-template>
  </li>
</ul>

<button
  *ngIf="showEndArrow"
  aria-label="Next thumbnails"
  class="thumbs-arrow thumbs-arrow-next"
  (click)="slide(1)"
>
  <div *ngIf="!arrowTemplate; else $any(arrowTemplate)">
    <chevron-icon></chevron-icon>
  </div>
</button>
`,
      styles: [':host{flex:1 0 auto;position:relative;background-color:#f3f3f3}:host.thumbs--top,:host.thumbs--bottom{width:100%}:host.thumbs--top ul,:host.thumbs--bottom ul{width:100%;display:flex;overflow-x:scroll;overflow-y:hidden}:host.thumbs--top ul.rtl li:first-child,:host.thumbs--bottom ul.rtl li:first-child{margin-left:0;margin-right:auto}:host.thumbs--top ul.rtl li:last-child,:host.thumbs--bottom ul.rtl li:last-child{margin-right:0;margin-left:auto}:host.thumbs--top li,:host.thumbs--bottom li{flex:none}:host.thumbs--top li:not(:first-child),:host.thumbs--bottom li:not(:first-child){border-left:0}:host.thumbs--top li:first-child,:host.thumbs--bottom li:first-child{margin-left:auto}:host.thumbs--top li:last-child,:host.thumbs--bottom li:last-child{margin-right:auto}:host.thumbs--top .thumbs-arrow,:host.thumbs--bottom .thumbs-arrow{top:0;height:100%}:host.thumbs--top .thumbs-arrow>div,:host.thumbs--bottom .thumbs-arrow>div{width:30px;height:100%}:host.thumbs--top .thumbs-arrow-prev,:host.thumbs--bottom .thumbs-arrow-prev{left:0}:host.thumbs--top .thumbs-arrow-next,:host.thumbs--bottom .thumbs-arrow-next{right:0}:host.thumbs--top .thumbs-error,:host.thumbs--bottom .thumbs-error{border-right:1px solid #cecece}:host.thumbs--left,:host.thumbs--right{height:100%}:host.thumbs--left ul,:host.thumbs--right ul{height:100%;overflow-y:scroll;overflow-x:hidden}:host.thumbs--left li,:host.thumbs--right li{border-top:0}:host.thumbs--left .thumbs-arrow,:host.thumbs--right .thumbs-arrow{width:100%}:host.thumbs--left .thumbs-arrow>div,:host.thumbs--right .thumbs-arrow>div{width:100%;height:30px}:host.thumbs--left .thumbs-arrow chevron-icon,:host.thumbs--right .thumbs-arrow chevron-icon{transform:rotate(90deg)}:host.thumbs--left .thumbs-arrow-prev,:host.thumbs--right .thumbs-arrow-prev{top:0}:host.thumbs--left .thumbs-arrow-next,:host.thumbs--right .thumbs-arrow-next{bottom:0}:host.thumbs--left .thumbs-error,:host.thumbs--right .thumbs-error{border-bottom:1px solid #cecece}:host.thumbs--bottom,:host.thumbs--right{order:1}ul{outline:0;scrollbar-width:none;-webkit-overflow-scrolling:touch;transform:translateZ(0)}ul::-webkit-scrollbar{width:0;height:0}li{box-sizing:border-box;width:120px;height:80px;position:relative;cursor:pointer}li.thumbs-initial-item{visibility:hidden}li.thumbs-item--selected:after{content:"";display:block;position:absolute;left:0;bottom:0;width:100%;height:100%;border:10px solid rgba(255,255,255,.8117647059);box-sizing:border-box}img{width:100%;height:100%;background-repeat:no-repeat;background-position:center;object-fit:cover;color:transparent}.thumbs-error{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background:#e8e8e8;box-sizing:border-box}.thumbs-error-icon:not(.thumbs-error-icon--video){position:relative;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:28px solid #a5a5a5;margin-left:-8px}.thumbs-error-icon:not(.thumbs-error-icon--video):before,.thumbs-error-icon:not(.thumbs-error-icon--video):after{content:"";position:absolute}.thumbs-error-icon:not(.thumbs-error-icon--video):before{height:10px;width:10px;background-color:#a5a5a5;border-radius:100%;left:14px}.thumbs-error-icon:not(.thumbs-error-icon--video):after{border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:17px solid #a5a5a5;top:11px}.thumbs-error-icon--video{border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:28px solid #a5a5a5;margin-left:9px}.thumbs-arrow{position:absolute;padding:0;background-color:transparent;cursor:pointer;z-index:10}.thumbs-arrow-prev{transform:scale(-1)}.thumbs-arrow>div{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.5);padding:0;opacity:.7}@media (hover: hover) and (pointer: fine){.thumbs-arrow>div:hover{opacity:1}}\n']
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    items: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    aria: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    arrowSlideByLength: [{
      type: Input
    }],
    autoScroll: [{
      type: Input
    }],
    thumbTemplate: [{
      type: Input
    }],
    arrowTemplate: [{
      type: Input
    }],
    errorTemplate: [{
      type: Input
    }],
    scrollBehavior: [{
      type: Input
    }],
    isRtl: [{
      type: Input
    }],
    thumbClick: [{
      type: Output
    }],
    thumbHover: [{
      type: Output
    }],
    thumbListRef: [{
      type: ViewChild,
      args: ["thumbs", {
        static: true
      }]
    }],
    thumbsRef: [{
      type: ViewChildren,
      args: ["thumb"]
    }],
    cssClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _MediaDirective = class _MediaDirective {
  constructor(hostRef) {
    this.mediaLoadError = new EventEmitter();
    this.onLoad = (ev) => {
      if (ev.type === "error") {
        this.mediaLoadError.emit();
      }
    };
    this.nativeEl = hostRef.nativeElement;
  }
  ngOnInit() {
    this.nativeEl.addEventListener("error", this.onLoad, true);
  }
  ngOnDestroy() {
    this.nativeEl.removeEventListener("error", this.onLoad, true);
  }
};
_MediaDirective.ɵfac = function MediaDirective_Factory(t) {
  return new (t || _MediaDirective)(ɵɵdirectiveInject(ElementRef));
};
_MediaDirective.ɵdir = ɵɵdefineDirective({
  type: _MediaDirective,
  selectors: [["", "media", ""]],
  outputs: {
    mediaLoadError: "mediaLoadError"
  },
  standalone: true
});
var MediaDirective = _MediaDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaDirective, [{
    type: Directive,
    args: [{
      selector: "[media]",
      standalone: true
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    mediaLoadError: [{
      type: Output
    }]
  });
})();
var _SafePipe = class _SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
};
_SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || _SafePipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
_SafePipe.ɵpipe = ɵɵdefinePipe({
  name: "safe",
  type: _SafePipe,
  pure: true,
  standalone: true
});
var SafePipe = _SafePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{
      name: "safe",
      standalone: true
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }];
  }, null);
})();
var _CounterComponent = class _CounterComponent {
};
_CounterComponent.ɵfac = function CounterComponent_Factory(t) {
  return new (t || _CounterComponent)();
};
_CounterComponent.ɵcmp = ɵɵdefineComponent({
  type: _CounterComponent,
  selectors: [["counter"]],
  hostVars: 2,
  hostBindings: function CounterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.orientation);
    }
  },
  inputs: {
    itemQuantity: "itemQuantity",
    selectedIndex: "selectedIndex",
    orientation: "orientation"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["aria-hidden", "true"]],
  template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate2(" ", ctx.selectedIndex + 1, "/", ctx.itemQuantity || 0, " ");
    }
  },
  styles: ["[_nghost-%COMP%]{position:absolute;left:50%;transform:translate(-50%);background:rgba(0,0,0,.6);padding:.25rem .5rem;font-size:.9rem;color:#f1f5f9;letter-spacing:3px;-webkit-user-select:none;user-select:none}.top[_nghost-%COMP%]{top:0;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}.bottom[_nghost-%COMP%]{bottom:0;border-top-left-radius:.375rem;border-top-right-radius:.375rem}"],
  changeDetection: 0
});
var CounterComponent = _CounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{
      selector: "counter",
      template: `
    <span aria-hidden="true">
      {{ selectedIndex + 1 }}/{{ itemQuantity || 0 }}
    </span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [":host{position:absolute;left:50%;transform:translate(-50%);background:rgba(0,0,0,.6);padding:.25rem .5rem;font-size:.9rem;color:#f1f5f9;letter-spacing:3px;-webkit-user-select:none;user-select:none}:host.top{top:0;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}:host.bottom{bottom:0;border-top-left-radius:.375rem;border-top-right-radius:.375rem}\n"]
    }]
  }], null, {
    itemQuantity: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    orientation: [{
      type: HostBinding,
      args: ["class"]
    }, {
      type: Input
    }]
  });
})();
var passiveEventListenerOpts = {
  passive: true
};
var _ViewerComponent = class _ViewerComponent {
  set noAnimation(value) {
    this.itemListRef.nativeElement.style.transitionDuration = value ? "0ms" : "400ms";
  }
  get counterIndex() {
    return Math.floor(this.selectedIndex / this.moveByItems);
  }
  get showArrow() {
    return this.arrows && this.items && this.items.length > 1;
  }
  get showPrevArrow() {
    return this.showArrow && (this.selectedIndex > 0 || this.reallyLoop);
  }
  get showNextArrow() {
    return this.showArrow && (this.selectedIndex < this.items.length - 1 || this.reallyLoop);
  }
  constructor(_hostRef, _cd, _destroyRef, _zone) {
    this._hostRef = _hostRef;
    this._cd = _cd;
    this._destroyRef = _destroyRef;
    this._zone = _zone;
    this.itemClick = new EventEmitter();
    this.descriptionClick = new EventEmitter();
    this.selection = new EventEmitter();
    this.fringeCount = this.getFringeCount();
    this._itemWidth = 0;
    this.pointerDeltaX = 0;
    this.sliding = false;
    this.repositionOnFringe = (entries) => {
      if (!this.reallyLoop || !this.sliding) {
        return;
      }
      const {
        first
      } = this.itemsRef;
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length === 0) {
        return;
      }
      const beginningVisible = entries[0].target === first.nativeElement;
      this.pointerDeltaX += (beginningVisible ? -1 : 1) * this.items.length * this._itemWidth;
    };
    this.updateDimensions = () => {
      this._itemWidth = this._hostRef.nativeElement.querySelector("li").offsetWidth;
    };
    this.shiftByDelta = (delta) => {
      this.pointerDeltaX += delta;
      this.shift(this.pointerDeltaX);
    };
  }
  ngOnChanges({
    visibleItems,
    items,
    loop
  }) {
    if (visibleItems) {
      this.itemListRef.nativeElement.style.setProperty("--item-width", `calc(100% / ${this.visibleItems})`);
      setTimeout(this.updateDimensions);
    }
    if (loop || items) {
      this.reallyLoop = this.items.length > 1 ? this.loop : false;
      if (this.reallyLoop) {
        setTimeout(() => this.observeFringes());
      }
    }
    if (items || visibleItems || loop) {
      this.fringeCount = this.getFringeCount();
      this.displayedItems = this.getItemsToBeDisplayed(this.fringeCount);
    }
  }
  ngOnInit() {
    if (isBrowser) {
      this.handleResizes();
      if (this.mouseGestures) {
        this.handleMouseSlides();
      }
      if (this.touchGestures) {
        this.handleTouchSlides();
      }
      this._destroyRef.onDestroy(() => this.fringeObserver?.disconnect());
    }
  }
  ngAfterViewInit() {
    this.center();
    setTimeout(() => this.noAnimation = false);
  }
  isYoutube(item) {
    return !!item.src.match(/youtube.*\/embed\//);
  }
  select(index, shortPath = true) {
    if (this.selectedIndex === index) {
      return this.center();
    }
    if (this.items[this.selectedIndex]?.video) {
      this.stopCurrentVideo();
    }
    if (this.visibleItems > 1 && shortPath) {
      const maxIndex = this.items.length - this.visibleItems;
      if (this.selectedIndex !== 0 && index < 0) {
        index = 0;
      } else if (this.selectedIndex < maxIndex) {
        index = Math.min(maxIndex, index);
      } else if (index > maxIndex) {
        index = this.items.length;
      }
    }
    const indexOutOfBounds = !this.items[index];
    const looping = this.reallyLoop && indexOutOfBounds;
    if (looping) {
      this.loopTo(index);
      return this.selection.emit(this.selectedIndex);
    }
    this.selectedIndex = indexOutOfBounds ? this.correctIndexOutOfBounds(index) : index;
    this.center();
    this.selection.emit(this.selectedIndex);
  }
  selectByDelta(delta) {
    this.select(this.selectedIndex + delta);
  }
  onImageClick(item, event) {
    this.itemClick.emit({
      event,
      item,
      index: this.items.indexOf(item)
    });
  }
  onTab(nextItemIndex) {
    nextItemIndex = nextItemIndex - this.fringeCount;
    if (nextItemIndex >= 0 && nextItemIndex < this.items.length) {
      this.select(nextItemIndex);
      requestAnimationFrame(() => this._hostRef.nativeElement.scrollLeft = 0);
    }
  }
  onItemErrored(item) {
    if (!this.showErrors) {
      return;
    }
    item._failed = true;
    this._cd.detectChanges();
  }
  itemFailedToLoad(item) {
    return item._failed;
  }
  itemTabbable(index) {
    index = index - this.fringeCount;
    return index >= 0 && index < this.items.length ? 0 : -1;
  }
  center() {
    this.shift();
  }
  correctIndexOutOfBounds(index) {
    return index < 0 ? 0 : this.items.length - 1;
  }
  getFringeCount() {
    return this.reallyLoop ? Math.min(Math.ceil(this.visibleItems), this.items.length) : 0;
  }
  getItemsToBeDisplayed(fringeCount) {
    return this.reallyLoop ? [...this.items.slice(-fringeCount), ...this.items, ...this.items.slice(0, fringeCount)] : this.items;
  }
  handleMouseSlides() {
    this._zone.runOutsideAngular(() => {
      const hostEl = this._hostRef.nativeElement;
      let mousedown;
      let maxDeltaX = 0;
      let maxDeltaY = 0;
      const onmousedown = (e) => {
        mousedown = e;
        this.noAnimation = this.sliding = true;
        document.addEventListener("mousemove", onmousemove, passiveEventListenerOpts);
        document.addEventListener("mouseup", onmouseup, passiveEventListenerOpts);
      };
      const onmousemove = (e) => {
        maxDeltaX = Math.max(Math.abs(mousedown.x - e.x));
        maxDeltaY = Math.max(Math.abs(mousedown.y - e.y));
        this.shiftByDelta(e.movementX);
      };
      const onmouseup = () => {
        this.noAnimation = this.sliding = false;
        this._zone.run(() => this.selectBySwipeStats(this.pointerDeltaX));
        this.pointerDeltaX = 0;
        document.removeEventListener("mousemove", onmousemove);
        document.removeEventListener("mouseup", onmouseup);
      };
      const onclick = (e) => {
        if (maxDeltaX > 10 || maxDeltaY > 10) {
          e.stopPropagation();
          e.preventDefault();
        }
        maxDeltaY = maxDeltaX = 0;
      };
      const ondragstart = (e) => e.preventDefault();
      hostEl.addEventListener("mousedown", onmousedown, passiveEventListenerOpts);
      hostEl.addEventListener("click", onclick, {
        capture: true
      });
      hostEl.addEventListener("dragstart", ondragstart);
      this._destroyRef.onDestroy(() => {
        hostEl.removeEventListener("mousedown", onmousedown);
        hostEl.removeEventListener("click", onclick);
        hostEl.removeEventListener("dragstart", ondragstart);
      });
    });
  }
  handleTouchSlides() {
    this._zone.runOutsideAngular(() => {
      const hostEl = this._hostRef.nativeElement;
      let horizontal;
      let touchstart;
      let lastTouchmove;
      const ontouchstart = (e) => {
        touchstart = e;
        this.noAnimation = this.sliding = true;
      };
      const ontouchmove = (e) => {
        if (!touchstart || e.touches.length !== 1) {
          return;
        }
        const startTouch = touchstart.touches[0];
        const moveTouch = e.touches[0];
        if (horizontal == null) {
          const deltaX = Math.abs(moveTouch.clientX - startTouch.clientX);
          const deltaY = Math.abs(moveTouch.clientY - startTouch.clientY);
          if (deltaX || deltaY) {
            horizontal = deltaX * 1.2 >= deltaY;
          }
        }
        if (horizontal) {
          this.shiftByDelta(moveTouch.clientX - (lastTouchmove ?? touchstart).touches[0].clientX);
          lastTouchmove = e;
          if (UA.ios) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      };
      const ontouchend = () => {
        this.noAnimation = this.sliding = false;
        this._zone.run(() => this.selectBySwipeStats(this.pointerDeltaX));
        this.pointerDeltaX = 0;
        horizontal = void 0;
        touchstart = void 0;
        lastTouchmove = void 0;
      };
      hostEl.addEventListener("touchstart", ontouchstart, passiveEventListenerOpts);
      document.addEventListener("touchmove", ontouchmove, {
        passive: !UA.ios
      });
      document.addEventListener("touchend", ontouchend, passiveEventListenerOpts);
      this._destroyRef.onDestroy(() => {
        hostEl.removeEventListener("touchstart", ontouchstart);
        document.removeEventListener("touchmove", ontouchmove);
        document.removeEventListener("touchend", ontouchend);
      });
    });
  }
  handleResizes() {
    window.addEventListener("resize", this.updateDimensions, passiveEventListenerOpts);
    this._destroyRef.onDestroy(() => {
      window.removeEventListener("resize", this.updateDimensions);
    });
  }
  loopTo(desiredIndex) {
    this.noAnimation = true;
    const shift = Math.sign(desiredIndex) * this.items.length * this._itemWidth;
    this.shiftByDelta(shift);
    this.selectedIndex = desiredIndex < 0 ? desiredIndex + this.items.length : desiredIndex - this.items.length;
    requestAnimationFrame(() => setTimeout(() => {
      this.pointerDeltaX = 0;
      this.noAnimation = false;
      this.center();
    }));
  }
  observeFringes() {
    if (!isBrowser) {
      return;
    }
    this.fringeObserver?.disconnect();
    const observer = new IntersectionObserver(this.repositionOnFringe, {
      root: this._hostRef.nativeElement,
      threshold: 1
    });
    observer.observe(this.itemsRef.first.nativeElement);
    observer.observe(this.itemsRef.last.nativeElement);
    this.fringeObserver = observer;
  }
  selectBySwipeStats(distance) {
    const indexDelta = Math.round((Math.abs(distance) + this._itemWidth / 2.25) / this._itemWidth) * -Math.sign(distance);
    const newIndex = this.selectedIndex + indexDelta;
    this.select(newIndex, false);
  }
  shift(delta = 0) {
    const multiplier = this.isRtl ? 1 : -1;
    const index = (this.selectedIndex + this.fringeCount) * multiplier;
    delta *= -multiplier;
    const shift = `calc(${index} * var(--item-width) + ${delta}px)`;
    this.itemListRef.nativeElement.style.transform = `translate3d(${shift}, 0, 0)`;
  }
  stopCurrentVideo() {
    const videoEl = this.itemsRef.get(this.selectedIndex)?.nativeElement.querySelector("video");
    if (videoEl) {
      videoEl.pause();
    }
  }
};
_ViewerComponent.ɵfac = function ViewerComponent_Factory(t) {
  return new (t || _ViewerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DestroyRef), ɵɵdirectiveInject(NgZone));
};
_ViewerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ViewerComponent,
  selectors: [["viewer"]],
  viewQuery: function ViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemListRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsRef = _t);
    }
  },
  hostVars: 4,
  hostBindings: function ViewerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("clip", ctx.clip)("rtl", ctx.isRtl);
    }
  },
  inputs: {
    items: "items",
    selectedIndex: "selectedIndex",
    arrows: "arrows",
    descriptions: "descriptions",
    errorText: "errorText",
    showErrors: "showErrors",
    mouseGestures: "mouseGestures",
    touchGestures: "touchGestures",
    counter: "counter",
    counterOrientation: "counterOrientation",
    loading: "loading",
    objectFit: "objectFit",
    itemTemplate: "itemTemplate",
    errorTemplate: "errorTemplate",
    arrowTemplate: "arrowTemplate",
    contentTemplate: "contentTemplate",
    thumbsOrientation: "thumbsOrientation",
    aria: "aria",
    loop: "loop",
    visibleItems: "visibleItems",
    moveByItems: "moveByItems",
    clip: "clip",
    isRtl: "isRtl"
  },
  outputs: {
    itemClick: "itemClick",
    descriptionClick: "descriptionClick",
    selection: "selection"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 11,
  consts: [["aria-label", "Previous image", "class", "viewer-arrow viewer-arrow-prev", 3, "mousedown", "click", 4, "ngIf"], ["itemList", ""], ["class", "viewer-initial-item", 4, "ngIf"], ["media", "", 3, "click", "mediaLoadError", "keydown.Tab", "keydown.shift.Tab", 4, "ngFor", "ngForOf"], ["aria-label", "Next image", "class", "viewer-arrow viewer-arrow-next", 3, "mousedown", "click", 4, "ngIf"], [3, "itemQuantity", "selectedIndex", "orientation", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "viewer-description", "aria-hidden", "true", 3, "viewer-description--above-counter", 4, "ngIf"], ["aria-label", "Previous image", 1, "viewer-arrow", "viewer-arrow-prev", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], [1, "viewer-initial-item"], ["media", "", 3, "click", "mediaLoadError", "keydown.Tab", "keydown.shift.Tab"], ["itemsRef", ""], [4, "ngIf"], [1, "sr-only", 3, "id", "innerHTML"], ["customTemplate", ""], ["controls", "", "playsinline", "", 3, "src", "poster", "objectFit", 4, "ngIf"], ["allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], [3, "srcset", 4, "ngFor", "ngForOf"], [3, "src", "alt"], [3, "srcset"], ["controls", "", "playsinline", "", 3, "src", "poster"], ["allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], ["class", "viewer-error", 4, "ngIf", "ngIfElse"], [1, "viewer-error"], [1, "viewer-error-icon"], [1, "viewer-error-text"], ["aria-label", "Next image", 1, "viewer-arrow", "viewer-arrow-next", 3, "mousedown", "click"], [3, "itemQuantity", "selectedIndex", "orientation"], ["aria-hidden", "true", 1, "viewer-description"], ["class", "viewer-description-inner", 3, "innerHTML", "click", 4, "ngIf"], [1, "viewer-description-inner", 3, "innerHTML", "click"]],
  template: function ViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ViewerComponent_button_0_Template, 2, 2, "button", 0);
      ɵɵelementStart(1, "ul", null, 1);
      ɵɵtemplate(3, ViewerComponent_li_3_Template, 1, 0, "li", 2)(4, ViewerComponent_li_4_Template, 7, 8, "li", 3);
      ɵɵelementEnd();
      ɵɵtemplate(5, ViewerComponent_button_5_Template, 2, 2, "button", 4)(6, ViewerComponent_counter_6_Template, 1, 3, "counter", 5)(7, ViewerComponent_ng_container_7_Template, 1, 0, "ng-container", 6)(8, ViewerComponent_div_8_Template, 2, 3, "div", 7);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showPrevArrow);
      ɵɵadvance();
      ɵɵattribute("aria-label", ctx.aria == null ? null : ctx.aria.viewerLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !(ctx.displayedItems == null ? null : ctx.displayedItems.length));
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.displayedItems);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showNextArrow);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.counter && ctx.items.length);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c6, ctx.selectedIndex));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.descriptions && ctx.items);
    }
  },
  dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, CounterComponent, ChevronIconComponent, MediaDirective, SafePipe],
  styles: ["[_nghost-%COMP%]{display:block;position:relative;width:100%;height:100%;outline:none;z-index:1}.clip[_nghost-%COMP%]{overflow:hidden}.rtl[_nghost-%COMP%]   .viewer-arrow-next[_ngcontent-%COMP%]{right:auto;left:0;transform:translateY(-50%) scale(-1)}.rtl[_nghost-%COMP%]   .viewer-arrow-prev[_ngcontent-%COMP%]{right:0;left:auto;transform:translateY(-50%)}ul[_ngcontent-%COMP%]{--item-width: 100%;display:flex;width:100%;height:100%;transition:transform;scrollbar-width:none}ul[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}li[_ngcontent-%COMP%]{display:flex;align-items:center;flex:none;position:relative;width:var(--item-width);-webkit-user-select:none;user-select:none;outline:0}picture[_ngcontent-%COMP%]{width:100%;height:100%}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%]{width:100%;height:100%;background-color:transparent;outline:0;color:transparent}iframe[_ngcontent-%COMP%]{border:0}img[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.viewer-description[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;width:100%;display:flex;justify-content:center;font-size:.9rem}.viewer-description--above-counter[_ngcontent-%COMP%]{bottom:2.5rem}.viewer-description-inner[_ngcontent-%COMP%]{display:inline-block;background:rgba(0,0,0,.7);color:#f1f5f9;padding:.5rem .75rem;max-width:80%;text-align:center;border-radius:.5rem}.viewer-error[_ngcontent-%COMP%]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background-color:#f5f5f5;color:#7d7d7d}.viewer-error-icon[_ngcontent-%COMP%]{font-size:40px}.viewer-error-text[_ngcontent-%COMP%]{margin-top:10px;letter-spacing:.01em}.viewer-arrow[_ngcontent-%COMP%]{display:flex;position:absolute;top:50%;padding:0;background-color:transparent;transform:translateY(-50%);z-index:100;cursor:pointer}.viewer-arrow-prev[_ngcontent-%COMP%]{left:0;transform:scale(-1) translateY(50%)}.viewer-arrow-next[_ngcontent-%COMP%]{right:0}.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]{margin:15px 6px;opacity:.7}@media (hover: hover) and (pointer: fine){.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]:hover{opacity:1}}.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]  svg{height:32px;width:32px}"],
  data: {
    animation: [trigger("mediaAnimate", [transition(":leave", animate("0ms 100ms")), transition(":enter", [style({
      opacity: 0
    }), animate("400ms", style({
      opacity: 1
    }))])])]
  },
  changeDetection: 0
});
var ViewerComponent = _ViewerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewerComponent, [{
    type: Component,
    args: [{
      selector: "viewer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("mediaAnimate", [transition(":leave", animate("0ms 100ms")), transition(":enter", [style({
        opacity: 0
      }), animate("400ms", style({
        opacity: 1
      }))])])],
      standalone: true,
      imports: [CommonModule, CounterComponent, ChevronIconComponent, MediaDirective, SafePipe],
      template: `<button
  *ngIf="showPrevArrow"
  aria-label="Previous image"
  class="viewer-arrow viewer-arrow-prev"
  (mousedown)="$event.stopPropagation()"
  (click)="selectByDelta(-moveByItems)"
>
  <chevron-icon *ngIf="!arrowTemplate; else $any(arrowTemplate)"></chevron-icon>
</button>

<ul #itemList [attr.aria-label]="aria?.viewerLabel">
  <li *ngIf="!displayedItems?.length" class="viewer-initial-item"></li>
  <li
    #itemsRef
    *ngFor="let item of displayedItems; let i = index"
    media
    [attr.tabindex]="itemTabbable(i)"
    [attr.aria-label]="item.alt"
    [attr.aria-describedby]="'viewer-aria-description-' + i"
    (click)="onImageClick(item, $event)"
    (mediaLoadError)="onItemErrored(item)"
    (keydown.Tab)="onTab(i + 1)"
    (keydown.shift.Tab)="onTab(i - 1)"
  >
    <ng-container *ngIf="!itemTemplate; else customTemplate">
      <picture *ngIf="!item.video" @mediaAnimate>
        <source
          *ngFor="let source of item.pictureSources"
          [srcset]="source.srcset"
          [attr.media]="source.media"
          [attr.sizes]="source.sizes"
          [attr.type]="source.type"
        />
        <img
          [src]="item.src"
          [alt]="item.alt"
          [attr.loading]="loading"
          [style.objectFit]="objectFit"
        />
      </picture>
      <!-- Using loadedmetadata instead of loadeddata because iOS loads data lazily upon user's interaction -->
      <video
        *ngIf="!isYoutube(item) && item.video"
        @mediaAnimate
        [src]="item.src"
        [poster]="item.thumbSrc || ''"
        [attr.preload]="loading === 'lazy' ? 'metadata' : 'auto'"
        [style.objectFit]="objectFit"
        controls
        playsinline
      ></video>

      <iframe
        *ngIf="isYoutube(item)"
        @mediaAnimate
        [attr.loading]="loading"
        [src]="item.src | safe"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </ng-container>

    <ng-container *ngIf="itemFailedToLoad(item)">
      <div
        *ngIf="!errorTemplate; else $any(errorTemplate)"
        class="viewer-error"
      >
        <div class="viewer-error-icon">⚠</div>
        <p class="viewer-error-text">
          {{ errorText || 'Loading of this media failed' }}
        </p>
      </div>
    </ng-container>

    <span
      [id]="'viewer-aria-description-' + i"
      class="sr-only"
      [innerHTML]="item.description"
    ></span>

    <ng-template #customTemplate>
      <ng-container
        *ngTemplateOutlet="
          $any(itemTemplate);
          context: {
            index: items?.indexOf(item),
            selectedIndex: selectedIndex,
            item: item,
            video: item.video
          }
        "
      ></ng-container>
    </ng-template>
  </li>
</ul>

<button
  *ngIf="showNextArrow"
  aria-label="Next image"
  class="viewer-arrow viewer-arrow-next"
  (mousedown)="$event.stopPropagation()"
  (click)="selectByDelta(moveByItems)"
>
  <chevron-icon *ngIf="!arrowTemplate; else $any(arrowTemplate)"></chevron-icon>
</button>

<counter
  *ngIf="counter && items.length"
  [itemQuantity]="items.length"
  [selectedIndex]="counterIndex"
  [orientation]="counterOrientation"
></counter>

<ng-container
  *ngTemplateOutlet="
    $any(contentTemplate);
    context: {
      selectedIndex: selectedIndex
    }
  "
></ng-container>

<div
  *ngIf="descriptions && items"
  class="viewer-description"
  [class.viewer-description--above-counter]="
    counter && counterOrientation === 'bottom'
  "
  aria-hidden="true"
>
  <div
    *ngIf="items[selectedIndex]?.description as description"
    class="viewer-description-inner"
    [innerHTML]="description"
    (click)="descriptionClick.emit($event)"
  ></div>
</div>
`,
      styles: [":host{display:block;position:relative;width:100%;height:100%;outline:none;z-index:1}:host.clip{overflow:hidden}:host.rtl .viewer-arrow-next{right:auto;left:0;transform:translateY(-50%) scale(-1)}:host.rtl .viewer-arrow-prev{right:0;left:auto;transform:translateY(-50%)}ul{--item-width: 100%;display:flex;width:100%;height:100%;transition:transform;scrollbar-width:none}ul::-webkit-scrollbar{width:0;height:0}li{display:flex;align-items:center;flex:none;position:relative;width:var(--item-width);-webkit-user-select:none;user-select:none;outline:0}picture{width:100%;height:100%}img,video,iframe{width:100%;height:100%;background-color:transparent;outline:0;color:transparent}iframe{border:0}img{-webkit-user-select:none;user-select:none}.viewer-description{position:absolute;bottom:.5rem;width:100%;display:flex;justify-content:center;font-size:.9rem}.viewer-description--above-counter{bottom:2.5rem}.viewer-description-inner{display:inline-block;background:rgba(0,0,0,.7);color:#f1f5f9;padding:.5rem .75rem;max-width:80%;text-align:center;border-radius:.5rem}.viewer-error{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background-color:#f5f5f5;color:#7d7d7d}.viewer-error-icon{font-size:40px}.viewer-error-text{margin-top:10px;letter-spacing:.01em}.viewer-arrow{display:flex;position:absolute;top:50%;padding:0;background-color:transparent;transform:translateY(-50%);z-index:100;cursor:pointer}.viewer-arrow-prev{left:0;transform:scale(-1) translateY(50%)}.viewer-arrow-next{right:0}.viewer-arrow chevron-icon{margin:15px 6px;opacity:.7}@media (hover: hover) and (pointer: fine){.viewer-arrow chevron-icon:hover{opacity:1}}.viewer-arrow chevron-icon::ng-deep svg{height:32px;width:32px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: DestroyRef
    }, {
      type: NgZone
    }];
  }, {
    items: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    descriptions: [{
      type: Input
    }],
    errorText: [{
      type: Input
    }],
    showErrors: [{
      type: Input
    }],
    mouseGestures: [{
      type: Input
    }],
    touchGestures: [{
      type: Input
    }],
    counter: [{
      type: Input
    }],
    counterOrientation: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    objectFit: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    errorTemplate: [{
      type: Input
    }],
    arrowTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    thumbsOrientation: [{
      type: Input
    }],
    aria: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    visibleItems: [{
      type: Input
    }],
    moveByItems: [{
      type: Input
    }],
    clip: [{
      type: HostBinding,
      args: ["class.clip"]
    }, {
      type: Input
    }],
    isRtl: [{
      type: HostBinding,
      args: ["class.rtl"]
    }, {
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    descriptionClick: [{
      type: Output
    }],
    selection: [{
      type: Output
    }],
    itemListRef: [{
      type: ViewChild,
      args: ["itemList", {
        static: true
      }]
    }],
    itemsRef: [{
      type: ViewChildren,
      args: ["itemsRef"]
    }]
  });
})();
var _GalleryComponent = class _GalleryComponent {
  constructor() {
    this.items = [];
    this.selectedIndex = 0;
    this.aria = defaultAria;
    this.arrows = true;
    this.descriptions = false;
    this.showErrors = false;
    this.mouseGestures = true;
    this.touchGestures = true;
    this.clip = true;
    this.counter = true;
    this.counterOrientation = "bottom";
    this.loading = "lazy";
    this.loop = false;
    this.objectFit = "cover";
    this.isRtl = false;
    this.visibleItems = 1;
    this.moveByItems = this.visibleItems;
    this.thumbs = true;
    this.thumbsAutoScroll = true;
    this.thumbsOrientation = "bottom";
    this.thumbsArrows = true;
    this.thumbsScrollBehavior = "smooth";
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.thumbHover = new EventEmitter();
    this.descriptionClick = new EventEmitter();
    this.selection = new EventEmitter();
  }
  get _galleryColumn() {
    return this.thumbsOrientation === "top" || this.thumbsOrientation === "bottom";
  }
  get _thumbsOrientationFlag() {
    return this._galleryColumn ? 6 : 24;
  }
  ngOnChanges({
    items
  }) {
    if (items && !items.currentValue) {
      this.items = [];
    }
  }
  focus() {
    this._viewerElRef.nativeElement.focus();
  }
  next() {
    this._viewerRef.selectByDelta(1);
  }
  prev() {
    this._viewerRef.selectByDelta(-1);
  }
  select(index) {
    this._viewerRef.select(index);
    this._thumbsRef?.select(index);
    this._selectInternal(index);
  }
  slideThumbs(direction) {
    this._thumbsRef?.slide(direction);
  }
  _onThumbClick(event) {
    this._viewerRef.select(event.index);
    this.thumbClick.emit(event);
    this._selectInternal(event.index);
  }
  _selectInternal(index) {
    this.selectedIndex = index;
    this.selection.emit(this.items[index]);
  }
};
_GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
  return new (t || _GalleryComponent)();
};
_GalleryComponent.ɵcmp = ɵɵdefineComponent({
  type: _GalleryComponent,
  selectors: [["gallery"]],
  viewQuery: function GalleryComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(ViewerComponent, 5);
      ɵɵviewQuery(ThumbsComponent, 5);
      ɵɵviewQuery(ViewerComponent, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._viewerRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._thumbsRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._viewerElRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function GalleryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.arrowright", function GalleryComponent_keydown_arrowright_HostBindingHandler() {
        return ctx.next();
      })("keydown.arrowleft", function GalleryComponent_keydown_arrowleft_HostBindingHandler() {
        return ctx.prev();
      });
    }
    if (rf & 2) {
      ɵɵclassProp("rtl", ctx.isRtl)("gallery--column", ctx._galleryColumn);
    }
  },
  inputs: {
    items: "items",
    selectedIndex: "selectedIndex",
    aria: "aria",
    arrows: "arrows",
    descriptions: "descriptions",
    errorText: "errorText",
    showErrors: "showErrors",
    mouseGestures: "mouseGestures",
    touchGestures: "touchGestures",
    clip: "clip",
    counter: "counter",
    counterOrientation: "counterOrientation",
    loading: "loading",
    loop: "loop",
    objectFit: "objectFit",
    isRtl: "isRtl",
    visibleItems: "visibleItems",
    moveByItems: "moveByItems",
    itemTemplate: "itemTemplate",
    errorTemplate: "errorTemplate",
    arrowTemplate: "arrowTemplate",
    contentTemplate: "contentTemplate",
    thumbs: "thumbs",
    thumbsAutoScroll: "thumbsAutoScroll",
    thumbsOrientation: "thumbsOrientation",
    thumbsArrows: "thumbsArrows",
    thumbsArrowSlideByLength: "thumbsArrowSlideByLength",
    thumbsScrollBehavior: "thumbsScrollBehavior",
    thumbTemplate: "thumbTemplate",
    thumbsArrowTemplate: "thumbsArrowTemplate",
    thumbErrorTemplate: "thumbErrorTemplate"
  },
  outputs: {
    itemClick: "itemClick",
    thumbClick: "thumbClick",
    thumbHover: "thumbHover",
    descriptionClick: "descriptionClick",
    selection: "selection"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 25,
  consts: [["class", "sr-only", "tabindex", "0", 4, "ngIf"], [3, "items", "selectedIndex", "orientation", "arrows", "arrowSlideByLength", "autoScroll", "scrollBehavior", "thumbTemplate", "arrowTemplate", "errorTemplate", "aria", "isRtl", "thumbClick", "thumbHover", 4, "ngIf"], [3, "items", "selectedIndex", "arrows", "descriptions", "errorText", "showErrors", "mouseGestures", "touchGestures", "clip", "counter", "counterOrientation", "visibleItems", "moveByItems", "objectFit", "loading", "itemTemplate", "errorTemplate", "contentTemplate", "loop", "thumbsOrientation", "arrowTemplate", "aria", "isRtl", "itemClick", "descriptionClick", "selection"], ["tabindex", "0", 1, "sr-only"], [3, "items", "selectedIndex", "orientation", "arrows", "arrowSlideByLength", "autoScroll", "scrollBehavior", "thumbTemplate", "arrowTemplate", "errorTemplate", "aria", "isRtl", "thumbClick", "thumbHover"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, GalleryComponent_span_0_Template, 2, 1, "span", 0)(1, GalleryComponent_thumbs_1_Template, 1, 12, "thumbs", 1);
      ɵɵelementStart(2, "viewer", 2);
      ɵɵlistener("itemClick", function GalleryComponent_Template_viewer_itemClick_2_listener($event) {
        return ctx.itemClick.emit($event);
      })("descriptionClick", function GalleryComponent_Template_viewer_descriptionClick_2_listener($event) {
        return ctx.descriptionClick.emit($event);
      })("selection", function GalleryComponent_Template_viewer_selection_2_listener($event) {
        ctx._selectInternal($event);
        return ctx._thumbsRef == null ? null : ctx._thumbsRef.select($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.aria == null ? null : ctx.aria.galleryLabel);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.thumbs);
      ɵɵadvance();
      ɵɵproperty("items", ctx.items)("selectedIndex", +ctx.selectedIndex)("arrows", ctx.arrows)("descriptions", ctx.descriptions)("errorText", ctx.errorText)("showErrors", ctx.showErrors)("mouseGestures", ctx.mouseGestures)("touchGestures", ctx.touchGestures)("clip", ctx.clip)("counter", ctx.counter)("counterOrientation", ctx.counterOrientation)("visibleItems", ctx.visibleItems)("moveByItems", ctx.moveByItems)("objectFit", ctx.objectFit)("loading", ctx.loading)("itemTemplate", ctx.itemTemplate)("errorTemplate", ctx.errorTemplate)("contentTemplate", ctx.contentTemplate)("loop", ctx.loop)("thumbsOrientation", ctx._thumbsOrientationFlag)("arrowTemplate", ctx.arrowTemplate)("aria", ctx.aria)("isRtl", ctx.isRtl);
    }
  },
  dependencies: [CommonModule, NgIf, ThumbsComponent, ViewerComponent],
  styles: ["[_nghost-%COMP%]{display:flex;height:600px;width:500px;outline:0;position:relative}.gallery--column[_nghost-%COMP%]{flex-direction:column}.rtl[_nghost-%COMP%]{direction:ltr}.rtl[_nghost-%COMP%]   viewer[_ngcontent-%COMP%], .rtl[_nghost-%COMP%]   thumbs[_ngcontent-%COMP%]{direction:rtl}[_nghost-%COMP%] {font-family:Helvetica Neue,Helvetica,Arial,sans-serif}[_nghost-%COMP%]  button{border:none}[_nghost-%COMP%]  ul{list-style-type:none;margin:0;padding:0}[_nghost-%COMP%]  .sr-only{position:absolute!important;clip:rect(1px,1px,1px,1px);top:auto;left:-9999px;width:1px;height:1px;overflow:hidden}"],
  changeDetection: 0
});
var GalleryComponent = _GalleryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{
      selector: "gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CommonModule, ThumbsComponent, ViewerComponent],
      template: '<span *ngIf="aria?.galleryLabel" class="sr-only" tabindex="0">\n  {{ aria.galleryLabel }}\n</span>\n\n<thumbs\n  *ngIf="thumbs"\n  [items]="items"\n  [selectedIndex]="selectedIndex"\n  [orientation]="thumbsOrientation"\n  [arrows]="thumbsArrows"\n  [arrowSlideByLength]="thumbsArrowSlideByLength"\n  [autoScroll]="thumbsAutoScroll"\n  [scrollBehavior]="thumbsScrollBehavior"\n  [thumbTemplate]="thumbTemplate"\n  [arrowTemplate]="thumbsArrowTemplate"\n  [errorTemplate]="thumbErrorTemplate"\n  [aria]="aria"\n  [isRtl]="isRtl"\n  (thumbClick)="_onThumbClick($event)"\n  (thumbHover)="thumbHover.emit($event)"\n></thumbs>\n\n<viewer\n  [items]="items"\n  [selectedIndex]="+selectedIndex"\n  [arrows]="arrows"\n  [descriptions]="descriptions"\n  [errorText]="errorText"\n  [showErrors]="showErrors"\n  [mouseGestures]="mouseGestures"\n  [touchGestures]="touchGestures"\n  [clip]="clip"\n  [counter]="counter"\n  [counterOrientation]="counterOrientation"\n  [visibleItems]="visibleItems"\n  [moveByItems]="moveByItems"\n  [objectFit]="objectFit"\n  [loading]="loading"\n  [itemTemplate]="itemTemplate"\n  [errorTemplate]="errorTemplate"\n  [contentTemplate]="contentTemplate"\n  [loop]="loop"\n  [thumbsOrientation]="_thumbsOrientationFlag"\n  [arrowTemplate]="arrowTemplate"\n  [aria]="aria"\n  [isRtl]="isRtl"\n  (itemClick)="itemClick.emit($event)"\n  (descriptionClick)="descriptionClick.emit($event)"\n  (selection)="_selectInternal($event); _thumbsRef?.select($event)"\n>\n</viewer>\n',
      styles: [":host{display:flex;height:600px;width:500px;outline:0;position:relative}:host.gallery--column{flex-direction:column}:host.rtl{direction:ltr}:host.rtl viewer,:host.rtl thumbs{direction:rtl}:host::ng-deep{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}:host::ng-deep button{border:none}:host::ng-deep ul{list-style-type:none;margin:0;padding:0}:host::ng-deep .sr-only{position:absolute!important;clip:rect(1px,1px,1px,1px);top:auto;left:-9999px;width:1px;height:1px;overflow:hidden}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    aria: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    descriptions: [{
      type: Input
    }],
    errorText: [{
      type: Input
    }],
    showErrors: [{
      type: Input
    }],
    mouseGestures: [{
      type: Input
    }],
    touchGestures: [{
      type: Input
    }],
    clip: [{
      type: Input
    }],
    counter: [{
      type: Input
    }],
    counterOrientation: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    objectFit: [{
      type: Input
    }],
    isRtl: [{
      type: HostBinding,
      args: ["class.rtl"]
    }, {
      type: Input
    }],
    visibleItems: [{
      type: Input
    }],
    moveByItems: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    errorTemplate: [{
      type: Input
    }],
    arrowTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    thumbs: [{
      type: Input
    }],
    thumbsAutoScroll: [{
      type: Input
    }],
    thumbsOrientation: [{
      type: Input
    }],
    thumbsArrows: [{
      type: Input
    }],
    thumbsArrowSlideByLength: [{
      type: Input
    }],
    thumbsScrollBehavior: [{
      type: Input
    }],
    thumbTemplate: [{
      type: Input
    }],
    thumbsArrowTemplate: [{
      type: Input
    }],
    thumbErrorTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    thumbHover: [{
      type: Output
    }],
    descriptionClick: [{
      type: Output
    }],
    selection: [{
      type: Output
    }],
    _viewerRef: [{
      type: ViewChild,
      args: [ViewerComponent]
    }],
    _thumbsRef: [{
      type: ViewChild,
      args: [ThumbsComponent]
    }],
    _viewerElRef: [{
      type: ViewChild,
      args: [ViewerComponent, {
        read: ElementRef
      }]
    }],
    _galleryColumn: [{
      type: HostBinding,
      args: ["class.gallery--column"]
    }],
    next: [{
      type: HostListener,
      args: ["keydown.arrowright"]
    }],
    prev: [{
      type: HostListener,
      args: ["keydown.arrowleft"]
    }]
  });
})();
export {
  GalleryComponent,
  SUPPORT,
  UA,
  isBrowser,
  orientations
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v17.1.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@daelmaak_ngx-gallery.js.map
