import React from 'react'

class CategoryListing extends React.Component {
  constructor(){
    super()
    this._goToCategory = this._goToCategory.bind(this);
  }

  render(){
    return (
      <div className="category" onClick={this._goToCategory}>
        <img src={this.props.image}/>
        <span className="category-title">{this.props.title}</span>
        <span className="category-number">{this.props.number} movies</span>
      </div>
    )
  }

  _goToCategory(){
    this.context.router.transitionTo('/category/' + this.props.id);

  }
}

CategoryListing.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default CategoryListing
