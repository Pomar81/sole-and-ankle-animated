import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";
import { Watch } from "react-feather";

const NavLink = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <PassiveText>{children}</PassiveText>
      <ActiveText aria-hidden={true}>{children}</ActiveText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  overflow: hidden;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  position: relative;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transition: transform 250ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const PassiveText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const ActiveText = styled(Text)`
  font-weight: ${WEIGHTS.bold};
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
