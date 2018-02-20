import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1><br/>
                <a href="/">Home</a><br/>
                <a href="/search">Search</a><br/>
                <a href="/mine">Mine</a><br/>
                <a href="/imawesome">I'm Awesome</a><br/>
                <a href="/everyone">Everyone</a><br/>
                <a href="/profile">Profile</a><br/>
            </div>
        );
    }
}