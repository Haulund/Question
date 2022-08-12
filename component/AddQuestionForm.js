import { useQuestionsContext } from '../hooks/useQuestionsContext'

const AddQuestionForm = () => {
	const { dispatch } = useQuestionsContext()

    const closeDialog = e => {
		e.preventDefault();
		console.log('CLOSE DIALOG FUNC')
		const overlay = document.querySelectorAll('#dialogAddQuestion')
		overlay.forEach( item => {
			item.style.display = "none"
		})
	}


	let numberOfPossibleAnswers = [1]



	const possibleAnswerTemplate = (
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
	)

	const handleAddPossibleAnswer = (e) => {
		
		console.log('HANDLE ADD POS ANS FUNC')
		let result = numberOfPossibleAnswers.push(1)
		console.log(result)
		return result
	}
	

	const handleSubmit = (e) => {
		console.log('HANDLE SUBMIT FUNC')
		e.preventDefault();
		console.log(
			e.target["title"].value
		)
					
		//create ID
		const id = Math.floor(Math.random() * 1000)

		//create possible answers
		

		// combining values for state
		const newQuestion = {
			id: id,
			title: e.target[0].value,
			desc: e.target[1].value	
		}

		// dispatching action for global state change
		//dispatch({type: 'CREATE_QUESTION', payload: newQuestion})

		// closing dialog
		closeDialog()
	}

    return (
        <form className="form" onSubmit={handleSubmit}>
							{/*<div className="row">
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
							</div>*/}
							<div className="row">
								<h1>Opret spørgsmål</h1>
							</div>
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Spørgsmål</strong>
									</label>
								</div>
								<div className="col-12">
									<input type="text" id="title" name="title" />
								</div>
							</div>
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Beskrivelse</strong>
									</label>
								</div>
								<div className="col-12">
									<input type="text" id="desc" name="desc" />										
								</div>
							</div>

							{/* Vælg svartype*/}
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

							{/* Vælg svarmulgiheder*/}
							<div className="row">
								<div className="col-12">
									<div style={{borderBottom: '1px solid #8a53a6',padding: '10px 0 10px 0',color: '#8a53a6'}}>
										<h3 style={{margin: '0'}}>Svarmuligheder</h3>
									</div>
								</div>
								<div className="col-12">
									{ possibleAnswerTemplate }
									
								</div>
								<div className="col-12">
									<button onclick={handleAddPossibleAnswer} className="btn btn-default btn-closedialog">
										Tilføj svarmulighed
									</button>
								</div>
							</div>
					<div className="dialog-footer">
						<button onClick={closeDialog} className="btn btn-default btn-closedialog">
							Annuller
						</button>
						<button className="btn btn-secondary">
							Gem
						</button>
					</div>
						</form>
    );
}
 
export default AddQuestionForm;