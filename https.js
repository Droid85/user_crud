class HTTP {
    static #API = 'https://jsonplaceholder.typicode.com/';

    get(endpoint) {
        return fetch(HTTP.#API + endpoint)
    }

    delete(endpoint, id) {
        return fetch(HTTP.#API + endpoint + id, {
            method: 'DELETE',
          });
          
    }

    edit(endpoint, id) {
        return fetch(HTTP.#API + endpoint + id, {
            method: 'PUT',
            body: JSON.stringify({
            name: 'John',
            username: 'Rambo3',
            email: 'mail@email.com',
        }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
}
