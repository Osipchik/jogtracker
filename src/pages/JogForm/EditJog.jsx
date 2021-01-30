import React from 'react';
import { useParams } from 'react-router-dom';
import FormView from "./components/FormView";


function EditJog() {
    const { id } = useParams();

    const data = {
        time: '',
        date: '',
        distance: ''
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        console.log(JSON.stringify(Object.fromEntries(formData)))
    }

    return (
        <FormView onSubmit={onSubmit} time={data.time} distance={data.distance} date={data.date}/>
    )
}


export default EditJog;