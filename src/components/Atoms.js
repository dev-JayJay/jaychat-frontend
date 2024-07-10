import './atom.css';

export const InputLableTag = ({lable,type}) => {
    return(
        <div>
            <div className='InputContainer'>
                <lable className='lable'>{ lable }</lable>
                <input type={type} />
            </div>
        </div>
    )
}
