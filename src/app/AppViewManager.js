import { ViewManager } from 'vyan';
import { Router } from 'vyan';
import { ViewNavigator } from 'vyan';
import SimpleNavigator from './navigators/SimpleNavigator';


class AppViewManager extends ViewManager {

    initialize() {
        super.initialize();
        this.initRoutes();
    }

    createNavigator(_navigatorId, _parentId,_parentContainerId) {
        let tmpNavigator = null;
        switch (_navigatorId) {
            case "simpleNavigator":
                tmpNavigator = new SimpleNavigator(_navigatorId, _parentId,_parentContainerId);
            break;

            default:
                tmpNavigator = new ViewNavigator(_navigatorId, _parentId,_parentContainerId);

        }
        return tmpNavigator;
    }

    initRoutes() {
        let tmpRoutes = [
            { path: "/hello", navigatorId: "simpleNavigator",parentId: "root" }
        ];
        this.routes = new Router(tmpRoutes);
    }
}

export default AppViewManager;