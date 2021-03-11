import { useState } from "react"
import './styles-custom-select.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function CustomSelect({ label, onChange, width, valueArr, className}) {
    const [targetValue, setTargetValue] = useState(label)

    const onChangeHandler = onChange ? (event) => {
        onChange(event)
        setTargetValue(event.target.value)
    } : (event) =>  setTargetValue(event.target.value)

    return (
        <div className={`customSelectContainer ${className}`} style={{width:width}}>
           <input value={targetValue} onChange={()=>{}}/>
           <div className="arrowIcon"> <FontAwesomeIcon icon={faChevronDown}/> </div>
           <select className="customSelect" onChange={onChangeHandler}>
               {valueArr && valueArr.map((value)=>
                   <option key={value} value={value} className="customOption">
                        {value}
                   </option>
               )}
                
           </select> 
        </div>
        )
}