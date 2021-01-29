import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/form'} component={FormPage}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
