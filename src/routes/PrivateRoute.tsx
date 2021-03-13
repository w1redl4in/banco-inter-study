import { Route, Redirect, RouteProps } from 'react-router';
import { useAuthHook } from '../hooks/auth';

export interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { signed } = useAuthHook();

  if (!signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={() => <Component />} />;
};

export default PrivateRoute;
