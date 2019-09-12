import { View } from 'vyan';
import { ElementUtils } from 'vyan';
import MyButton from '../components/MyButton';



class HelloWorldView extends View {

    constructor(_id, _route, _navevent, _navparams, _parentViewStackId) {
        super(_id, _route, _navevent, _navparams, _parentViewStackId);
    }

    initView() {
        super.initView();
    }

    //Overrides by SubClass
    // call by attachView
    bindView() {
        super.bindView();
    }

    /*
    Add HTML Element Event Handlers 
    call by attachView
    */
    addViewHandler() {
        super.addViewHandler();
    }

    // call by attachView
    createViewContent() {
        let tmpViewContentEl = this.createViewHTML();
        this.addToViewElement(tmpViewContentEl);

        let cmpButton = new MyButton("cmpBtn",this.id,"helloContainer",true);
        cmpButton.init("My Component Button Enabled");
        cmpButton.attach();
        cmpButton.enabled = true;

        // Add Break Element
        let buttonContEl = ElementUtils.container("helloContainer",this.id);
        this.addBreakElement(buttonContEl);


        let cmpButton2 = new MyButton("cmpBtn2",this.id,"helloContainer",true);
        cmpButton2.init("My Component Disabled");
        cmpButton2.attach();
        cmpButton2.enabled = false;
    }

    createViewHTML() {
        let thisRef = this;
        let helloTmplHtml = `
            <div>
                <p><h2>${this.id} View Contents</h2></p>
                <p><h4>Hello World !!!</h4></p>
            </div>
            <div> <p> ${this.id} ::: Parameter Received ::: ${thisRef.navParams} </p></div>
            </br>
                </div>
                   <p> <h4> Custom Component Demo </h4></p>
                   <p> Check Console for My Component Click Event </p>
                </div>
            </br>
            <div class="vjs-container helloContainer">
            </div> 
        `;
        return helloTmplHtml;
    }

    addBreakElement(_parentEl){
        let brakEl = `</br></br>`
        _parentEl.insertAdjacentHTML('beforeend', brakEl);
    }

    removeViewHandler() {
        super.removeViewHandler();
    }
}

export default HelloWorldView;