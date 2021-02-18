import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

const HomePage: FC = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottem: 12}} />
                    Social
                </Header>
                <Header as='h2' inverted content='Welcome to Social' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to Activities
                </Button>
            </Container>
        </Segment>
    );
};

export default HomePage;
