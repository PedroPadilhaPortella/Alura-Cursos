import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Button } from "../../components/Button"
import { IconAvatar, IconLogo } from "../../components/Icons"
import { TransparentButton } from "../../components/TransparentButton"
import { useAuthContext } from "../../hooks/useAuthContext"
import { Container, List, ListItem, StyledHeader } from "./styles"

export const Header = () => {
  const { session, logout } = useAuthContext();
  const navigate = useNavigate();

  const onAskForLogout = () => {
    try {
      logout();
      toast.success('Voce foi deslogado!')
      navigate('/auth/login')
    } catch (error) {
      console.log('Falha ao realizar logout', error)
      toast.error('Falha ao realizar logout!')
    }
  }

  return (<StyledHeader>
    <Container>
      <List>
        <ListItem>
          <Link to="/">
            <IconLogo />
          </Link>
        </ListItem>
      </List>
      {session ? (
        <List>
          <ListItem>Joana da Silva Oliveira</ListItem>
          <ListItem>
            <IconAvatar />
          </ListItem>
          <ListItem>
            <TransparentButton onClick={onAskForLogout}>Logout</TransparentButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem>
            <Button link to="/auth/register">Abrir conta</Button>
          </ListItem>
          <ListItem>
            <Button outline link to="/auth/login">Login</Button>
          </ListItem>
        </List>
      )}
    </Container>
  </StyledHeader>)
}