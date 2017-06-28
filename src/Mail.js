import React from 'react';
import 'normalize.css';
import 'flexboxgrid'; // eslint-disable-line import/extensions
import styled from 'styled-components';

const MailContainer = styled.div`
  width: 100%;
`;

function Mail() {
  return (
    <MailContainer>
      <h1>Title</h1>
    </MailContainer>
  );
}

export default Mail;