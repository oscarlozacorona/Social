import React from 'react';
import { Header, Icon} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div>
        <Header as='h2'>
            <Icon name="plug"/>
            <Header.Content>Uptime Guarantee</Header.Content>
        </Header>
    </div>
  );
}

export default App;
