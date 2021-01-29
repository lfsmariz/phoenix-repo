import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormPage from "./pages/FormPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/form'} component={FormPage}/>
          <Route exact path={'/edit-form/:userid'} component={EditPage}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
