import React, {Component} from "react";
import { Router, Route, Switch, } from 'dva/router';

import routes from './page-route';
import componentHoc from './components/componentHoc'

const routesHoc = routes.map((item)=>{
    return {
        path: item.path,
        component: componentHoc(item.component),
    }
})

function RouterConfig({ history }) {
  return (
    <App history={history} />
  );
}

class App extends Component{
    render() {
        const { history } = this.props;
        return (
            <div style={{display: 'flex',height:'100%', flexDirection: 'column'}}>
                <Router history={history}>
                    <Switch>
                        {
                            routesHoc.map((item)=>{
                                return (
                                    <Route
                                        key={item.path}
                                        exact
                                        path={item.path}
                                        component={item.component}
                                    />
                                )
                            })
                        }
                    </Switch>
                </Router>
            </div>
        );
    }
}



export default RouterConfig;
