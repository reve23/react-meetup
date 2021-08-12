import {  Route, Switch } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import Favorites from "./pages/Favorites";
import Layout from './components/layout/Layout';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetUps />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp />
        </Route>
        <Route path="/favorite">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
