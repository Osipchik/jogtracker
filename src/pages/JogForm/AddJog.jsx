import React from 'react';
import FormView from "./components/FormView";


function AddJog() {
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        console.log(JSON.stringify(Object.fromEntries(formData)))
    }

    return (
        <FormView onSubmit={onSubmit}/>
    )
}


export default AddJog;