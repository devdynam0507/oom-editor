import axios from "axios";

export class FileUploader {
    
    readonly host: string;
    
    constructor(host: string) {
        this.host = host;
    }

    async sendUsingAxios(files: FileList) {
        const form = new FormData();

        for(let i = 0; i < files.length; i++) {
            console.log("appended")
            form.append("images", files[i]);
        }

        return await axios.post(this.host, form);
    }

}