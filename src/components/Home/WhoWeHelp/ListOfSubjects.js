import React, { Component } from 'react';

export class ListOfSubjects extends Component {
	state = {
		subjects: this.props.organization,
		currentPage: 1,
		subjectsPerPage: 3
	};

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	render() {
		const { subjects, currentPage, subjectsPerPage } = this.state;
		const indexOfLastSubject = currentPage * subjectsPerPage;
		const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
		const currentSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);

		const renderSubjects = currentSubjects.map((subject, index) => {
			return (
				<li className="who-we-help__subjects-list-subject" key={index}>
					<div>
						<p className="who-we-help__subjects-list-subject-name">
							{this.props.type} "{subject.name}"
						</p>
						<p className="who-we-help__subjects-list-subject-task">{subject.task}</p>
					</div>
					<div className="who-we-help__subjects-list-subject-needs">
						<p>{subject.needs.join(', ')}</p>
					</div>
				</li>
			);
		});

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(subjects.length / subjectsPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map((number) => {
			if (pageNumbers.length === 1) {
				return null;
			}

			return (
				<li
					className={this.state.currentPage === number ? 'who-we-help__btns-active' : null}
					key={number}
					id={number}
					onClick={this.handleClick.bind(this)}
				>
					{number}
				</li>
			);
		});

		return (
			<div className="who-we-help__subjects">
				<p className="who-we-help__subjects-descript">{this.props.description}</p>
				<ul className="who-we-help__subjects-list">{renderSubjects}</ul>
				<ul className="who-we-help__pagination">{renderPageNumbers}</ul>
			</div>
		);
	}
}

export default ListOfSubjects;
