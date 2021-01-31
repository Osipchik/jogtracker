import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {AddIcon, AddSmIcon} from '../../Icons';
import ListItem from './components/ListItem';
import { IconButton } from "../../components/Buttons";
import FilterBar from "./components/FilterBar";


function Jogs() {
    const history = useHistory();

    const onAddClick = () => {
        history.push('/add');
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
            <FilterBar/>
            <ul className="list-container">
                {data.map((i, index) => <ListItem key={i.id} data={i}/>)}
            </ul>

            <IconButton className="fab" onClick={onAddClick}>
                <AddIcon className="sm-hide"/>
                <AddSmIcon className="md-hide"/>
            </IconButton>
        </Fragment>
    )
}


export default Jogs;