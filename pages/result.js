import Head from "next/head";

const Result = () => {
    return (
        <>
            <Head>
                <title>Result</title>
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
				<div className="row">
					<div className="col-6">
						<h1>Rapport</h1>
					</div>
				</div>

				{/*<!-- Chart of first question -->*/}

				<div className="row">
					<div className="col-6">
						<h2>Spørgsmål 1</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas?
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 pt-0">
						<div className="bar-chart">
							<ol>
								<li>
									<div className="label">
										Svarmulighed 1 
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '20%'}}>20%</div>
									</div>
									<div className="number">
										45 besvarelser
									</div>
								</li>
								<li>
									<div className="label">
										Svarmulighed 2
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '57%'}}>57%</div>
									</div>
									<div className="number">
										45 besvarelser
									</div>
								</li>
								<li>
									<div className="label">
										Svarmulighed 3
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '14%'}}>14%</div>
									</div>
									<div className="number">
										45 besvarelser
									</div>
								</li>
								<li>
									<div className="label">
										Svarmulighed 4
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '92%'}}>92%</div>
									</div>
									<div className="number">
										55 besvarelser
									</div>
								</li>
							</ol>
						</div>
					</div>
				</div>

				{/*<!-- Chart of second question -->*/}

				<div className="row">
					<div className="col-6">
						<h2>Spørgsmål 2</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas?
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 pt-0">
						<div className="bar-chart">
							<ol>
								<li>
									<div className="label">
										Svarmulighed 1
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '20%'}}>20%</div>
									</div>
									<div className="number">
										45 besvarelser
									</div>
								</li>
								<li>
									<div className="label">
										Svarmulighed 2
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '57%'}}>57%</div>
									</div>
									<div className="number">
										45 besvarelser
									</div>
								</li>
								<li>
									<div className="label">
										Svarmulighed 3
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '14%'}}>14%</div>
									</div>
									<div className="number">
										45 besvarelser
									</div>
								</li>
								<li>
									<div className="label">
										Svarmulighed 4
									</div>
									<div className="progress">
										<div className="progress-bar" style={{width: '92%'}}>92%</div>
									</div>
									<div className="number">
										55 besvarelser
									</div>
								</li>
							</ol>
						</div>
					</div>
				</div>			
			</div>
		</main>
	</body>
        </>
    );
}
 
export default Result;