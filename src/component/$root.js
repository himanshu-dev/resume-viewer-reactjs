import React, {Component} from 'react';
import $ from 'jquery';

import {HeaderComponent} from "./header";
import {AboutComponent} from "./about";
import {ContactComponent} from "./contact";
import {PortfolioComponent} from "./portfolio";
import {ResumeComponent} from "./resume";
import {TestimonialsComponent} from "./testimonials";
import {FooterComponent} from "./footer";

export class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: {}
        }
    }

    getResumeData() {
        $.ajax({
            url: 'http://localhost:3000/resumeData.json',
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({resumeData: data});
            },
            error: (xhr, status, err) => {
                console.log('Error while fetching resume data', err);
            }
        })
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div>
                <HeaderComponent
                    data={this.state.resumeData.main}>
                </HeaderComponent>
                <AboutComponent
                    data={this.state.resumeData.main}>
                </AboutComponent>
                <ResumeComponent
                    data={this.state.resumeData.resume}>
                </ResumeComponent>
                <PortfolioComponent
                    data={this.state.resumeData.portfolio}>
                </PortfolioComponent>
                <TestimonialsComponent
                    data={this.state.resumeData.testimonials}>
                </TestimonialsComponent>
                <ContactComponent
                    data={this.state.resumeData.main}>
                </ContactComponent>
                <FooterComponent
                    data={this.state.resumeData.footer}>
                </FooterComponent>
            </div>
        )
    }
}
