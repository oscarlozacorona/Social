import React, { ChangeEvent, FC, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    closeForm: () => void;
    activity: IActivity | undefined;
    createOrEdit: (activity: IActivity) => void;
}

export const ActivityForm: FC<IProps> = ({ closeForm, activity: selectedActivity, createOrEdit }) => {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState);

    const handleSubmit = () => {
        createOrEdit(activity);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setActivity({ ...activity, [name]: value }) 
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name="title" onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name="description" onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} name="category" onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Date' value={activity.date} name="date" onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name="city" onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name="venue" onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content="Submit" />
                <Button floated='right' type='button' content="Cancel" onClick={closeForm} />
            </Form>
        </Segment>
    )
}
