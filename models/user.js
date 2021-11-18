const connection = require('../db-config');
const Joi = require('joi');

const db = connection.promise();


const argon2 = require('argon2');

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1
};

const hashPassword = (plainPassword) => {
    return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
    return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const validate = (data, forCreation = true) => {
    const presence = forCreation ? 'required' : 'optional';
    return Joi.object({
        email: Joi.string().email().max(255).presence(presence),
        firstname: Joi.string().max(255).presence(presence),
        lastname: Joi.string().max(255).presence(presence),
        password: Joi.string().max(255).presence(presence),
        city: Joi.string().allow(null, '').max(255),
        language: Joi.string().allow(null, '').max(255),
    }).validate(data, { abortEarly: false }).error;
};



const findMany = ({ filters: { language }}) => {
    let sql = 'SELECT * FROM users';
    const sqlValues = [];
    if(language) {
        sql += ' WHERE language = ?';
        sqlValues.push(language);
    }
    return db.query(sql, sqlValues).then(([results]) => results);
};

const findOne = (id) => {
    return db
        .query('SELECT * FROM users WHERE id = ?', [id])
        .then(([result]) => result[0]);
};

const findByEmail = (email) => {
    return db
        .query('SELECT * FROM users WHERE email = ?', [email])
        .then(([results]) => results[0]);
};

const findByEmailWithDiffId = (email, id) => {
    return db
        .query('SELECT * FROM users WHERE email = ? AND id <> ?', [email, id])
        .then(([results]) => results[0]);
};


const createUser = ({ firstname, lastname, city, language, email, password }) => {
    return hashPassword(password).then((hashedPassword) => {
        return db
            .query('INSERT INTO users SET ?', {
                firstname,
                lastname,
                city,
                language,
                email,
                hashedPassword,
            })
            .then(([result]) => {
                const id = result.insertId;
                return { firstname, lastname, city, language, email, id };
            });
    });
};

const updateUser = (id, newAttributes) => {
    return db.query('UPDATE users SET ? WHERE id = ?', [newAttributes, id]);
};

const deleteUser = (id) => {
    return db
        .query('DELETE FROM users WHERE id = ?', [id])
        .then(([result]) => result.affectedRows !== 0);
}






module.exports = {
    hashPassword,
    verifyPassword,
    validate,
    findMany,
    findOne,
    createUser,
    findByEmail,
    findByEmailWithDiffId,
    updateUser,
    deleteUser
}