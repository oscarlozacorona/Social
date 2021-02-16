import React, { FC } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'

const NavBar: FC = () => {
    const { activityStore } = useStore();

    return (
        <Menu inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/favicon.ico" alt="icon" style={{ marginRight: '10px' }}/>
                    Social
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item name='friends'>
                    <Button positive content="Create Activity" onClick={activityStore.openForm.bind(null, '')}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
