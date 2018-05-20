import React from 'react';
import searchForSpots from "./services/search";
import Header from './Header';

export default class ResultsContainer extends React.PureComponent {
    state = {};

    async componentWillMount() {
        const search = await searchForSpots();
        this.setState({search})
    }

    render() {
        let search = this.state.search;
        if (!search) {
            return null;
        }
        return (<div>
            <Header search={search} location="Millenium Park"/>
            I am the greatest {search[0].title}
        </div>)
    }
};