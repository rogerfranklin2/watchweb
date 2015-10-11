import React from 'react'

import NowHeader from './NowHeader.react'
import CategoryListing from './CategoryListing.react'
import api from '../api/api'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: 'true',
      categories: []
    }
  }

  componentDidMount(){
    //https://api.myjson.com/bins/3npey
    api.getCategories((data)=> {
      this.setState({
        loading: false,
        categories: data
      })
    }, (error) => {
      console.log(error);
    } )
  }

  render(){


    return(

      <div>
        <NowHeader />
        { this.state.loading ? <div>Loading</div> : null }
        <div className="movie-categories">
            {
                this.state.categories.map(category => {
                  return (
                    <CategoryListing
                      id={category.id}
                      image={category.image}
                      title={category.title}
                      number={category.number}
                    />
                  );
                })
              }
        </div>
      </div>
    )
  }
}



export default App;
