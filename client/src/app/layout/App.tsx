import React, { FC, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import NavBar from "../../features/Nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import "./styles.css";
import { LoadingComponent } from "./LoadingComponent";
import { act } from "react-dom/test-utils";

const App: FC = () => {
    // State
    const [allActivities, setAllActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

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
        setSubmitting(true);
        if (activity.id) {
            agent.activities.update(activity).then(() => {
                setAllActivities([...allActivities.filter(x => x.id !== activity.id), activity]);
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        } else {
            activity.id = uuid();
            agent.activities.create(activity).then(() => {
                setAllActivities([...allActivities, activity]);
                setSelectedActivity(activity);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }

    const handleDeleteActivity = (id: string) => {
        setSubmitting(true);
        agent.activities.delete(id).then(() => {
            setAllActivities(allActivities.filter(x => x.id != id));
            setSubmitting(false);
        })
    }

    // Effects
    useEffect(() => {
        agent.activities.list().then(res => {
            let newActivities: IActivity[] = [];
            res.forEach(activity => {
                activity.date = activity.date.split('T')[0];
                newActivities.push(activity);
            });
            setAllActivities(newActivities);
            setLoading(false);
        });
    }, []);

    if (loading) return <LoadingComponent content='Loading App' />;

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
                    submitting={submitting}
                />
            </Container>
        </React.Fragment>
    );
};

export default App;
