export interface UserInterface {
    id: number,
    name: string,
    surname: string,
    patronymic: string,
    token: string,
    isAuth: boolean
}

export interface UserResponseInterface {
    id: number,
    login: string,
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    post: string,
    role: {
        id: number,
        name: string,
        description: string
    }
}
