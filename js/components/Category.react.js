import React from 'react'

import api from '../api/api'
import NowHeader from './NowHeader.react'

class Category extends React.Component {
  constructor(){
    super()
    console.log(this.state)
    this.state = {
      id : '',
      movies: []
    }
  }

  componentDidMount(){
     api.getMoviesForCategory(this.state.id,
        (data) => { this.setState({movies: data})},
        (error) => { console.log(error)})
  }

  render(){
    let category = this.props.params.category.charAt(0).toUpperCase() + this.props.params.category.slice(1);
    return (
      <div className="category-list">
        <NowHeader />
        <h2>{ category } Movies</h2>
        {this.state.movies.map((movie) => { return <MovieCard { ...movie } />} )}
      </div>
    )
  }
}

class MovieCard extends React.Component {
  render(){
    return(
      <div className="movie-card">
        <img src={this.props.image} />
        <span>{this.props.title}</span>
      </div>
    )
  }
}


export default Category