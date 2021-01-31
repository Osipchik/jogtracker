import React from 'react';
import FormView from "./components/FormView";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Api from '../../api';
import { addJog } from '../../store/actionCreators/jogActions';


function AddJog() {
    const history = useHistory();
    const dispatch = useDispatch();


    const onSubmit = async (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.target);
        let res = await Api.data.addJog(Object.fromEntries(formData));
        
        dispatch(addJog(res.response))


        history.goBack();
    }

    return (
        <FormView onSubmit={onSubmit}/>
    )
}


export default AddJog;