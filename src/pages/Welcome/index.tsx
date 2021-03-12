import { AnimatedContainer, Form, SignInButton } from './styles';
import AuthLayout from '../_layouts/auth';
import { BancoInter } from '../../assets/images';
import { useCallback, useState } from 'react';

const Welcome: React.FC = () => {
  const [userName, setUserName] = useState('');

  const handleUserName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setUserName(event.target.value);
    },
    []
  );

  console.log('userName', userName);

  return (
    <AuthLayout>
      <AnimatedContainer>
        <h1>
          <BancoInter />
        </h1>
        <h2>
          Estudo feito por @lainwired em cima do redesign do @luke_morales.
        </h2>
        <Form>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome para entrar"
              value={userName}
              onChange={handleUserName}
            />
          </label>
          <SignInButton type="button" disabled={!userName}>
            Entrar
          </SignInButton>
        </Form>
      </AnimatedContainer>
    </AuthLayout>
  );
};

export default Welcome;
