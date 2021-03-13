import { AnimatedContainer, Form, SignInButton } from './styles';
import AuthLayout from '../_layouts/auth';
import { BancoInter } from '../../assets/images';
import { useCallback, useState } from 'react';
import { transform } from 'framer-motion';
import { useTheme } from 'styled-components';
import { ANIMATION } from './animation';
import { useAuthHook } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

const Welcome: React.FC = () => {
  const [userName, setUserName] = useState('');

  const { colors } = useTheme();
  const { signIn } = useAuthHook();
  const history = useHistory();

  const inputRange = [0, 4];
  const outputRange = [colors.lightGrey, colors.primary];
  const animateBackground = transform(inputRange, outputRange);

  const handleUserName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setUserName(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      signIn(userName);
      history.push('/dashboard');
    },
    [history, signIn, userName]
  );

  return (
    <AuthLayout background={animateBackground(userName.length)}>
      <AnimatedContainer
        variants={ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <BancoInter />
        </h1>
        <h2>
          Estudo feito por @lainwired em cima do redesign do @luke_morales.
        </h2>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome para entrar"
              value={userName}
              onChange={handleUserName}
            />
          </label>
          <SignInButton type="submit" disabled={!userName}>
            Entrar
          </SignInButton>
        </Form>
      </AnimatedContainer>
    </AuthLayout>
  );
};

export default Welcome;
