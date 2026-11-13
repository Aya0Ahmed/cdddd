import express from 'express';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const app = express();
const port = Number(process.env.PORT) || 3000;
const distPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');

app.use(express.static(distPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
