export class UserInfo {
    constructor(name, about) {
        this.name = name;
        this.about = about;
        this.info = {};
    }

    getUserInfo() {
        this.info.name = this.name.textContent;
        this.info.about = this.about.textContent;
        return this.info;
    }

    setUserInfo(name, about) {
        if (name) {
            this.name.textContent = name;
        }
        if (about) {
            this.about.textContent = about;
        }
    }
}