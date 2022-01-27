import { isEmail } from "validator"

const onlyNumbers = (string) => {
  const trimmed = string.replaceAll(' ', '')
  return [...trimmed].every(c => '0123456789'.includes(c))
}

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Tämä kenttä on pakollinen!
      </div>
    )
  }
}

const invalidEmail = (value) => {
  if (!isEmail(value)) {
    return 'Sähköpostiosoite ei kelpaa!'  
  }
}

const invalidName = (value) => {
  if (!value) {
    return 'Tämä kenttä on pakollinen!'
  }
}

const invalidUsername = (value) => {
  if (value.length < 3 || value.length > 10) {
    return 'Käyttäjänimen tulee olla 3-10 merkkiä pitkä!'
  }
}

const invalidPhone = (value) => {
  if (!onlyNumbers(value)) {
    return 'Saa sisältää vain numeroita!'
  }
}

const invalidPassword = (value) => {
  if (value.length < 6) {
    return 'Vähintään kuusi merkkiä!'
  }
}

export {
  onlyNumbers, 
  required, 
  invalidEmail,
  invalidName, 
  invalidPhone, 
  invalidUsername, 
  invalidPassword }