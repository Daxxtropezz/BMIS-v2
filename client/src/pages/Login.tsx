import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="login-username">Username</InputLabel>
          <OutlinedInput
            id="login-username"
            type="text"
            label="Username"
            placeholder="Username"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="login-password">Password</InputLabel>
          <OutlinedInput
            id="login-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Password"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
