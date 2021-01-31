import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, RoundedButton } from '../../../components/Buttons';
import {CancelIcon, CancelSmIcon} from '../../../Icons';
import FormGroup from './FormGroup';
import '../../../styles/jog-form.css'


function FormView({onSubmit, distance, time, date}) {
    const history = useHistory();

    let dateObject = new Date(date)

    let isoDate = dateObject.toISOString().substr(0, 10);

    const onCancel = () => {
        history.goBack();
    }

    return (
        <div className="create-container">
            <div>
                <IconButton className="ml-auto" onClick={onCancel}>
                    <CancelIcon className="sm-hide"/>
                    <CancelSmIcon className="md-hide"/>
                </IconButton>
            </div>

            <form onSubmit={onSubmit} className="create-form">
                <FormGroup 
                    displayName="Distance" 
                    defaultValue={distance}
                    name="distance"
                    type="number"
                    step="0.01"
                    min={0.01}
                />
                
                <FormGroup 
                    displayName="Time" 
                    defaultValue={time}
                    name="time"
                    type="number"
                    min={1}
                />
                
                <FormGroup 
                    displayName="Date" 
                    defaultValue={isoDate}
                    name="date"
                    type="date"
                />


                <RoundedButton displayName="Save" size="small" className="w-100 "/>
            </form>
        </div>
    )
}


export default FormView;