import React, { useState } from 'react';

import { MuiTextField, InputAdornment, IconButton } from '../mui-components/MuiComponents';
import { Visibility, VisibilityOff } from '../mui-icons/muiIcons';

function TextField({ input, id, label, meta, size, placeholder, disabled, autoFocus = false, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let fieldType = 'text';
  if (id === 'password' || id === 'confirmPassword') {
    fieldType = showPassword ? 'text' : 'password';
  }

  return (
    <MuiTextField
      InputProps={{
        autoComplete: 'new-password',
        autoFocus,
        endAdornment:
          id === 'password' || id === 'confirmPassword' ? (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
        form: {
          autoComplete: 'off',
        },
        step: 'any',
      }}
      label={label}
      variant="outlined"
      size="small"
      type={fieldType}
      focused
      fullWidth
      color="secondary"
      placeholder={placeholder}
      disabled={disabled}
      sx={(theme) => ({
        '& .MuiInputBase-input': {
          color: theme.palette.text.secondary,
          ...theme.typography.body1,
        },
        '& .MuiInputLabel-root': {
          color: `${theme.palette.text.secondary} !important`,
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: meta.error && meta.touched ? theme.palette.error.main : theme.palette.grey[300],
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: meta.error && meta.touched ? theme.palette.error.main : theme.palette.grey[300],
          },
        },
      })}
      error={meta.error && meta.touched}
      helperText={meta.touched && meta.error}
      {...input}
      {...rest}
    />
  );
}

export default TextField;
