import React from 'react'

import api from '../api/api'
import NowHeader from './NowHeader.react'
import MovieCard from './MovieCard.react'

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

export default Category
