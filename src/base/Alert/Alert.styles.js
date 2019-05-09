import styled from 'styled-components';

import alertType from '~/src/enums/alertType.enum';
import {
  alertText,
  alertDefault,
  alertError,
  alertWarning,
} from '~src/styles/colors';

export const AlertWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(props) => {
    switch (props.type) {
      case alertType.error:
        return alertError;
      case alertType.warning:
        return alertWarning;
      default:
        return alertDefault;
    }
  }}
  color: ${alertText};
  border-radius: 4px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`;

export const AlertContent = styled.div``;
