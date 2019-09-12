
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vyan')) :
  typeof define === 'function' && define.amd ? define(['vyan'], factory) :
  (global = global || self, factory(global.vyan));
}(this, function (vyan) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var MyButton =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MyButton, _Component);

    /**
     *Creates an instance of MyButton.
     * @param {*} [_id=null] - "vjs-component" wrapper id
     * @param {*} [_parentViewId=null] - Parent View ID
     * @param {*} [_parentContainerId=null] - Parent Container ID
     * @param {boolean} [_createDOMElement=true] - Set "True" if HTML Template of Component generate internally.  Set - False when Template designed externally.
     * @memberof MyButton
     */
    function MyButton(_id, _parentViewId, _parentContainerId, _createDOMElement) {
      if (_id === void 0) {
        _id = null;
      }

      if (_parentViewId === void 0) {
        _parentViewId = null;
      }

      if (_parentContainerId === void 0) {
        _parentContainerId = null;
      }

      if (_createDOMElement === void 0) {
        _createDOMElement = true;
      }

      return _Component.call(this, _id, _parentViewId, _parentContainerId, _createDOMElement) || this;
    }
    /**
     *
     * Lifecycle Method
     * @param {string} [_label="Button"]
     * @param {string} [_formId="defaultform"]
     * @memberof MyButton
     */


    var _proto = MyButton.prototype;

    _proto.init = function init(_label, _formId) {
      if (_label === void 0) {
        _label = "Button";
      }

      if (_formId === void 0) {
        _formId = "defaultform";
      }

      this.label = _label;
      this.formId = _formId; // call super class init method

      _Component.prototype.init.call(this);
    }
    /**
     *
     * Lifecycle Method
     * @memberof MyButton
     */
    ;

    _proto.initComponent = function initComponent() {
      _Component.prototype.initComponent.call(this);
    }
    /**
     * Create HTML Elements for Button
     * LifeCycle Method 
     * @memberof MyButton
     */
    ;

    _proto.createDOMContent = function createDOMContent() {
      _Component.prototype.createDOMContent.call(this);

      var tmpCompContentEl = this.createComponentHTML(); // Use following method to add Template to Component Wrapper

      this.addToComponentElement(tmpCompContentEl);
    }
    /**
     *
     * Call by Attached Method 
     * Implement all Event Handlers here
     * LifeCycle Method 
     * @memberof MyButton
     */
    ;

    _proto.addEventHandler = function addEventHandler() {
      var _this = this;

      _Component.prototype.addEventHandler.call(this);

      if (this.componentElement != null) {
        var buttonEl = this.componentElement.querySelector("input[type='button']");
        buttonEl.addEventListener("click", function (e) {
          _this.clickHandler(e);
        });
      }
    };

    _proto.clickHandler = function clickHandler(event) {
      event.preventDefault();
      var srcObjfrmEvt = event.target;
      console.log(srcObjfrmEvt.value + " :: HTML Button Click Event Received ::");
      console.log("MyButton Custom Click Event Dispatched");
      this.dispatchEvent(vyan.EventUtils.CLICK, this);
    }
    /**
     *
     * Implement Component Enabled here
     * this method call by "enabled" setter
     * @memberof MyButton
     */
    ;

    _proto.setComponentEnabled = function setComponentEnabled() {
      _Component.prototype.setComponentEnabled.call(this);

      var buttonEl = this.componentElement.querySelector("input[type='button']");

      if (this.enabled == false) {
        buttonEl.setAttribute("disabled", "disabled");
      } else {
        if (buttonEl.hasAttribute("disabled")) {
          buttonEl.removeAttribute("disabled");
        }
      }
    }
    /**
     *
     * Implement Component ReadOnly here
     * this method call by "readonly" setter
     * @memberof MyButton
     */
    ;

    _proto.setComponentReadOnly = function setComponentReadOnly() {
      _Component.prototype.setComponentReadOnly.call(this);
    }
    /**
     *
     * call by createDOMContent
     * @memberof MyButton
     */
    ;

    _proto.createComponentHTML = function createComponentHTML() {
      var btnHtml = "<input type=\"button\" value=\"" + this.label + "\">";
      return btnHtml;
    };

    return MyButton;
  }(vyan.Component);

  var HelloWorldView =
  /*#__PURE__*/
  function (_View) {
    _inheritsLoose(HelloWorldView, _View);

    function HelloWorldView(_id, _route, _navevent, _navparams, _parentViewStackId) {
      return _View.call(this, _id, _route, _navevent, _navparams, _parentViewStackId) || this;
    }

    var _proto = HelloWorldView.prototype;

    _proto.initView = function initView() {
      _View.prototype.initView.call(this);
    } //Overrides by SubClass
    // call by attachView
    ;

    _proto.bindView = function bindView() {
      _View.prototype.bindView.call(this);
    }
    /*
    Add HTML Element Event Handlers 
    call by attachView
    */
    ;

    _proto.addViewHandler = function addViewHandler() {
      _View.prototype.addViewHandler.call(this);
    } // call by attachView
    ;

    _proto.createViewContent = function createViewContent() {
      var tmpViewContentEl = this.createViewHTML();
      this.addToViewElement(tmpViewContentEl);
      var cmpButton = new MyButton("cmpBtn", this.id, "helloContainer", true);
      cmpButton.init("My Component Button Enabled");
      cmpButton.attach();
      cmpButton.enabled = true; // Add Break Element

      var buttonContEl = vyan.ElementUtils.container("helloContainer", this.id);
      this.addBreakElement(buttonContEl);
      var cmpButton2 = new MyButton("cmpBtn2", this.id, "helloContainer", true);
      cmpButton2.init("My Component Disabled");
      cmpButton2.attach();
      cmpButton2.enabled = false;
    };

    _proto.createViewHTML = function createViewHTML() {
      var thisRef = this;
      var helloTmplHtml = "\n            <div>\n                <p><h2>" + this.id + " View Contents</h2></p>\n                <p><h4>Hello World !!!</h4></p>\n            </div>\n            <div> <p> " + this.id + " ::: Parameter Received ::: " + thisRef.navParams + " </p></div>\n            </br>\n                </div>\n                   <p> <h4> Custom Component Demo </h4></p>\n                   <p> Check Console for My Component Click Event </p>\n                </div>\n            </br>\n            <div class=\"vjs-container helloContainer\">\n            </div> \n        ";
      return helloTmplHtml;
    };

    _proto.addBreakElement = function addBreakElement(_parentEl) {
      var brakEl = "</br></br>";

      _parentEl.insertAdjacentHTML('beforeend', brakEl);
    };

    _proto.removeViewHandler = function removeViewHandler() {
      _View.prototype.removeViewHandler.call(this);
    };

    return HelloWorldView;
  }(vyan.View);

  var SimpleNavigator =
  /*#__PURE__*/
  function (_ViewNavigator) {
    _inheritsLoose(SimpleNavigator, _ViewNavigator);

    function SimpleNavigator(_id, _parentId, _parentContainerId) {
      return _ViewNavigator.call(this, _id, _parentId, _parentContainerId) || this;
    }

    var _proto = SimpleNavigator.prototype;

    _proto.initNavigator = function initNavigator() {
      this.history = false;
      this.initEventRoutes();
    };

    _proto.renderNavigatorContent = function renderNavigatorContent() {
      _ViewNavigator.prototype.renderNavigatorContent.call(this);
    };

    _proto.createView = function createView(_viewId, _route, _navevent, _navparams, _viewStackId) {
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

    _proto.initEventRoutes = function initEventRoutes() {
      var helloEvntRoutes = [{
        navEvent: "Hello_NavEvent",
        viewstackId: "HelloWorldStack",
        viewId: "helloview",
        path: "/hello"
      }];
      this.eventRouter = new vyan.EventRouter(helloEvntRoutes);
    };

    return SimpleNavigator;
  }(vyan.ViewNavigator);

  var AppViewManager =
  /*#__PURE__*/
  function (_ViewManager) {
    _inheritsLoose(AppViewManager, _ViewManager);

    function AppViewManager() {
      return _ViewManager.apply(this, arguments) || this;
    }

    var _proto = AppViewManager.prototype;

    _proto.initialize = function initialize() {
      _ViewManager.prototype.initialize.call(this);

      this.initRoutes();
    };

    _proto.createNavigator = function createNavigator(_navigatorId, _parentId, _parentContainerId) {
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

    _proto.initRoutes = function initRoutes() {
      var tmpRoutes = [{
        path: "/hello",
        navigatorId: "simpleNavigator",
        parentId: "root"
      }];
      this.routes = new vyan.Router(tmpRoutes);
    };

    return AppViewManager;
  }(vyan.ViewManager);

  var Application =
  /*#__PURE__*/
  function () {
    function Application() {
      this.initialize();
    }

    var _proto = Application.prototype;

    _proto.initialize = function initialize() {
      this.viewmanager = new AppViewManager();
    };

    _proto.start = function start() {
      var helloNavEvent = new vyan.NavigationEvent(vyan.EventUtils.NAV_CHANGE_EVENT, "Hello_NavEvent", "My First Hello World Message as Navigation Param", "/hello"); //Dispatch Hello Navigation Event

      vyan.EventBroadCaster.navEventChannel.dispatchEvent(helloNavEvent);
    };

    return Application;
  }();

  var startApp = function startApp() {
    var myApp = new Application();
    myApp.start();
  };

  startApp();

}));
