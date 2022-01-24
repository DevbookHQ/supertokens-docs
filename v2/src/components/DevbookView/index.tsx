import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import './style.css';

import { useDevbook, Env } from '@devbookhq/sdk';
import Splitter from '@devbookhq/splitter';

import Editor from './Editor';
import Output from './Output';

interface Props {
  code?: string
  command?: string
}

function DevbookView({ 
  code: initialCode = '', 
  command: initialCommand = '',
}: Props) {

  const [sizes, setSizes] = useState([50, 50]);
  const [code, setCode] = useState(initialCode);
  const [command, setCommand] = useState(initialCommand);

  const { stderr, stdout, runCode, runCmd } = useDevbook({ debug: true, env: Env.NodeJS });

  console.log({ stderr, stdout })

  const handleEditorChange = useCallback((content: string) => {
    if (code) {
      setCode(content);
    }

    if (command) {
      setCommand(content);
    }
  }, [setCode, setCommand]);

  const handleRunClick = useCallback(() => {
    if (code) {
      console.log('RUNNING CODE', { code })
      runCode(code);
    }
    if (command) { 
      console.log('RUNNING COMMAND', { command })
      runCmd(command);
    }
  }, [code, command, runCode, runCmd])

  return (
    <div className="dbk">
      <button className="run-btn" onClick={handleRunClick}>Run</button>
      <div className="dbk-wrapper">
        <Editor
          initialCode={initialCode || initialCommand}
          onChange={handleEditorChange}
        />
        <Output
          stdout={stdout}
          stderr={stderr}
        />        
      </div>
      {/* <Splitter
        classes={['flex', 'flex']}
        initialSizes={sizes}
        onResizeFinished={(_, sizes) => {
          setSizes(sizes);
        }}
      >
        
      </Splitter> */}
    </div >
  );
}

export default DevbookView;