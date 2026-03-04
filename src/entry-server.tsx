import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const helmetContext: any = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}
