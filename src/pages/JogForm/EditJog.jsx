import React, { Fragment } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import FormView from "./components/FormView";
import { EmptyJogPage } from "../index";
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
        res.date = (new Date(res.date)).getTime();

        dispatch(editJog(res, id));
    }

    return (
        <Fragment>
            {item !== undefined
                ? <FormView onSubmit={onSubmit} time={item.time} distance={item.distance} date={item.date}/>
                : <Redirect to="/jogs/empty" />
            }
        </Fragment>
    )
}


export default EditJog;