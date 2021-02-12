import React, { Component } from 'react';
import {Button, Input} from "semantic-ui-react";
import {observer} from "mobx-react";

@observer
class InputView extends Component {

    render() {

        const { inputValue, onActionSetter } = this.props;

        return (
            <div>
                <Input
                    value={inputValue}
                    onChange={(e) => onActionSetter('inputValue', e.target.value)}
                />
                <Button>추가</Button>
            </div>
        );
    }

}

export default InputView;