import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const Result = () => {
  const { html, css, js } = useContext(DataContext);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const srcCode = `
    <html>
      <style>${css}</style>
      ${html}
      <script>${js}</script>
    </html>
  `;

  return (
    <div className='flex-1 overflow-auto'>
      <iframe
        srcDoc={src}
        title='output'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default Result;
