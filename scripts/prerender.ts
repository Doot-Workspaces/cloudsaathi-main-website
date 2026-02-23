import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

async function prerender() {
  // Import the SSR bundle
  const { render } = await import(path.resolve(distDir, 'server', 'entry-server.js'));

  // Read the client index.html
  const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');

  // Render the app to HTML
  const appHtml: string = render();

  // Inject the rendered HTML into the template
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  // Write the pre-rendered HTML
  fs.writeFileSync(path.resolve(distDir, 'index.html'), html);

  // Clean up the server bundle
  fs.rmSync(path.resolve(distDir, 'server'), { recursive: true, force: true });

  console.log('Pre-rendered index.html successfully');
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
