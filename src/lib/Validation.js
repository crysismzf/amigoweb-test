
export class Validation {

    validationName(text) {
        return text.length > 13
    }

    validationPhone(text) {
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
         return reg.test(text)
    }

    validationEmail(text) {
        let reg = /.+@.+\..+/i;
        return reg.test(text)
    }

    notEmpty(state) {
        if (state.name === "") {
            return true
        }
        if (state.phone === "") {
            return true
        }
        if (state.email === "") {
            return true
        }
    }
}