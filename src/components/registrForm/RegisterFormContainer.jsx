import { useState } from "react";
import RegistrForm from './RegistrForm'
import { validateEmail, validatePassword } from '../../helpers/validation'

export default function RegistrFormContainer() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onChangeNameHandler = (e) => setUserName(e.target.value);
    const onChangeEmailHandler = (e) => setEmail(e.target.value);
    const onChangePasswordHandler = (e) => setPassword(e.target.value);

    return<RegistrForm 
            userName={userName} 
            onChangeNameHandler={onChangeNameHandler} 
            email={email}
            onChangeEmailHandler={onChangeEmailHandler}
            password={password}
            onChangePasswordHandler={onChangePasswordHandler}
        />
}