import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png';

export const supabase = createClient(
  "https://ercqmrxzajqqjggczleg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyY3Ftcnh6YWpxcWpnZ2N6bGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyODQyMTksImV4cCI6MjAwMDg2MDIxOX0.liiSqrG6DEh0gIATJWfsrELSpRmnXBsP2xxdaBbG2_o"
);

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      navigate("/Board");
    }
  });

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
        <img src={logo} alt="Logo" height='110px' width='250px' style={{ marginLeft: '70px' }} />
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand:'#1f2359',
                            brandAccent: '#443b75',
                            border: 'none',
                        },
                    },
                },
            }}
            providers={[]}
        />
    </Container>
  );
}

export default Login;
