import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)({
  'input': {
    color: 'white',
  },
  '& input + fieldset': {
    borderColor: 'white',
    borderWidth: 4,
    color: 'white',
  },
});

Input.displayName = 'Input';

export default Input;
