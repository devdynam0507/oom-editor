export declare class FileUploader {
    readonly host: string;
    constructor(host: string);
    sendUsingAxios(files: FileList): Promise<import("axios").AxiosResponse<any, any>>;
}
