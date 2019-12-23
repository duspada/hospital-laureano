import styled from 'styled-components';
import Typography from '~/components/Typography';
import { alertError } from '~/styles/colors';

export const ErrorText = styled(Typography).attrs({ variant: 'caption' })`
  color: ${alertError};
`;
