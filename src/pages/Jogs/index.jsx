import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { AddIcon, AddSmIcon } from '../../Icons';
import { IconButton } from "../../components/Buttons";
import FilterBar from "./components/FilterBar";
import JogList from './components/JogList';
import Api from '../../api';
import { addJogs } from '../../store/actionCreators/jogActions';


function filterItems(items, filter) {
    if (filter) {
        return items.filter(i => i.date >= filter.min && i.date <= filter.max);
    }
    
    return items;
}


function Jogs() {
    const history = useHistory();
    const [filter, setFilter] = useState(null);

    const items = useSelector(state => state.jogs);
    const dispatch = useDispatch();


    useEffect(() => {
        if (items.length === 0) {
            Api.data.getData().then(i => {
                dispatch(addJogs(i.response.jogs))
            });
        }
    }, []);


    const onAddClick = () => {
        history.push('/add');
    }

    const onFilter = (dateRange) => {
        setFilter(dateRange);
    }

    return (
        <Fragment>
            <FilterBar onFilter={onFilter}/>
            <JogList items={filterItems(items, filter)}/>

            <IconButton className="fab" onClick={onAddClick}>
                <AddIcon className="sm-hide"/>
                <AddSmIcon className="md-hide"/>
            </IconButton>
        </Fragment>
    )
}


export default Jogs;