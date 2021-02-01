import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, RoundedButton } from '../../../components/Buttons';
import {CancelIcon, CancelSmIcon} from '../../../Icons';
import FormGroup from './FormGroup';
import '../../../styles/jog-form.css'


function getIsoDate(date) {
    if (date !== undefined) {
        let dateObject = new Date(date)
        return dateObject.toISOString().substr(0, 10);
    }
} 

function FormView({onSubmit, distance, time, date}) {
    const history = useHistory();

    let isoDate = getIsoDate(date);

    const onCancel = () => {
        history.goBack();
    }

    const submit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        onSubmit(Object.fromEntries(formData));

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

            <form onSubmit={submit} className="create-form">
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