import {action, observable} from "mobx";
import {UserInterface, UserResponseInterface} from "../interfaces/UserInterface";

class UserMob {
    @observable user : UserInterface = {
        id: -1,
        token:'',
        name:'',
        surname:'',
        patronymic:'',
        isAuth: false
    }

    constructor(user: UserResponseInterface | null) {
        if(user) {
            this.user = {
                id: user.id,
                token: '',
                name:user.name,
                surname:user.surname,
                patronymic:user.patronymic,
                isAuth: true
            }
        } else {
            this.user = {
                id: -1,
                token:'',
                name:'',
                surname:'',
                patronymic:'',
                isAuth: false
            }
        }
    }

    @action
    login = (user: UserResponseInterface, token: string, save: boolean) => {
        this.user = {
            id: user.id,
            token: token,
            name: user.name,
            surname: user.surname,
            patronymic: user.patronymic,
            isAuth: true
        }
        if (save) localStorage.setItem('user', token)
    }

    @action
    resetUser = () => {
        this.user = {
            id: -1,
            token:'',
            name:'',
            surname:'',
            patronymic:'',
            isAuth: false
        }
        localStorage.clear()
    }
}
export default UserMob
