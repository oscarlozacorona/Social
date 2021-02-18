import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSideBar from "./ActivityDetailSideBar";

const ActivityDetails: FC = () => {
    const { activityStore } = useStore();
    const {
        selectedActivity: activity,
        loadActivity,
        loadingInitial,
    } = activityStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            loadActivity(id);
        }
    }, [id, loadActivity]);

    if (loadingInitial || !activity)
        return <LoadingComponent inverted content='' />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailHeader activity={activity}/>
                <ActivityDetailInfo activity={activity}/>
                <ActivityDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailSideBar />
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDetails);
