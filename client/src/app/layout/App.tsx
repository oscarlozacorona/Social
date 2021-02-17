import React, { FC, useEffect, useState } from "react";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/homepage";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import { Container } from "semantic-ui-react";
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from "react-router-dom";
import "./styles.css";

const App: FC = () => {
    const location = useLocation();
    const [showPath, setShowPath] = useState(false);

    useEffect(() => {
        if (location.pathname !== '/') {
            setShowPath(true)
        } else {
            setShowPath(false);
        }
    }, [location]);
    return (
        <>
            <Route path='/' exact component={HomePage}/>
            {showPath && (<Route 
                path={'/(.*)'}
                render={ActiviesApp.bind(null, location.key)}
            />)}
        </>
    );
};

export default observer(App);

const ActiviesApp = (key: string | undefined) => {
    return (
        <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
                <Route path='/activities' exact component={ActivityDashboard}/>
                <Route path='/activities/:id' component={ActivityDetails}/>
                <Route key={key} path={['/create-activity', '/manage/:id']} component={ActivityForm}/>
            </Container>
        </>
    )
}
