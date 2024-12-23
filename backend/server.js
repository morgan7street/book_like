const express = require('express');
    const multer = require('multer');
    const app = express();
    const upload = multer({ dest: 'uploads/' });

    app.post('/upload', upload.single('book'), (req, res) => {
      // Handle file storage and return an ID
      res.json({ message: 'File uploaded successfully' });
    });

    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
