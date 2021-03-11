import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
