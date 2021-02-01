import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import FormView from "./components/FormView";
import EmptyJog from '../EmptyJog/index';
import Api from '../../api';
import { editJog } from '../../store/actionCreators/jogActions';


function EditJog() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(state => state.jogs[id])


    const onSubmit = async (formData) => {
        let formObject = formData;
        formObject.jog_id = item.id;
        formObject.user_id = item.user_id

        let res = await Api.data.editJog(formObject);
        res.response.date = (new Date(res.response.date)).getTime();

        dispatch(editJog(res.response, id));
    }

    return (
        <Fragment>
            {item !== undefined
                ? <FormView onSubmit={onSubmit} time={item.time} distance={item.distance} date={item.date}/>
                : <EmptyJog/>
            }
        </Fragment>
    )
}


export default EditJog;