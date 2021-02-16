import React, { FC } from 'react'
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import { Grid, GridColumn } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import { ActivityDetails } from '../details/ActivityDetails';
import { observer } from 'mobx-react-lite';

const ActivityDashboard: FC = () => {
    const { activityStore } = useStore();
    const { selectedActivity, editMode} = activityStore;

    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityList />
            </GridColumn>
            <GridColumn width={6}>
                {selectedActivity && !editMode && (
                    <ActivityDetails />
                )}
                {editMode && (
                    <ActivityForm />
                )}
            </GridColumn>
        </Grid>
    )
}

export default observer(ActivityDashboard);
