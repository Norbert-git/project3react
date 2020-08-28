// const REACT_APP_API_URL = "https://secure-waters-60575.herokuapp.com/"
const url = `https://secure-waters-60575.herokuapp.com/ `
export default class UserModel {
  static create(data) {
    console.log('we are in the create')
    return fetch(`${url}/auth/register`,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  
  static login(credentials) {
    return fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(credentials)
    }).then(res => res.json())
  }

  static logout() {
    return fetch(`${url}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  }
}