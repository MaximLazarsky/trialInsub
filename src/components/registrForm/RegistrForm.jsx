import './styles-register-form.css'
import CustomInput from '../common/customInput/CustomInput'
import CustomSelect from '../common/customSelect/CustomSelect'

const valueArr = ['Developer', 'Designer', 'CEO', "Manager"]

export default function RegistrForm({
    onChangeNameHandler, 
    userName, 
    email, 
    onChangeEmailHandler, 
    password, 
    onChangePasswordHandler, 
    onBlurEmailValidation, 
    emailErr,
    passwordErr,
    onBlurPasswordValidation,
    onChangePositionHandler,
    position,
    onSubmitHandler
}) {
    return(
        <form className="registrForm" onSubmit={onSubmitHandler}>
            <h1 className="registrFormTitle"> Let's set up your account </h1>
            <p className="alreadyHaveAcc"> Already have an account? <a href="/#">Sign in</a></p>
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
                isValid={!emailErr}
                width="100%"
                label="Email address"
                onChange={onChangeEmailHandler}
                value={email}
                onBlur={onBlurEmailValidation} 
            />
            {emailErr &&
            <p className="message error"> {emailErr} </p>}
            <CustomSelect 
                className="mrBt" 
                width="100%" 
                label="I would describe my user type as" 
                valueArr={valueArr} 
                onChange={onChangePositionHandler}
            />
            <CustomInput
                className="mrBt"
                isValid = {!passwordErr}
                width="100%"
                label="Password"
                onChange={onChangePasswordHandler}
                value={password}
                type="password"
                onBlur={onBlurPasswordValidation}
            />
            <p className="message"> Minimum 8 characters </p>
            <button className="registrFormButton" disabled={!email || password.length < 8 || !position || !userName || emailErr} > 
                Next 
            </button>
            <p className="privatePolicy"> 
                By clicking the “Next” button, you agree to creating a free account, and to 
                <a href="/#"> Terms of Service</a> and <a href="/#">Privacy Policy</a>. 
            </p>
        </form>
    )
}