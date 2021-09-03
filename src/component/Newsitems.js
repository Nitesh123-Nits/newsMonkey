//import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class Newsitems extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_35/3503432/210902-nauman-hussain-ac-1122p.JPG"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
