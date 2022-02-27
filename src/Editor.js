import React, {useState} from 'react';
import {FaExpandAlt, FaCompressAlt} from 'react-icons/fa';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';


function Editor(props){
    const {
        displayName,
        language,
        onChange,
        value
    } = props;

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
           <div className='editor-title'>
            {displayName}
            <button type="button" className="editor-container-btn" onClick={() => setOpen(prevOpen => !prevOpen)}>
                {!open && <FaExpandAlt/>}
                {open && <FaCompressAlt/>}
            </button>
           </div>
            <ControlledEditor
                className="code-mirror-wrapper"
                value={value}
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: 'material',
                        lineNumbers: true
                    }
                }
                onBeforeChange={handleChange}
                onChange={(editor, data, value) => {
                }}
/>
        </div>
    )
}

export default Editor;