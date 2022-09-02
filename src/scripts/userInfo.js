
  export class UserInfo {
        constructor(name, about) {
            this.name = name;
            this.about = about;
        }

        getUserInfo() {
            const info = {};
            info.name = this.name.textContent;
            info.about = this.about.textContent;
            return info;
        }

        setUserInfo(inputA, inputB) {
            if (document.querySelector('.popup_opened') !== null) {
            const info = {};
            info.name = inputA.value;
            info.about = inputB.value;
            this.name.textContent = info.name;
            this.about.textContent = info.about;
            }
        }
    }