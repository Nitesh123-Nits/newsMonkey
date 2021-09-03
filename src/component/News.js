import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false
        }
    }
   async componentDidMount(){
         let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f1b20e8153c8405993bb21b83e07930f";
         let data=await fetch(url);
         let parsedData=await data.json();
         this.setState({articles:parsedData.articles});
    }
    render() {
        return (
            <div className="container my-3">
                <h1>Newshunt -Top headlines</h1>
                
                <div className="row">
                {this.state.articles.map((e)=>{
                    return <div className="col-md-4" key={e.url}>
                    <Newsitems   title={e.title?e.title:""} description={e.description?e.description:""} imageUrl={e.urlToImage} newsUrl={e.url}/>
                    </div>
                })}
                    
                </div>

            </div>
        )
    }
}

export default News
