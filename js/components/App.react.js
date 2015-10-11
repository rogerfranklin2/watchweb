import React from 'react'

import NowHeader from './NowHeader.react'
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
                    <Category
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




class Category extends React.Component {
  render(){
    return (
      <div className="category">
        <img src={this.props.image}/>
        <span className="category-title">{this.props.title}</span>
        <span className="category-number">{this.props.number} movies</span>
      </div>
    )
  }
}


let categories = [
  {
    title: "Hot Right Now",
    number: 40,
    image: ""
  },
  {
    title:"Superheroes",
    number: 15,
    image: "http://client.nowtv.com/image/19d88b80a9aeb410VgnVCM1000000b43150a____/1280/720/jpg"
  },
  {
    title: "Action",
    number: 25,
    image: "http://client.nowtv.com/image/11442c80204cd410VgnVCM1000000b43150a____/1280/720/jpg"
  },
  {
    title: "Comedy",
    number: 20,
    image: "http://client.nowtv.com/image/b9edf3e7f3f5b410VgnVCM1000000b43150a____/1280/720/jpg"
  },
  {
    title: "Sci-Fi & Fantasy",
    number: 30,
    image: "http://client.nowtv.com/image/c5eb9c61d87cc410VgnVCM1000000b43150a____/1280/720/jpg"
  }
]

export default App;
