export class Api {
    constructor(options) {
        this.options = options;
        this.token = options.token;
        this.address = options.address;
        this.owner = options.owner;
    }

    getUserInfoFromServer() {
        return fetch(`${this.address}/users/${this.owner}`, {
            headers: {
                authorization: this.token
              }
        })
    }

    pushNewAvatar(link, render) {
        fetch(`${this.address}/users/${this.owner}/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: link
            })
          })
          .finally(() => {
            render
          })
    }

    pushNewUserInfo(UserName, UserAbout, render) {
        fetch(`${this.address}/users/${this.owner}`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: UserName,
                about: UserAbout
            })
            })
            .finally(() => {
                render
            })
    }

    deleteLike(cardId) {
        fetch(`${this.address}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            }
          });
    }

    addLike(cardId) {
        fetch(`${this.address}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            }
          });
    }

    removeCard(cardId) {
        fetch(`${this.address}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: this.token,
              'Content-Type': 'application/json'
            }
          });
    }
    
    getCard() {
        return fetch(`${this.address}/cards`, {
            headers: {
            authorization: this.token,
            }
        })
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
          })
    }

}
