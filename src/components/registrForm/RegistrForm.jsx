import './styles-register-form.css'
import CustomInput from '../common/customInput/CustomInput'
import CustomSelect from '../common/customSelect/CustomSelect'

const valueArr = ['Developer', 'Designer', 'CEO', "Manager"]

export default function RegistrForm({onChangeNameHandler, userName, email, onChangeEmailHandler, password, onChangePasswordHandler}) {
    return(
        <form className="registrForm">
            <h1 className="registrFormTitle"> Let's set up your account </h1>
            <p className="alreadyHaveAcc"> Already have an account? <a href="#">Sign in</a></p>
            <CustomInput
            className="mrBt"
            isValid = {true}
            width="100%"
            label="Your name"
            onChange={onChangeNameHandler}
            value={userName}
            />
            <CustomInput
            className="mrBt"
            isValid
            width="100%"
            label="Email address"
            onChange={onChangeEmailHandler}
            value={email}
            />
            <CustomSelect className="mrBt" width="100%" label="I would describe my user type as" valueArr={valueArr}/>
            <CustomInput
            className="mrBt"
            isValid
            width="100%"
            label="Password"
            onChange={onChangePasswordHandler}
            value={password}
            type="password"
            />
            <p className="message"> Minimum 8 characters </p>
            <button className="registrFormButton"> Next </button>
        </form>
    )
}