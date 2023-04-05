const { response, request } = require('express');

const postUser = (req = request, res = response) =>{
    res.json(
        {
            message: 'hello world'
        }
    )
}

module.exports = {
    postUser
}