import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from './../app-constants';

const adapter = new LocalStorage('db')
const db = low(adapter);

db.defaults({ users: [] })
  .write()

export const signUpUser = (user) => {
  const { userName } = user
  const userAccount = getIGUserByUsername(userName)

  if (userAccount) {
    return Promise.reject({
      success: false,
      message: 'User already exists'
    });
  } else {
    const createdUser = saveIGUser(user)
    return Promise.resolve({
      success: true,
      user: user
    })
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

const getIGUserByLogin = (login) => {
  
}

const getIGUserByUsername = (username) => {
  return db.get('users').find({ username }).value()
}

const saveIGUser = (user) => {
  console.log(`saveIgUser called with: `, user);
  const value = db.get('users').push(user).write()
  console.log(`users: `, db.get('users').value());
}