import { Promise } from "core-js";

export class Api {
    constructor(options) {
        this.options = options;
        this.token = options.token;
        this.address = options.address;
        this.owner = options.owner;
    }

    cheackResult() {
    return  (res) => {
        if (res.ok) {
          console.log(true)
          return res.json();
        }
        return Promise.reject(res.status);
      }
    }

    getUserInfoFromServer() {
        return fetch(`${this.address}/users/${this.owner}`, {
            headers: {
                authorization: this.token
              }
        }).then(this.cheackResult())
    }

    pushNewAvatar(link, render) {
        return fetch(`${this.address}/users/${this.owner}/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: link
            })
          }).then(this.cheackResult())
    }

    getAllNeededDataForCards() {
      return Promise.all([this.getUserInfoFromServer(), this.getCards()])
    }

    pushNewUserInfo(UserName, UserAbout) {
      return fetch(`${this.address}/users/${this.owner}`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: UserName,
                about: UserAbout
            })
            }).then(this.cheackResult())
    }

    deleteLike(cardId) {
      return fetch(`${this.address}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            }
          }).then(this.cheackResult())
    }

    addLike(cardId) {
      return fetch(`${this.address}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            }
          }).then(this.cheackResult())
    }

    removeCard(cardId) {
      console.log('kkk')
      return fetch(`${this.address}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            }
          }).then(this.cheackResult())
    }
    
    getCards() {
        return fetch(`${this.address}/cards`, {
            headers: {
            authorization: this.token,
            }
        }).then(this.cheackResult())
    }

    pushCard(name, link) {
        return fetch(`${this.address}/cards`, {
            method: 'POST',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              link: link
            })
          }).then(this.cheackResult())
    }

}
