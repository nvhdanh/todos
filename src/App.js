import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoList from "./containers/TodoList/TodoList";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Logout/Logout";
import Info from './containers/Info/Info'
import InfiniteScroll from './containers/InifiteScroll/InfiniteScroll'
import { AuthContext } from "./context/Auth";

const App = () => {
  const authContext = useContext(AuthContext);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />      
      <Route path="/info" component={Info} />
      <Route exact path="/" component={TodoList} />
      <Redirect to="/"/>
    </Switch>
  );

  if (authContext.isAuth) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/info" component={Info} />
        <Route path="/infinite-scroll" component={InfiniteScroll} />
        <Route exact path="/" component={TodoList} />
        <Redirect to="/"/>
      </Switch>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>{routes}</main>
      <Footer />
    </div>
  );
};

export default App;
