import { Box, Button, Typography } from "@mui/material";
import WhiteLogo from "../imgs/buzz-white.svg";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      className="LoginBox"
      sx={{
        maxWidth:"90%", 
        width:"980px",
        boxSizing:"border-box",
        margin: "70px auto 0",
        borderRadius: "20px",
        display: "flex",
        boxShadow: "0px 0px 30px -10px #0002",
        overflow: "hidden",
      }}
    >
      <Box
        className="welcomeBlk"
        sx={{
          width: "40%",
          padding: "40px",
          minWidth: "40%",
          background: "#ff4040",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          boxSizing: "border-box",
        }}
      >
        <img src={WhiteLogo} />
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: "600",
            color: "#fff",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Welcome to BuzzClan! Please Register Your Account.
        </Typography>
      </Box>
      <Box
        className="loginBlk"
        sx={{
          width: "60%",
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          minHeight: "50vh",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "900",
            textAlign: "center",
            mb: "70px",
            pb: "20px",
            borderBottom: "1px solid #eee",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Register Account
        </Typography>
        <Box
          className="BtnGroup"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Link to="/servicenow">
            <Button
              className="def-btn"
              variant="contained"
              sx={{
                padding: "16px",
                width: "max-content",
                minWidth: "260px",
                background: "#222",
              }}
            >
              Register with ServiceNow
            </Button>
          </Link>
          <Link to="/azuresso">
            <Button
              className="def-btn"
              variant="contained"
              sx={{
                padding: "16px",
                width: "max-content",
                minWidth: "260px",
                background: "#222",
              }}
            >
              Register with Azure SSO
            </Button>
          </Link>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Login;
