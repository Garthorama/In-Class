import React from 'react';

export default class HomeDescription extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <img id="Abra" src="https://orig00.deviantart.net/d22d/f/2013/311/8/3/shiny_abra_global_link_art_by_trainerparshen-d6tdea3.png"/>
            </div>
        )
    }
}