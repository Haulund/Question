import { QuestionsProvider } from '../context/questions'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <QuestionsProvider>
      <Component {...pageProps} />
    </QuestionsProvider>
  )
}

export default MyApp
