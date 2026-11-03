import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import i18n from './i18n'
import './index.css'

// Remove the anti-wrong-language-flash guard once i18n has applied the
// detected language (see inline script in index.html)
function clearI18nPending() {
  document.documentElement.removeAttribute('data-i18n-pending');
}
if (i18n.isInitialized) clearI18nPending();
else i18n.on('initialized', clearI18nPending);
i18n.on('languageChanged', clearI18nPending);
// Safety net: never keep the page hidden for more than 3s
setTimeout(clearI18nPending, 3000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
