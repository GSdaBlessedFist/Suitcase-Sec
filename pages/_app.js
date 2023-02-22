import LoginContext from "../context/loginContext";
import ChecklistProvider from "../context/checklistContext";
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (<>
    <LoginContext>
    <ChecklistProvider>
      <Component {...pageProps} />
    </ChecklistProvider>
    </LoginContext>
  </>)
}
