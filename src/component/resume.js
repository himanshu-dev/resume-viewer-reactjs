import React, {Component} from 'react';

export class ResumeComponent extends Component {
    render() {
        if (this.props.data) {
            var educations = this.props.data.education.map((edu) => {
                return (
                    <div key={edu.degree} className="row item">
                        <div className="twelve columns">
                            <h3>{edu.school}</h3>
                            <p className="info">
                                {edu.degree}
                                <span>&bull;</span>
                                <em className="date">{edu.completedAt}</em></p>
                            <p>
                                {edu.description}
                            </p>
                        </div>
                    </div>
                )
            });
            var work = this.props.data.work.map((workDetail) => {
                return (
                    <div key={workDetail.title} className="row item">
                        <div className="twelve columns">
                            <h3>{workDetail.company}</h3>
                            <p className="info">
                                {workDetail.title}
                                <span>&bull;</span>
                                <em className="date">{workDetail.years}</em>
                            </p>
                            <p>{workDetail.description}</p>
                        </div>
                    </div>
                )
            });
            var skills = this.props.data.skills.map((skill) => {
                return (
                    <li key={skill.name}>
                        <span style={{width: skill.level}}
                              className={'bar-expand ' + skill.name.toLowerCase()}></span>
                        <em>{skill.name}</em>
                    </li>
                )
            });
        }
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">{educations}</div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">{work}</div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                            dolores eos qui ratione
                            voluptatem sequi nesciunt.
                        </p>
                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
