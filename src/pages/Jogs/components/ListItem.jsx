import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../Icons';
import { areEqual } from "react-window";
import '../../../styles/listItem.css';


function ListItem({ index, data, style }) {
    let date = new Date(data.date);
    let localDate = date.toLocaleDateString()

    let speed = (data.distance / data.time).toFixed(2);

    return (
        <div style={style}>
            <div className="list-item">
                <div className="d-flex justify-center">
                    <Link to={`/edit/${index}`}>
                        <Icon className="mr-45"/>
                    </Link>
                    <Link to={`/edit/${index}`}>
                        <div className="list-item-info">
                            <div>
                                <span>{localDate}</span>
                            </div>
                            <div>
                                <span >Speed:</span>
                                <span>{speed}</span>
                            </div>
                            <div>
                                <span >Distance:</span>
                                <span>{data.distance}</span>
                            </div>
                            <div>
                                <span >Time:</span>
                                <span>{data.time}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ListItem, areEqual);