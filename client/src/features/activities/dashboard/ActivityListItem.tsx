import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Item, Button, Segment, Icon } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
    activity: IActivity;
}

const ActivityListItem: FC<IProps> = ({ activity }) => {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image
                            size='tiny'
                            circular
                            src='/assets/user.png'
                        />
                        <Item.Content>
                            <Item.Header
                                as={Link}
                                to={`/activities/${activity.id}`}
                            >
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by Billy</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>Attendees go here</Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    );
};

export default ActivityListItem;
