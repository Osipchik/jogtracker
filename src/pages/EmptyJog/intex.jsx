import React from 'react';
import { useHistory } from 'react-router-dom';
import {SadRoundedSquareEmoticon} from "../../Icons";
import {RoundedButton} from "../../components/Buttons";


function EmptyJog() {
    const history = useHistory();

    const onCreateClick = () => {
        history.replace('/jogs/add');
    }

    return (
        <div className="center flex-center">
            <SadRoundedSquareEmoticon/>
            <h2 className="message message-empty-space">Nothing is here</h2>
            <RoundedButton
                displayName="Create your jog first"
                theme="pink"
                onClick={onCreateClick}
            />
        </div>
    )
}


export default EmptyJog;