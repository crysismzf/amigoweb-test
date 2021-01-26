import React from "react";
import './signIn.css';
import {Validation} from "../../lib/Validation";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.validation = new Validation();
        this.state = {
            name: "",
            phone: "",
            email: "",
            errors: true,
            openSelectList: false
        }
        this.error = {
            name: false,
            phone: false,
            email: false,
            check: true
        }
    }

    errorChecking = () => {
        let errors = false;
        for (let item in this.error) {
            if (this.error[item] === true) {
                errors = true;
            }
        }
        this.setState({
            errors: errors
        })
    }

    handlerInputValue = (e,title) => {
        let error;
        switch (title) {
            case "Имя":
                this.setState({
                    name: e.currentTarget.value
                })
                error = this.validation.validationName(e.currentTarget.value)
                this.error.name = error
                this.errorChecking()
                break;
            case "Номер телефона":
                this.setState({
                    phone: e.currentTarget.value
                })
                error = this.validation.validationPhone(e.currentTarget.value)
                this.error.phone = !error
                this.errorChecking()
                break;
            default:
                this.setState({
                    email: e.currentTarget.value
                })
                error = this.validation.validationEmail(e.currentTarget.value)
                this.error.email= !error
                this.errorChecking()
        }
    }

    handlerCheck = () => {
       this.error.check = !this.error.check;
        this.errorChecking()
    }

    render() {
        let {name, phone, email, errors} = this.state;
        return (
            <div className="wrapper">
                <div className="form-block">
                    <form>
                        <div className="header">
                            <h1>Регистрация</h1>
                            <div className="header__sub-header">
                                <p>Уже есть аккаунт? <a href="/#">Войти</a></p>
                            </div>
                        </div>
                        <div className="form-block__items">
                            <InputTitleBlock
                                title = "Имя"
                                type = "text"
                                value={name}
                                handlerInputValue = {this.handlerInputValue}
                                placeholder = "Введите Ваше имя"
                                error = {this.error.name}
                            />
                            <InputTitleBlock
                                title = "Еmail"
                                type = "email"
                                value={email}
                                handlerInputValue = {this.handlerInputValue}
                                placeholder = "Введите ваш email"
                                error = {this.error.email}
                            />
                            <InputTitleBlock
                                title = "Номер телефона"
                                type = "tel"
                                value={phone}
                                handlerInputValue = {this.handlerInputValue}
                                placeholder = "Введите номер телефона"
                                error = {this.error.phone}
                            />
                            <div className="select-block form-block__select-block">
                                <p>Язык</p>
                                <div className="select-block__select">
                                    <div className="text">Язык</div>
                                </div>
                            </div>
                            <div className="checkbox-block form-block__checkbox-block">
                                <input className="checkbox-block__checkbox"
                                       type="checkbox"
                                       id="checkbox"
                                       onClick={this.handlerCheck}
                                />
                                    <label htmlFor="checkbox"> </label>
                                    <div className="checkbox-block__subtitle">
                                        Принимаю <a href="/#">условия</a> использования
                                    </div>
                            </div>
                            <div className="button form-block__button">
                                <button type="button"
                                        className={`button__item button__item_active_${errors?"false":"true"}`}
                                >
                                    Зарегистрироваться
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function InputTitleBlock (props) {
    let inputChange = (e) => {
        props.handlerInputValue(e,props.title);
    }
    let error = "";
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

export default SignIn;