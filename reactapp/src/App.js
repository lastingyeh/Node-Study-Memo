import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import ChartApp from './components/Chart';

class App extends Component {
	render() {
		return (
			<div id="accordion" role="tablist">
				<div className="card">
					<div className="card-header" role="tab" id="headingOne">
						<h5 className="mb-0">
							<a
								data-toggle="collapse"
								href="#collapseOne"
								role="button"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								Component Life Cycle Test
							</a>
						</h5>
					</div>

					<div
						id="collapseOne"
						className="collapse show"
						role="tabpanel"
						aria-labelledby="headingOne"
						data-parent="#accordion"
					>
						<div className="card-body">
							<LifeCycle />
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" role="tab" id="headingTwo">
						<h5 className="mb-0">
							<a
								className="collapsed"
								data-toggle="collapse"
								href="#collapseTwo"
								role="button"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								ReCharts Demo
							</a>
						</h5>
					</div>
					<div
						id="collapseTwo"
						className="collapse"
						role="tabpanel"
						aria-labelledby="headingTwo"
						data-parent="#accordion"
					>
						<div className="card-body">
							<ChartApp />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
