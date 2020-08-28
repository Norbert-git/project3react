const url = `https://secure-waters-60575.herokuapp.com/ `

class ToolModel {
  static all = () => {
    return fetch(`${url}/tools`).then(res => res.json())
  }

  static show = (toolId) => {
    return fetch(`${url}/tools/${toolId}`).then(res => res.json())
  }

  static create = (toolData) => {
    return fetch(`${url}/tools`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toolData)
    })
      .then(res => res.json())
  }
}

export default ToolModel