import React, {Component} from 'react';

export class PortfolioComponent extends Component {
    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map((project) => {
                return <div key={project.title} className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="#modal-01" title={project.title}>
                            <img alt="" src={'images/portfolio/' + project.image}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>{project.title}</h5>
                                    <p>{project.category}</p>
                                    <h4>{project.tags}</h4>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="icon-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
            });
        }
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper"
                             className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
