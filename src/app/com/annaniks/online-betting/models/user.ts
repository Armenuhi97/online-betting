export interface UserModel {
    country: string,
    id: number,
    image: string,
    url: string,
    user: {
        email: string,
        first_name: string,
        last_name: string,
        password: string,
    }
}
