import React from 'react'

class MovieCard extends React.Component {
  constructor(){
      super()
      this._goToMovie = this._goToMovie.bind(this)
  }

  render(){
    var rows = [];
    for (var i=0; i < this.props.raiting; i++) {
        rows.push(<span>*</span>);
    }


    return(
      <div className="movie-card" onClick={ this._goToMovie }>
        <img src={this.props.image} />
        <div className="text">
          <div>{this.props.title}</div>
          <div>Stars:{rows}</div>
          <div>Year:{this.props.year}</div>
          <div>{this.props.certificate}</div>
        </div>
      </div>
    )
  }

  _goToMovie(){
    console.log("CLICKINGGGG")
    this.context.router.transitionTo('/movie/' + this.props.title.split(' ').join('_'));

  }

}

MovieCard.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default MovieCard
