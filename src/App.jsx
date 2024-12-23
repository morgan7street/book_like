import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [bookContent, setBookContent] = useState('');

      const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setBookContent(e.target.result);
          };
          reader.readAsText(file);
        }
      };

      return (
        <div className="App">
          <h1>Augmented Reading App</h1>
          <input type="file" onChange={handleFileUpload} />
          <div dangerouslySetInnerHTML={{ __html: bookContent }} />
        </div>
      );
    }

    export default App;
