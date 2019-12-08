import Link from "next/link";
import styled from "styled-components";

const Logo = styled.img`
  max-width: 75px;
  cursor: pointer;
  margin-bottom: 0px;
`;

function Header() {
  return (
    <div>
      <Link href="/">
        <Logo src="https://cool-toys.com.au/wp-content/uploads/2019/06/fac408308-justice-league-2017-batarang-1-1-scale-life-size-stunt-replica-01.1551747397-500x313.png" />
      </Link>
    </div>
  );
}

export default Header;
