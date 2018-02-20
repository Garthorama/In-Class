import React from 'react';
import Header from '../components/Header';
import HomeDescription from '../components/HomeDescription';
import HomeParagraph from '../components/HomeParagraph';

export default class Home extends React.Component {
    render() {
        return (
        <div>    
            <Header title="Home"/>
            <HomeDescription description="This is going to be a very grand website!" />
            <HomeParagraph paragraph="In this paragraph you need to read in order to pass the next set of skills in order for you to comprehend the next step" />
        </div>        
        );
    }
}