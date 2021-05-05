import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from './../app-constants';

const adapter = new LocalStorage('db')
const db = low(adapter);

db.defaults({ users: [] })
  .write()

export const signUpUser = (user) => {
  const userExists = checkIfIGUserExists(user)

  if (userExists) {
    return Promise.reject({
      success: false,
      message: 'User already exists'
    });
  } else {
    try {
      saveIGUser(user)
      return Promise.resolve({
        success: true,
        user: user
      })
    } catch (ex) {
      return Promise.reject({
        success: false
      })
    }
  }
}

export const verifyUserInformation = (login, password) => {
  const isEmail = EMAIL_REGEX.test(login);
  const isPhoneNumber = PHONE_NUMBER_REGEX.test(login);

  if (isEmail || isPhoneNumber) {
    return db.get('users').find({ numberOrEmail: login, password: password }).value()
  } else {
    return db.get('users').find({ userName: login, password: password }).value()
  }
}

const checkIfIGUserExists = (user) => {
  const getUserByUsername = db.get('users').find({ userName: user.userName }).value()
  const getUserByEmailOrNumber = db.get('users').find({ numberOrEmail: user.numberOrEmail }).value()
  return getUserByUsername || getUserByEmailOrNumber
}

const saveIGUser = (user) => {
  return db.get('users').push(user).write()
}