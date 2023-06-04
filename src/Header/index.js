import { Title } from "./styled";

const Header = ({title}) => (
    <header className="header">
        <Title>{title}</Title>
    </header>
)

export default Header;