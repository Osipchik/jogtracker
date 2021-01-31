import React, { useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { RoundedButton } from '../../components/Buttons';
import {BearFaceIcon, BearFacePinkIcon} from "../../Icons";
import AuthorizeContext from "../../contexts/AuthorizeContext";
import '../../styles/login.css';


function Login() {
    const { authorize } = useContext(AuthorizeContext);
    const history = useHistory();

    const onClick = () => {
        history.replace('/jogs');
        authorize();
    }

    return (
        <div className="login-container">
            <div className="flex-center">
                <span className="login-margin">
                    <BearFaceIcon className="sm-hide"/>
                    <BearFacePinkIcon className="md-hide"/>
                </span>

                <RoundedButton
                    displayName="Let me in"
                    className="login-button"
                    onClick={onClick}
                />
            </div>
        </div>
    )
}


export default Login;