import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/assets', express.static(path.join(dist, 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

app.use(express.static(dist, { index: false }));

app.get('*', (req, res) => {
  const clean = req.path.replace(/\/$/, '') || '/';
  const candidate = clean === '/'
    ? path.join(dist, 'index.html')
    : path.join(dist, clean, 'index.html');
  const fallback = path.join(dist, 'index.html');
  res.sendFile(fs.existsSync(candidate) ? candidate : fallback);
});

app.listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT}`));
