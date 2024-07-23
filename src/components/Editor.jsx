import React, { useState } from 'react';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import "../App.css"

const Editor = ({ Heading, icon, color, value, onchange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onchange(value);
  };

  return (
    <div className={`flex ${open ? 'flex-1' : 'flex-shrink-0'} basis-0 flex-col mr-5 overflow-hidden`}>
      <div className='flex justify-between bg-[#060606]'>
        <div className='flex bg-[#1d1e22] py-3 px-2 text-white'>
          <div className={`bg-[${color}] h-5 w-5 flex justify-center items-center rounded-md mr-5 pb-2`}>
            {icon}
          </div>
          {Heading}
        </div>
        <CloseFullscreenIcon 
          fontSize='small'
          className='text-white cursor-pointer'
          onClick={() => setOpen(prevState => !prevState)}
        />
      </div>
      <div className='flex-1 overflow-auto'>
        <ControlledEditor 
          className='controlled-editor'
          value={value}
          onBeforeChange={handleChange}
          options={{
            theme: 'material',
            lineNumbers: true,
            scrollbarStyle: "null" // Disable native scrollbars
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
