import { useState } from "react";
import RegistrForm from './RegistrForm'
import { validateEmail, validatePassword } from '../../helpers/validation'

export default function RegistrFormContainer() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [position, setPosition] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState(false)
    const onChangeNameHandler = (e) => setUserName(e.target.value);
    const onChangeEmailHandler = (e) => setEmail(e.target.value);
    const onChangePasswordHandler = (e) => setPassword(e.target.value)
    const onBlurEmailValidation = () =>  setEmailErr(validateEmail(email))
    const onBlurPasswordValidation = () => setPasswordErr(!validatePassword(password))
    const onChangePositionHandler = (e) => setPosition(e.target.value)

    const user = {
        userName,
        email,
        password,
        position 
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return<RegistrForm 
            userName={userName} 
            onChangeNameHandler={onChangeNameHandler} 
            email={email}
            onChangeEmailHandler={onChangeEmailHandler}
            password={password}
            onChangePasswordHandler={onChangePasswordHandler}
            emailErr = {emailErr}
            onBlurEmailValidation = {onBlurEmailValidation}
            passwordErr={passwordErr}
            onBlurPasswordValidation={onBlurPasswordValidation}
            onChangePositionHandler={onChangePositionHandler}
            position={position}
            onSubmitHandler={onSubmitHandler}
        />
}