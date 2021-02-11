import React, { FC } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
    activity: IActivity;
    cancelSelect: () => void;
    openForm: (id: string) => void;
}

export const ActivityDetails: FC<IProps> = ({ 
    activity, cancelSelect, openForm
}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit' onClick={openForm.bind(null, activity.id)}/>
                    <Button basic color='grey' content='Cancel' onClick={cancelSelect}/>
                </Button.Group>
            </Card.Content>
        </Card>
    );
};
