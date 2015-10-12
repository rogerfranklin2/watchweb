import React from 'react'

import api from '../api/api'
import FavoritesStore from '../stores/favoritesStore'
import FavoriteActions from '../actions/favoriteActions'

class Movie extends React.Component {
  constructor(){
    super()
    this.state = {
      movie: '',
      liked: ''
    }
    this.onChange = this.onChange.bind(this)
  }


  componentDidMount(){
    FavoritesStore.listen(this.onChange);
    this.setState(FavoritesStore.getState());
   api.getMovie(this.props.params.movieid,
      (data)=> {
        this.setState({movie: data})
      },
      (error) => {
        console.log(error)
      })
  }

  render(){
    var stars = [];
    for (var i=0; i < this.state.movie.rating; i++) {
        stars.push(<i className="fa fa-star"></i>);
    }

    return (
      <div>
        <img src={this.state.movie.image} />
        <div className="like" onClick={this.likeMovie}>{this.state.liked ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}</div>
        <div className="container">
          <h3>{this.state.movie.title}</h3>
          <div className="movie-details">
            <span>{this.state.movie.year}</span>
            <span>{this.state.movie.duration}</span>
            <span>{ stars }</span>
          </div>
          <div>
            {this.state.movie.blurb}
          </div>
        </div>
      </div>
    )
  }

  onChange(state){
    this.setState(state)
  }

  likeMovie(){
    FavoriteActions.likeMovie()
  }
}

export default Movie
