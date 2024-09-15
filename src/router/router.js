import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import LandingPage from '../screens/LandingPage/LandingPage';
import Dictionary from '../screens/Dictionary/Dictionary';
import LoginForm from '../LoginForm';

const AppRouter = () => (
  <Router basename="/recuperatorio_modulo7">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/dictionary" component={Dictionary} />
      <Route path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
