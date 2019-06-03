import React from 'react';
import { Router, Route, Switch } from 'dva/router';
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
  );
}

export default RouterConfig;
