import { TextField } from '@mui/material';

import { InputWithLabelProps } from './InputWithLabel.type';
import { Wrapper } from './InputWithLabel.style';

const InputWithLabel = ({ label, ...props }: InputWithLabelProps) => {
  return (
    <Wrapper>
      <h2>{label}</h2>
      <TextField {...props} />
    </Wrapper>
  );
};

export default InputWithLabel;
