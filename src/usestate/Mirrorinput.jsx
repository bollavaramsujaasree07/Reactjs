import {useState} from 'react';
import './Mirrorinput.css'
function MirrorInput() {
    const [text , setText] = useState('hello,');

    function handleChange(event) {
        setText(event.target.value);
    }

    return(
        <div>
            <input className='inpt' value={text} onChange={handleChange}/>
            <p className='para'>You typed: {text}</p>
            <button className='btn1' onClick={() => setText('hello,')}>
                Reset
            </button>
        </div>
    )
}
export default MirrorInput;