import React, { FC } from "react";
import { Header, Menu } from "semantic-ui-react";
import Calender from "react-calendar";

const ActivityFilter: FC = () => {
    return (
        <>
            <Menu vertical size='large' style={{ width: "100%", marginTop: 25 }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content='Going' />
                <Menu.Item content='Hosted By Me' />
            </Menu>
            <Header />
            <Calender />
        </>
    );
};

export default ActivityFilter;
