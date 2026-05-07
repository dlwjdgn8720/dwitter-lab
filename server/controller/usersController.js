import * as repository from '../repository/usersRepository.js'

export const getLogin = (req, res, next) => {
    const {id, pwd} = req.body.data;
    const userIdx = repository.getLogin(id, pwd);
    userIdx !== -1 ? res.json({ "result": true }) : res.json({ "result": false })
}

export const getUsers = (req, res, next) => {
    const users = repository.getUsers();
    res.json({"list": users});
}

