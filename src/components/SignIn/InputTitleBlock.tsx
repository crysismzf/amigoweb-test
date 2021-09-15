import * as React from "react";

type PropsInput = {
    title: string,
    error: boolean,
    type: string,
    value: string | number,
    handlerInputValue: any,
    placeholder: string
}

export const InputTitleBlock = (props :PropsInput) => {
    let inputChange = (e: any) => {
        props.handlerInputValue(e,props.title);
    }
    let error :JSX.Element = <React.Fragment> </React.Fragment>;
    if (props.error) {
        error = <div className="error">Введено не корректное значение</div>
    }
    return (
        <div className="input-block form-block__input-block">
            <label>{props.title}</label><br/>
            <input
                type={props.type}
                value={props.value}
                onChange={inputChange}
                placeholder={props.placeholder}
                required
            />
            {error}
        </div>
    )
}