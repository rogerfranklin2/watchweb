import React from 'react'

import api from '../api/api'

class Movie extends React.Component {
  constructor(){
    super()
    this.state = {
      movie: ''
    }
  }

  componentDidMount(){
    api.getMovie(this.props.params.movieid,
      (data)=> {
        this.setState({movie: data})
      },
      (error) => {
        console.log(error)
      })
  }

  render(){
    return (
      <div>
        <img src={this.state.movie.image} />
        <div>
          <h3>{this.state.movie.title}</h3>
          <div>
            <span>{this.state.movie.year}</span>
            <span>{this.state.movie.duration}</span>
            <span>{this.state.movie.rating}</span>
          </div>
          <div>
            {this.state.movie.blurb}
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
