const axios = require('axios');

const functions = {
    add: (num1, num2) => {
        return num1 + num2;
    },

    isNull: () => {
        return null;
    },

    checkValue: (x) => {
        return x;
    },

    createUser: () => {
        const user = {
            firstName: "Dustin",
            lastName: "Page"
        }

        return user;
    },

    fetchUser: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/2')
            .then(res => res.data)
            .catch(err => 'error');
    }

}

module.exports = functions;