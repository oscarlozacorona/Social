import react from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface IProps {
    inverted?: boolean;
    content: string;
}

export const LoadingComponent = ({inverted = true, content = 'Loading...'}: IProps) => {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content}/>
        </Dimmer>
    )
}