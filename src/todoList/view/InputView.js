import React, { Component } from 'react';
import {Button, Input} from "semantic-ui-react";
import {observer} from "mobx-react";

@observer
class InputView extends Component {

    render() {

        const { inputValue, onActionSetter, addTodo } = this.props;

        return (
            <div className="form">
                <input
                    value={inputValue}
                    onChange={(e) => onActionSetter('inputValue', e.target.value)}
                />
                <Button className="create-button" onClick={addTodo}>추가</Button>
            </div>
        );
    }

}

export default InputView;