import React, { Component } from "react";
import NewsItem from "./NewsItem";    
import Spinner from "./Spinner";   
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : 'in',
    page : 8,
    category : 'genaral'
  }

  static propTypes = {
    country : PropTypes.string,
    page : PropTypes.number,
    category : PropTypes.string,
  }

   constructor(props){
    super(props);
    console.log("Hello i am constructor for new.js")
    this.state ={
        articles : [],
        loading : false,

    }
    document.title = this.props.category
  }
  

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page=1}&pageSize=${this.props.pagesize}`
    {this.setState({loading : true})}
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)

    this.setState({articles : parsedData.articles,
    loading :false})

  }

  handleprevclick = async ()=>{
       console.log("previous")
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
       {this.setState({loading : true})}
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        page : this.state.page - 1,
        articles : parsedData.articles,
        loading : false
      }
      )

  }

  handlenextclick = async ()=>{
      console.log("next")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
      {this.setState({loading : true})}
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        page : this.state.page + 1,
        articles : parsedData.articles,
        loading : false
      }
      )


  }

  render() {
    return (  
        <div className="container my-3">
                 <h2 className="text-center">Top {this.props.category} Headlines</h2>
                {this.state.loading && <Spinner/>}
                 <div className="row">
                 {!this.state.loading && this.state.articles.map((element)=>{
                     return  <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title.slice(0,84)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                   </div>
                 })}

            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick} >&larr; Previous</button>
            <button disabled={this.state.page>=4}type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
            </div>
        </div>
    );
  }
}

export default News;
