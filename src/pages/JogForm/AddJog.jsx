import React from 'react';
import FormView from "./components/FormView";
import { useDispatch } from 'react-redux'
import Api from '../../api';
import { addJog } from '../../store/actionCreators/jogActions';


function AddJog() {
    const dispatch = useDispatch();


    const onSubmit = async (formData) => {
        let res = await Api.data.addJog(formData);
        dispatch(addJog(res.response))
    }

    return (
        <FormView onSubmit={onSubmit}/>
    )
}


export default AddJog;