import React, { FC, useEffect } from 'react'
import ActivityList from './ActivityList';
import { Grid, GridColumn } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import ActivityFilter from './ActivityFilter';

const ActivityDashboard: FC = () => {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    // Effects
    useEffect(() => {
        if (activityRegistry.size <= 1) {
            loadActivities();
        }
    }, [activityRegistry.size, loadActivities]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />;

    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityList />
            </GridColumn>
            <GridColumn width={6}>
                <ActivityFilter />
            </GridColumn>
        </Grid>
    )
}

export default observer(ActivityDashboard);
