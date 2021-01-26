import baseURL from "../utils/API";

export class AjaxApi {

    async ajaxPost(getUrl, body) {
        try {
            const formData = new FormData();

            for(const name in body) {
                formData.append(name, body[name]);
            }

            let response = await fetch(`${baseURL}${getUrl}`,
                {
                    method: 'POST',
                    body: formData
                }
            );
            let res = await response.json();
            if(res.status === "success") {
               alert("success")
            }
        } catch (error) {
            alert("Ошибка HTTP: " + error);
        }
    }

}