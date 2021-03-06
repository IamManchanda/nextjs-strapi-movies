import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import NavigationLinks from "@/components/navigation-links";
import Link from "next/link";
import ToggleNavigationColorButton from "@/components/toggle-navigation-color-button";

function NavbarHeader({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/logo.svg" alt="Sites logo" />
                <span className="logo-text">Next Movies</span>
              </a>
            </Link>
          </div>
          <div className="hide-from-mobile">
            <NavigationLinks />
          </div>
          <div className="hide-from-mobile-and-tablet">
            <ToggleNavigationColorButton />
          </div>
        </Flex>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${({ isDark, theme }) =>
    isDark ? "#000000" : theme.colors.primary};
  padding: 20px;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default NavbarHeader;
