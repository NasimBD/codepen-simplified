import './App.css';
import React, {useEffect, useState} from 'react'
import Editor from './Editor';
import {useLocalStorage, clear} from './functions';

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');


  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>
            ${css}
          </style>
          <body>
            ${html}
          </body>
          <script>
            ${js}
          </script>
        </html>
      `)
    } ,250)
    return () => clearTimeout(timeOutId);
  }, [html, css, js]);



  return (
    <>
    <div className="pane top-pane">
      <Editor
        displayName='HTML'
        language='xml'
        value={html}
        onChange={setHtml}
      ></Editor>

      <Editor
              displayName='CSS'
              language='css'
              value={css}
              onChange={setCss}
            ></Editor>

      <Editor
              displayName='JS'
              language='javascript'
              value={js}
              onChange={setJs}
            ></Editor>
          </div>
          <div className='pane'>
          <iframe
                  srcDoc={srcDoc}
                  title='output'
                  sandbox='allow-scripts'
                  frameBorder='0'
                  width='100%'
                  height='100%'
              />
        </div>
        {/*    ME. To Clear Panes and Storage  */}
        <button onClick={clear}>Clear Panes</button>
    </>
  );
}

export default App;
