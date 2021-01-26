import React from "react";
import './signIn.css';

class SignIn extends React.Component {
    render() {
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
                            <div className="input-block form-block__input-block">
                                <label>Имя</label><br/>
                                <input type="text" placeholder="Введите Ваше имя" required/>
                                <div className="error">Введено не корректное значение</div>
                            </div>
                            <div className="input-block form-block__input-block">
                                <label>Еmail</label><br/>
                                <input type="email" placeholder="Введите ваш email" required/>
                            </div>
                            <div className="input-block form-block__input-block">
                                <label>Номер телефона</label><br/>
                                <input type="tel" placeholder="Введите номер телефона" required/>
                            </div>
                            <div className="select-block form-block__select-block">
                                <p>Язык</p>
                                <div className="select-block__select">
                                    <div className="text">Язык</div>
                                </div>
                            </div>
                            <div className="checkbox-block form-block__checkbox-block">
                                <input className="checkbox-block__checkbox" type="checkbox" id="checkbox" />
                                    <label for="checkbox"> </label>
                                    <div className="checkbox-block__subtitle">
                                        Принимаю <a href="/#">условия</a> использования
                                    </div>
                            </div>
                            <div className="button form-block__button">
                                <button type="button"
                                        className="button__item button__item_active_true">Зарегистрироваться
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;