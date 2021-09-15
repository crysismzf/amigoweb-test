
export class Validation {

    validationName(text: string) :boolean {
        let reg = /^[А-Яа-я -]+$/i
        return reg.test(text)
    }

    validationPhone(text: string) :boolean {
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/;
         return reg.test(text)
    }

    validationEmail(text: string) :boolean {
        let reg = /.+@.+\..+/i;
        return reg.test(text)
    }
}