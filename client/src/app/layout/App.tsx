import React, { FC, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import axios from "axios";
import NavBar from "../../features/Nav/NavBar";
import "./styles.css";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from 'uuid';

const App: FC = () => {
    // State
    const [allActivities, setAllActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    // Internal functions
    const handleSelectActivity = (id: string) => {
        setSelectedActivity(allActivities.find(x => x.id === id));
    };

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleFormOpen = (id?: string) => {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    const handleFormClose = () => {
        setEditMode(false);
    }

    const handleCreateOrEditActivity = (activity: IActivity) => {
        activity.id 
            ? setAllActivities([...allActivities.filter(x => x.id !== activity.id), activity])
            : setAllActivities([...allActivities, {...activity, id: uuid() }]);
        setEditMode(false);
        setSelectedActivity(activity);
    }

    const handleDeleteActivity = (id: string) => {
        setAllActivities(allActivities.filter(x => x.id != id));
    }

    // Effects
    useEffect(() => {
        axios
            .get<IActivity[]>("http://localhost:5000/api/activities")
            .then(res => {
                setAllActivities(res.data);
            });
    }, []);

    useEffect(() => {
        if (allActivities && allActivities[0]) {
            console.log(allActivities);
        }
    }, [allActivities]);

    return (
        <React.Fragment>
            <NavBar openForm={handleFormOpen}/>
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard
                    activities={allActivities}
                    selectActivity={handleSelectActivity}
                    selectedActivity={selectedActivity!}
                    cancelSelect={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivity}
                />
            </Container>
        </React.Fragment>
    );
};

export default App;
