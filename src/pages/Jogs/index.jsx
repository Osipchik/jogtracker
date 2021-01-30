import React, { Fragment } from 'react';
import {useRouteMatch, Link, useHistory} from 'react-router-dom';
import { Add } from '../../Icons';
import ListItem from './ListItem';
import {IconButton} from "../../components/Buttons";


function Jogs() {
    const history = useHistory();
    let { url } = useRouteMatch();

    const onAddClick = () => {
        history.push('/jogs/add');
    }

    let data = [
        {id: 1, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 2, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 3, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 4, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 5, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 6, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 7, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 8, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 9, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 10, date: '20.12.2017', speed: 15, distance: 10, time: 60},
        {id: 11, date: '20.12.2017', speed: 15, distance: 10, time: 60}
    ]

    return (
        <Fragment>
            <ul className="list-container">
                {data.map((i, index) => <ListItem key={i.id} data={i} url={url}/>)}
            </ul>

            <IconButton className="fab" onClick={onAddClick}>
                <Add/>
            </IconButton>
        </Fragment>
    )
}


export default Jogs;