import React from 'react';

import Redux from '~/store/redux';

import { Container } from './styles';

const Main = () => (
  <Container>
    <p>Your logged page goes here \o/</p>
  </Container>
);

export default Redux(Main);
