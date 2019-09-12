import { EventUtils } from 'vyan';
import { EventBroadCaster } from 'vyan';
import { NavigationEvent } from 'vyan';
import AppViewManager from './AppViewManager';

class Application {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.viewmanager = new AppViewManager();
    }

    start() {
        let helloNavEvent = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "Hello_NavEvent", "My First Hello World Message as Navigation Param", "/hello");
        
        //Dispatch Hello Navigation Event
        EventBroadCaster.navEventChannel.dispatchEvent(helloNavEvent);
    }

}
export default Application;