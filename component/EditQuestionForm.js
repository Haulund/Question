import { useEffect } from 'react'
import { useQuestionsContext } from '../hooks/useQuestionsContext'

const EditQuestionForm = (props) => {
	const { questions, dispatch } = useQuestionsContext()

	const closeDialog = () => {
		const overlay = document.querySelectorAll(' #dialogEditQuestion')
		overlay.forEach( (item) => {
			item.style.display = "none"
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		// combining values for state
		const editedQuestion = {
			id: e.target.attributes.formid.value,
			title: e.target[0].value,
			desc: e.target[1].value	
		}

		dispatch({type: 'EDIT_QUESTION', payload: editedQuestion})

		// reset
		editedQuestion = {
			id: null,
			title: null,
			desc: null	
		}

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
								<h1>Rediger spørgsmål</h1>
							</div>
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Spørgsmål</strong>
									</label>
								</div>
								<div className="col-12">
									<input type="text" id="title" name="title" required />
								</div>
							</div>
							<div className="row">
								<div className="col-12 fieldname">
									<label>
										<strong>Beskrivelse</strong>
									</label>
								</div>
								<div className="col-12">
									<input type="text" id="desc" name="desc"  required />							
								</div>
							</div>{/*
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
									<div style={{borderBottom: '1px solid #8a53a6',padding: '10px 0 10px 0',color: '#8a53a6'}}>
										<h3 style={{margin: '0'}}>Svarmuligheder</h3>
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
							</div>*/}
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
 
export default EditQuestionForm;