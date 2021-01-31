import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../Icons';
import '../../../styles/listItem.css';


function ListItem({ data }) {
    return (
        <li className="list-item">
            <div className="d-flex justify-center">
                <Link to={`/edit/${data.id}`}>
                    <Icon className="mr-45"/>
                </Link>
                <Link to={`/edit/${data.id}`}>
                    <div className="list-item-info">
                        <div>
                            <span>{data.date}</span>
                        </div>
                        <div>
                            <span >Speed:</span>
                            <span>{data.speed}</span>
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
        </li>
    )
}

export default ListItem;