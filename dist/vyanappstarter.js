(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vyan')) :
  typeof define === 'function' && define.amd ? define(['vyan'], factory) :
  (factory(global.vyan));
}(this, (function (vyan) { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var MyButton = function (_Component) {
      inherits(MyButton, _Component);

      /**
       *Creates an instance of MyButton.
       * @param {*} [_id=null] - "vjs-component" wrapper id
       * @param {*} [_parentViewId=null] - Parent View ID
       * @param {*} [_parentContainerId=null] - Parent Container ID
       * @param {boolean} [_createDOMElement=true] - Set "True" if HTML Template of Component generate internally.  Set - False when Template designed externally.
       * @memberof MyButton
       */
      function MyButton() {
          var _id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var _parentViewId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var _parentContainerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          var _createDOMElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          classCallCheck(this, MyButton);
          return possibleConstructorReturn(this, _Component.call(this, _id, _parentViewId, _parentContainerId, _createDOMElement));
      }

      /**
       *
       * Lifecycle Method
       * @param {string} [_label="Button"]
       * @param {string} [_formId="defaultform"]
       * @memberof MyButton
       */


      MyButton.prototype.init = function init() {
          var _label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Button";

          var _formId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "defaultform";

          this.label = _label;
          this.formId = _formId;
          // call super class init method
          _Component.prototype.init.call(this);
      };

      /**
       *
       * Lifecycle Method
       * @memberof MyButton
       */


      MyButton.prototype.initComponent = function initComponent() {
          _Component.prototype.initComponent.call(this);
      };

      /**
       * Create HTML Elements for Button
       * LifeCycle Method 
       * @memberof MyButton
       */


      MyButton.prototype.createDOMContent = function createDOMContent() {
          _Component.prototype.createDOMContent.call(this);
          var tmpCompContentEl = this.createComponentHTML();
          // Use following method to add Template to Component Wrapper
          this.addToComponentElement(tmpCompContentEl);
      };

      /**
       *
       * Call by Attached Method 
       * Implement all Event Handlers here
       * LifeCycle Method 
       * @memberof MyButton
       */


      MyButton.prototype.addEventHandler = function addEventHandler() {
          var _this2 = this;

          _Component.prototype.addEventHandler.call(this);
          if (this.componentElement != null) {
              var buttonEl = this.componentElement.querySelector("input[type='button']");
              buttonEl.addEventListener("click", function (e) {
                  _this2.clickHandler(e);
              });
          }
      };

      MyButton.prototype.clickHandler = function clickHandler(event) {
          event.preventDefault();
          var srcObjfrmEvt = event.target;
          console.log(srcObjfrmEvt.value + " :: HTML Button Click Event Received ::");
          console.log("MyButton Custom Click Event Dispatched");
          this.dispatchEvent(vyan.EventUtils.CLICK, this);
      };

      /**
       *
       * Implement Component Enabled here
       * this method call by "enabled" setter
       * @memberof MyButton
       */


      MyButton.prototype.setComponentEnabled = function setComponentEnabled() {
          _Component.prototype.setComponentEnabled.call(this);
          var buttonEl = this.componentElement.querySelector("input[type='button']");
          if (this.enabled == false) {
              buttonEl.setAttribute("disabled", "disabled");
          } else {
              if (buttonEl.hasAttribute("disabled")) {
                  buttonEl.removeAttribute("disabled");
              }
          }
      };

      /**
       *
       * Implement Component ReadOnly here
       * this method call by "readonly" setter
       * @memberof MyButton
       */


      MyButton.prototype.setComponentReadOnly = function setComponentReadOnly() {
          _Component.prototype.setComponentReadOnly.call(this);
      };

      /**
       *
       * call by createDOMContent
       * @memberof MyButton
       */


      MyButton.prototype.createComponentHTML = function createComponentHTML() {
          var btnHtml = '<input type="button" value="' + this.label + '">';
          return btnHtml;
      };

      return MyButton;
  }(vyan.Component);

  var HelloWorldView = function (_View) {
      inherits(HelloWorldView, _View);

      function HelloWorldView(_id, _route, _navevent, _navparams, _parentViewStackId) {
          classCallCheck(this, HelloWorldView);
          return possibleConstructorReturn(this, _View.call(this, _id, _route, _navevent, _navparams, _parentViewStackId));
      }

      HelloWorldView.prototype.initView = function initView() {
          _View.prototype.initView.call(this);
      };

      //Overrides by SubClass
      // call by attachView


      HelloWorldView.prototype.bindView = function bindView() {
          _View.prototype.bindView.call(this);
      };

      /*
      Add HTML Element Event Handlers 
      call by attachView
      */


      HelloWorldView.prototype.addViewHandler = function addViewHandler() {
          _View.prototype.addViewHandler.call(this);
      };

      // call by attachView


      HelloWorldView.prototype.createViewContent = function createViewContent() {
          var tmpViewContentEl = this.createViewHTML();
          this.addToViewElement(tmpViewContentEl);

          var cmpButton = new MyButton("cmpBtn", this.id, "helloContainer", true);
          cmpButton.init("My Component Button Enabled");
          cmpButton.attach();
          cmpButton.enabled = true;

          // Add Break Element
          var buttonContEl = vyan.ElementUtils.container("helloContainer", this.id);
          this.addBreakElement(buttonContEl);

          var cmpButton2 = new MyButton("cmpBtn2", this.id, "helloContainer", true);
          cmpButton2.init("My Component Disabled");
          cmpButton2.attach();
          cmpButton2.enabled = false;
      };

      HelloWorldView.prototype.createViewHTML = function createViewHTML() {
          var thisRef = this;
          var helloTmplHtml = '\n            <div>\n                <p><h2>' + this.id + ' View Contents</h2></p>\n                <p><h4>Hello World !!!</h4></p>\n            </div>\n            <div> <p> ' + this.id + ' ::: Parameter Received ::: ' + thisRef.navParams + ' </p></div>\n            </br>\n                </div>\n                   <p> <h4> Custom Component Demo </h4></p>\n                   <p> Check Console for My Component Click Event </p>\n                </div>\n            </br>\n            <div class="vjs-container helloContainer">\n            </div> \n        ';
          return helloTmplHtml;
      };

      HelloWorldView.prototype.addBreakElement = function addBreakElement(_parentEl) {
          var brakEl = '</br></br>';
          _parentEl.insertAdjacentHTML('beforeend', brakEl);
      };

      HelloWorldView.prototype.removeViewHandler = function removeViewHandler() {
          _View.prototype.removeViewHandler.call(this);
      };

      return HelloWorldView;
  }(vyan.View);

  var SimpleNavigator = function (_ViewNavigator) {
      inherits(SimpleNavigator, _ViewNavigator);

      function SimpleNavigator(_id, _parentId, _parentContainerId) {
          classCallCheck(this, SimpleNavigator);
          return possibleConstructorReturn(this, _ViewNavigator.call(this, _id, _parentId, _parentContainerId));
      }

      SimpleNavigator.prototype.initNavigator = function initNavigator() {
          this.history = false;
          this.initEventRoutes();
      };

      SimpleNavigator.prototype.renderNavigatorContent = function renderNavigatorContent() {
          _ViewNavigator.prototype.renderNavigatorContent.call(this);
      };

      SimpleNavigator.prototype.createView = function createView(_viewId, _route, _navevent, _navparams, _viewStackId) {
          var tmpView = null;
          switch (_viewId) {
              case "helloview":
                  tmpView = new HelloWorldView(_viewId, _route, _navevent, _navparams, _viewStackId);
                  break;
              default:
                  tmpView = new View(_viewId, _route, _navevent, _navparams, _viewStackId);
                  break;

          }
          return tmpView;
      };

      SimpleNavigator.prototype.initEventRoutes = function initEventRoutes() {
          var helloEvntRoutes = [{ navEvent: "Hello_NavEvent", viewstackId: "HelloWorldStack", viewId: "helloview", path: "/hello" }];
          this.eventRouter = new vyan.EventRouter(helloEvntRoutes);
      };

      return SimpleNavigator;
  }(vyan.ViewNavigator);

  var AppViewManager = function (_ViewManager) {
      inherits(AppViewManager, _ViewManager);

      function AppViewManager() {
          classCallCheck(this, AppViewManager);
          return possibleConstructorReturn(this, _ViewManager.apply(this, arguments));
      }

      AppViewManager.prototype.initialize = function initialize() {
          _ViewManager.prototype.initialize.call(this);
          this.initRoutes();
      };

      AppViewManager.prototype.createNavigator = function createNavigator(_navigatorId, _parentId, _parentContainerId) {
          var tmpNavigator = null;
          switch (_navigatorId) {
              case "simpleNavigator":
                  tmpNavigator = new SimpleNavigator(_navigatorId, _parentId, _parentContainerId);
                  break;

              default:
                  tmpNavigator = new vyan.ViewNavigator(_navigatorId, _parentId, _parentContainerId);

          }
          return tmpNavigator;
      };

      AppViewManager.prototype.initRoutes = function initRoutes() {
          var tmpRoutes = [{ path: "/hello", navigatorId: "simpleNavigator", parentId: "root" }];
          this.routes = new vyan.Router(tmpRoutes);
      };

      return AppViewManager;
  }(vyan.ViewManager);

  var Application = function () {
      function Application() {
          classCallCheck(this, Application);

          this.initialize();
      }

      Application.prototype.initialize = function initialize() {
          this.viewmanager = new AppViewManager();
      };

      Application.prototype.start = function start() {
          var helloNavEvent = new vyan.NavigationEvent(vyan.EventUtils.NAV_CHANGE_EVENT, "Hello_NavEvent", "My First Hello World Message as Navigation Param", "/hello");

          //Dispatch Hello Navigation Event
          vyan.EventBroadCaster.navEventChannel.dispatchEvent(helloNavEvent);
      };

      return Application;
  }();

  var startApp = function startApp() {
      var myApp = new Application();
      myApp.start();
  };

  startApp();

})));
