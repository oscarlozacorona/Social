import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar: FC = () => {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/favicon.ico" alt="icon" style={{ marginRight: '10px' }}/>
                    Social
                </Menu.Item>
                <Menu.Item name='Activities' as={NavLink} to='/activities' />
                <Menu.Item name='friends'>
                    <Button positive content="Create Activity" as={NavLink} to='/create-activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
