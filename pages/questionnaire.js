import Head from "next/head";

const Questionnaire = () => {
    return ( 
        <>
            <Head>
                <title>Questionnaire</title>
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
				{/*<!-- Welcome text -->*/}

				<div className="row">
					<div className="col-8 col-offset-2 txt-center">
						<h1>Velkommen</h1>
						<p>
							Mauris vitae arcu urna. Nulla euismod, nunc ac molestie laoreet, ante elit interdum diam, quis tristique velit velit non leo. Quisque egestas justo at fringilla vehicula. Suspendisse ligula mi, blandit vitae eleifend ac, aliquam et dolor. Cras et pellentesque dui. Aenean ac leo id mi ultricies consequat in et turpis. Integer suscipit erat mauris, rhoncus iaculis diam consequat ut.
						</p>
					</div>
				</div>

				{/*<!-- Questions -->*/}

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
					<div className="col-12">
						<form>
							<div className="question">
								<h2>
									Spørgsmål 1
								</h2>
								<div className="desc">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus.
									Aenean pulvinar lacus ut purus laoreet egestas?</p>
								</div>
								<div className="answers">
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 1</div>
											<div className="response">
												<input type="checkbox" name="checkbox-1" id="1" value="1" />
											</div>
										</label>
									</div>
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 2</div>
											<div className="response">
												<input type="checkbox" name="checkbox-1" id="1" value="2" />
											</div>
										</label>
									</div>
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 3</div>
											<div className="response">
												<input type="checkbox" name="checkbox-1" id="1" value="3" />
											</div>
										</label>
									</div>
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 4</div>
											<div className="response">
												<input type="checkbox" name="checkbox-1" id="1" value="4" />
											</div>
										</label>
									</div>
								</div>
							</div>
							<div className="question">
								<h2>
									Spørgsmål 2
								</h2>
								<div className="desc">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. 
									Aenean pulvinar lacus ut purus laoreet egestas?</p>
								</div>
								<div className="answers">
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 1</div>
											<div className="response">
												<input type="radio" name="radio-1" value="1" />
											</div>
										</label>
									</div>
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 2</div>
											<div className="response">
												<input type="radio" name="radio-1" value="2" />
											</div>
										</label>
									</div>
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 3</div>
											<div className="response">
												<input type="radio" name="radio-1" value="3" />
											</div>
										</label>
									</div>
									<div className="choice">
										<label>
											<div className="title">Svarmulighed 4</div>
											<div className="response">
												<input type="radio" name="radio-1" value="4" />
											</div>
										</label>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				{/* <!-- Closing text --> */}

				<div className="row">
					<div className="col-8 col-offset-2 txt-center">
						<p>
							Aenean sit amet ante luctus, sagittis augue pretium, molestie tellus. Nulla facilisi. Pellentesque non maximus sapien, eu pretium nunc. In lacinia erat eu nisl porttitor tristique sit amet a ex. Proin mollis nibh lacinia massa sollicitudin convallis. Praesent ut mauris elementum, pulvinar tortor nec, finibus justo. In ullamcorper ut elit nec lacinia. Etiam eu purus viverra, pulvinar risus vel, vehicula ex. Nam blandit dui at orci sollicitudin dapibus. Quisque id ex vel nibh bibendum elementum eu vitae lectus.
						</p>
					</div>
				</div>

				{/*<!-- Submit button -->*/}

				<div className="row">
					<div className="col-2 col-offset-5">
						<button className="btn btn-secondary">
							Indsend
						</button>
					</div>
				</div>
			</div>
		</main>
	</body>
        </>
    );
}
 
export default Questionnaire;