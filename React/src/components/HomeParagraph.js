import React from 'react';

export default class HomeParagraph extends React.Component{
    render() {
        return (
            <span>
                <p>{this.props.paragraph}</p>
                <button >Press if you have read paragraph!</button>
            </span>
        )
    }
}