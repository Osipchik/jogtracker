import React from 'react';
import { useHistory } from 'react-router-dom';
import {SadRoundedSquareEmoticonSmIcon, SadRoundedSquareEmotionIcon} from "../../Icons";
import { RoundedButton } from "../../components/Buttons";
import '../../styles/empty.css';


function EmptyJog() {
    const history = useHistory();

    const onCreateClick = () => {
        history.replace('/jogs/add');
    }

    return (
        <div className="empty-container">
            <div className="flex-center">
                <SadRoundedSquareEmotionIcon className="sm-hide"/>
                <SadRoundedSquareEmoticonSmIcon className="md-hide"/>
                <h2 className="message message-empty-space">Nothing is here</h2>
            </div>

            <RoundedButton
                displayName="Create your jog first"
                theme="pink"
                onClick={onCreateClick}
            />
        </div>
    )
}


export default EmptyJog;