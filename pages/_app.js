import { QuestionsContextProvider } from '../context/QuestionsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <QuestionsContextProvider>
      <Component {...pageProps} />
    </QuestionsContextProvider>
  )
}

export default MyApp
