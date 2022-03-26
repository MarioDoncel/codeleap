import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Toastify from '../../components/Toastify';
import { EConstant } from '../../Enums/constants';
import { useLocationToastify } from '../../hooks/locationToastify.hooks';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { logUser } from '../../store/user.store';

import {
  Container,
  Main,
  InputContainer,
  InputSubmit,
  Form,
  Title,
} from './styles';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const inputName = useRef<HTMLInputElement>(null);
  const checkFieldsContent = () => {
    const nameValue = inputName?.current?.value;
    if (!nameValue && disabledSubmit) return;
    if (!nameValue && !disabledSubmit) {
      setDisabledSubmit(true);
      return;
    }
    setDisabledSubmit(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputName?.current?.value;
    if (name) {
      dispatch(logUser({ name }));
      navigate('/', {
        state: {
          status: EConstant.statusSucces,
          message: 'Logged',
        },
      });
    }
  };
  useLocationToastify(location);
  return (
    <>
      <Toastify />
      <Container>
        <Main>
          <Title> Welcome to CodeLeap Network</Title>
          <Form action="/" onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="title">Please enetr your username</label>
              <input
                ref={inputName}
                type="text"
                name="name"
                placeholder="John doe"
                className="input-text"
                onChange={checkFieldsContent}
              />
            </InputContainer>
            <div className="flex justify-end">
              <InputSubmit
                type="submit"
                value="ENTER"
                disabled={disabledSubmit}
              />
            </div>
          </Form>
        </Main>
      </Container>
    </>
  );
};

export default SignUp;
