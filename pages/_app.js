import LoginContext from "../context/loginContext";
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (<>
    <LoginContext>
      <Component {...pageProps} />
    </LoginContext>
  </>)
}
