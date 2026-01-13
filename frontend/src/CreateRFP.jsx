import { useState } from 'react';
export default function CreateRFP() {
  const [text, setText] = useState('');
  const [res, setRes] = useState(null);
  return (
    <div>
      <textarea onChange={e => setText(e.target.value)} />
      <button onClick={async () => {
        const r = await fetch('http://localhost:4000/api/rfps', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ text })
        });
        setRes(await r.json());
      }}>Create</button>
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  );
}