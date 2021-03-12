import { useState } from "react"
import './styles-custom-input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function CustomInput({type, label, value, onChange, width, isValid, className, onBlur}) {
    const [isVisible, setIsVisible] = useState(false)
    const [targetValue, setTargetValue] = useState(value)

    const onChangeHandler = onChange ? (event) => {
        onChange(event)
        setTargetValue(event.target.value)
    } : (event) =>  setTargetValue(event.target.value)

    const targetType = !isVisible ? type : "text"
    
    const onClickVisibleHandler = () => setIsVisible(!isVisible)

    return (
        <div className={`customItputContainer ${className}`} style={{width:width}}> 
            <input 
                className="customInput" 
                value={value} 
                type={targetType || "text"} 
                onChange={onChangeHandler}
                onBlur={onBlur}
                style={{borderColor: isValid ? "#ededed" : "#F53C3C"}}
            /> 
            <label 
                className= {targetValue && value ? "customInputLabel  labelUpPosition" : "customInputLabel"}  
                style={{
                    color: isValid ? "#777777" : "#F53C3C"
                }}
                >
                {label}
            </label> 
            { type === "password" && 
                <div onClick={onClickVisibleHandler} className="eyeIcon">
                    <FontAwesomeIcon icon={!isVisible ? faEye : faEyeSlash}/>
                </div> }
        </div>
        )
}