import { observable, action } from 'mobx';

class UserStore {

    @observable values = {
        username: 'AAA',
        email: 'AAA@123.com',
        password: '123456',
    };

    @action setUsername(username) {
        this.values.username = username;
    }
}

export default new UserStore();