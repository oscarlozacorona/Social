import React, { FC, useEffect } from "react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NavBar from "../../features/Nav/NavBar";
import { Container } from "semantic-ui-react";
import { observer } from 'mobx-react-lite';
import { LoadingComponent } from "./LoadingComponent";
import { useStore } from "../stores/store";
import "./styles.css";

const App: FC = () => {
    const { activityStore } = useStore();

    // Effects
    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />;

    return (
        <React.Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
                <ActivityDashboard />
            </Container>
        </React.Fragment>
    );
};

export default observer(App);
