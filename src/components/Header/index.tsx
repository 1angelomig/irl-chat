import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

const HeaderContainer = styled(Box)`
  width: 100%;
  background-color: black;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div``;

const Logo = () => {};

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeaderContainer>
          <LogoContainer>Teste</LogoContainer>
        </HeaderContainer>
      </Grid>
    </Grid>
  );
};

export default Header;
