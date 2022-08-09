import Head from 'next/head'
import Image from 'next/image'
import layout from '../styles/Layout.module.css'
import grid from '../styles/Grid.module.css'
import form from '../styles/Form.module.css'
import setup from '../styles/Setup.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Setup</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta content="initial-scale=1.0, user-scalable=no" name="viewport" />
        <link type="text/css" rel="stylesheet" href="css/grid.css" />
        <link type="text/css" rel="stylesheet" href="css/typography.css" />
        <link type="text/css" rel="stylesheet" href="css/form.css" /> 
        <link href="css/layout.css" rel="stylesheet" type="text/css" />
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
						<button className="btn btn-secondary" id="btnAddQuestion">
							Opret spørgsmål
						</button>
					</div>
				</div>

				{/*<!-- Questions -->*/}

				<div className="row">
					<div className="col-12">
						<div className="question" style="padding-left: 10px;">
							<div className="question-options">
								<div className="question-option-edit" id="btnEditWelcome"></div>
							</div>
							<h3>Velkomst tekst</h3>
						</div>
						<div className="question">
							<div>
								<div className="question-type">
									<img src="images/icon-radiobox.png" srcset="images/icon-radiobox@2x.png 2x" />
								</div>
								<div className="question-options">
									<div className="question-option-edit"></div>
									<div className="question-option-delete"></div>
									<div className="question-option-sort"></div>
								</div>
								<h3>Spørgsmål 1</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.
								</p>
							</div>
							<div className="form">
								<div className="radio">
									<input type="radio" name="radio-1" disabled /> Hest
								</div>
								<div className="radio">
									<input type="radio" name="radio-1" disabled /> Hest
								</div>
								<div className="radio">
									<input type="radio" name="radio-1" disabled /> Hest
								</div>
								<div className="radio">
									<input type="radio" name="radio-1" disabled /> Hest
								</div>
							</div>
						</div>
						<div className="question">
							<div className="question-type">
								<img src="images/icon-checkbox.png" srcset="images/icon-checkbox@2x.png 2x" />
							</div>
							<div className="question-options">
								<div className="question-option-edit"></div>
								<div className="question-option-delete"></div>
								<div className="question-option-sort"></div>
							</div>
							<h3>Spørgsmål 2</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.
							</p>
							<div className="checkbox">
								<label>
									<input type="checkbox" name="checkbox-1" disabled /> Hest
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input type="checkbox" name="checkbox-1" disabled /> Hest
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input type="checkbox" name="checkbox-1" disabled /> Hest
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input type="checkbox" name="checkbox-1" disabled /> Hest
								</label>
							</div>
						</div>
						<div className="question-placeholder">
							Placér spørgsmålet her
						</div>
						<div className="question" style="padding-left: 10px;">
							<div className="question-options">
								<div className="question-option-edit" id="btnEditClosing"></div>
							</div>
							<h3>Afslutnings tekst</h3>
						</div>
					</div>
				</div>

				{/*<!-- Download report button -->*/}

				<div className="row">
					<div className="col-2 col-offset-8">
						<a href="questionnaire.html" className="btn btn-default">
							Gå til besvarelse
						</a>
					</div>
					<div className="col-2">
						<a href="result.html" className="btn btn-default">
							Se resultat
						</a>
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
						<form className="form">
							<div className="row">
								<div className="col-12">
									<div className="alert">
										<h3>Fejlbesked</h3>
										<ul>
											<li>
												Fejl 1
											</li>
											<li>
												Fejl 2
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Spørgsmål</strong>
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
							<div className="row">
								<div className="col-3 fieldname">
									<label>
										<strong>Svartype</strong>
									</label>
								</div>
								<div className="col-5">
									<select>
										<option>Deltageren må kun vælge en svarmulighed</option>
										<option>Deltageren må vælge flere af svarmulighederne</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div style="border-bottom: 1px solid #8a53a6; padding: 10px 0 10px 0; color: #8a53a6;">
										<h3 style="margin: 0;">Svarmuligheder</h3>
									</div>
								</div>
								<div className="col-12">
									<div className="question">
										<div className="question-type">
											<input type="radio" disabled />
										</div>
										<div className="question-options">
											<div className="question-option-delete"></div>
											<div className="question-option-sort"></div>
										</div>
										<input type="text" />
									</div>
									<div className="question">
										<div className="question-type">
											<input type="radio" disabled />
										</div>
										<div className="question-options">
											<div className="question-option-delete"></div>
											<div className="question-option-sort"></div>
										</div>
										<input type="text" />
									</div>
								</div>
								<div className="col-12">
									<button className="btn btn-secondary-line btn-inline">
										Tilføj svarmulighed
									</button>
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
