import React, { FC } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface IProps {
    openForm: () => void;
}

const NavBar: FC<IProps> = ({ openForm }) => {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/favicon.ico" alt="icon" style={{ marginRight: '10px' }}/>
                    Social
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item name='friends'>
                    <Button positive content="Create Activity" onClick={openForm}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
