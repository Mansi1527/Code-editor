import React, { useContext } from 'react';
import Editor from './Editor';
import { DataContext } from '../context/DataProvider';

const Code = () => {
  const { html, setHtml, css, setcss, js, setjs } = useContext(DataContext);

  return (
    <div className='flex bg-[#060606] h-[50vh] overflow-hidden w-screen'>
      <Editor Heading='HTML' icon='/' color='#FF3C41' value={html} onchange={setHtml} />
      <Editor Heading='CSS' icon='*' color='#0EBEFF' value={css} onchange={setcss} />
      <Editor Heading='JavaScript' icon='{}' color='#FCD000' value={js} onchange={setjs} />
    </div>
  );
};

export default Code;
