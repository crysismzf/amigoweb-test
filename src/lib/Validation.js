
export class Validation {

    validationName(text) {
        let reg = /^[А-Яа-я -]+$/i
        return reg.test(text)
    }

    validationPhone(text) {
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/;
         return reg.test(text)
    }

    validationEmail(text) {
        let reg = /.+@.+\..+/i;
        return reg.test(text)
    }
}