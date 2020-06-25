export interface SignUpModel {
    user: {
        email: string,
        password: string,
        first_name: string,
        last_name: string
    }
}

export interface SignInModel {
    username: string,
    password: string
}