import React from 'react';
import "./Card.css";
import food from '../../../src/assets/food.jpg';
import heartFill from '../../../src/assets/heart-fill.png';
import heartOutline from '../../../src/assets/heart-outline.png';

class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">{this.props.author[0]}</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className="card-date">{this.props.date}</div>
                    </div>
                </div>
                <img className="card-image" src={food} alt="Logo" />
                <div className="card-text">{this.props.description}</div>
                <div className="card-like-bar">
                    {this.props.liked ? (
                        <img className="card-like-icon" src={heartFill}/>
                    ) : (
                    <img className="card-like-icon" src={heartOutline} />
                    )}
                    <div className="like-text">
                        <b>414</b> kişi bu tarifi beğendi.
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;