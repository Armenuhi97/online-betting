
interface Api<T> {
    [key: string]: T;
}

export type ApiType<T> = Api<T> & {
    ResponseStatus: ResponseStatus;
}

interface ResponseStatus {
    CustomMessages: any,
    Message: string,
    MessageCode: string,
    Status: number
}