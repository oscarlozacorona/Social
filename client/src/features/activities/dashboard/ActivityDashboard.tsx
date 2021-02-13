import React, { FC } from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';
import { ActivityDetails } from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';
import { ActivityList } from './ActivityList';

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity;
    editMode: boolean;
    cancelSelect: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

const ActivityDashboard: FC<IProps> = ({ 
        activities, selectActivity, selectedActivity, cancelSelect,
        editMode, openForm, closeForm, createOrEdit, deleteActivity,
        submitting,
    }) => {
    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </GridColumn>
            <GridColumn width={6}>
                {selectedActivity && !editMode && (
                    <ActivityDetails
                        activity={selectedActivity!}
                        openForm={openForm}
                        cancelSelect={cancelSelect}
                    />
                )}
                {editMode && (
                    <ActivityForm
                        createOrEdit={createOrEdit}
                        closeForm={closeForm}
                        activity={selectedActivity}
                        submitting={submitting}
                    />
                )}
            </GridColumn>
        </Grid>
    )
}

export default ActivityDashboard
