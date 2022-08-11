import Head from 'next/head'
import Link from 'next/link'

// styling via nextjs -- deprecated
import layout from '../styles/Layout.module.css'
import grid from '../styles/Grid.module.css'
import form from '../styles/Form.module.css'
import setup from '../styles/Setup.module.css'

// components
import WelcomeText from '../component/WelcomeText'
import QuestionList from '../component/QuestionList'
import QuestionSorter from '../component/QuestionSorter'
import AddQuestionForm from '../component/AddQuestionForm'
import EditQuestionForm from '../component/EditQuestionForm'
import EndText from '../component/EndText'




const Home = () => {
	const createQuestion = () => {
		const overlay = document.getElementById('dialogAddQuestion')
		overlay.style.display = "block"
	}

	return (
    <>
      <Head>
        <title>Setup</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content="initial-scale=1.0, user-scalable=no" name="viewport" />
        <link type="text/css" rel="stylesheet" href="css/grid.css" />
        <link type="text/css" rel="stylesheet" href="css/typography.css" />
        <link type="text/css" rel="stylesheet" href="css/form.css" /> 
        <link href="css/layout.css" rel="stylesheet" type="text/css" />
        <link href="css/setup.css" rel="stylesheet" type="text/css" />
      </Head>
      <body>
		<main>
			<div className="container">
				{/*<!-- Add question button -->*/}

				<div className="row">
					<div className="col-10">
						<h1>Opsætning af spørgeskema</h1>
					</div>
					<div className="col-2">
						<button onClick={createQuestion} className="btn btn-secondary" id="btnAddQuestion">
							Opret spørgsmål
						</button>
					</div>
				</div>

				{/*<!-- Questions -->*/}

				<div className="row">
					<div className="col-12">
						<WelcomeText />
						<QuestionList />
						<QuestionSorter />
						<EndText />
					</div>
				</div>

				{/*<!-- Download report button -->*/}

				<div className="row">
					<div className="col-2 col-offset-8">
						<Link href="/questionnaire">
							<a className="btn btn-default">
								Gå til besvarelse
							</a>
						</Link>
					</div>
					<div className="col-2">
						<Link href="/result">
							<a className="btn btn-default">
								Se resultat
							</a>
						</Link>
					</div>
				</div>
			</div>

			{/*<!-- Welcome text dialog -->*/}

			<div className="dialog-overlay" id="dialogEditWelcome">
				<div className="dialog dialog-add-question">
					<div className="dialog-content">
						<form className="form">
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Titel</strong>
									</label>
								</div>
								<div className="col-12">
									<input type="text" />
								</div>
							</div>
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Beskrivelse</strong>
									</label>
								</div>
								<div className="col-12">
									<textarea></textarea>
								</div>
							</div>
						</form>
					</div>
					<div className="dialog-footer">
						<button className="btn btn-default btn-closedialog">
							Annuller
						</button>
						<button className="btn btn-secondary">
							Gem
						</button>
					</div>
				</div>
			</div>

			{/*<!-- Add question dialog --> */}

			<div className="dialog-overlay" id="dialogAddQuestion">
				<div className="dialog dialog-add-question">
					<div className="dialog-content">
						<AddQuestionForm />
					</div>
				</div>
			</div>

			{/*<!-- Edit question dialog --> */}

			<div className="dialog-overlay" id="dialogEditQuestion">
				<div className="dialog dialog-edit-question">
					<div className="dialog-content">
						<EditQuestionForm id={1}/>
					</div>
				</div>
			</div>

			{/*<!-- Closing text dialog -->*/}

			<div className="dialog-overlay" id="dialogEditClosing">
				<div className="dialog dialog-edit-closing">
					<div className="dialog-content">
						<form className="form">
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Beskrivelse</strong>
									</label>
								</div>
								<div className="col-12">
									<textarea></textarea>
								</div>
							</div>
						</form>
					</div>
					<div className="dialog-footer">
						<button className="btn btn-default btn-closedialog">
							Annuller
						</button>
						<button className="btn btn-secondary">
							Gem
						</button>
					</div>
				</div>
			</div>
		</main>
	</body>
    </>
  )
}


export default Home