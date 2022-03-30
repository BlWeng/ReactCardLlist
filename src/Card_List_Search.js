import React, {Component} from 'react';
import {Title, Card} from './card_list';
import { SearchBar} from './App'; 

/*
//Temporarily store data here
const PostsData = [
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400" },
    
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400" },
    
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400" },
    
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400" },
    
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400" },
    
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400" }];

*/
// Start App
  
  /*
  class Title extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
      }

      handleFilterTextChange(e) {
        this.props.onFilterTextChange(e);
      }
      
      handleInStockChange(e) {
        this.props.onInStockChange(e);
      }
      

    render() {
      return React.createElement("section", { className: "app-title" }, 
      React.createElement("div", { className: "app-title-content" }, 
      React.createElement("h1", null, "Latest News"), 
      React.createElement("p", { className: "tile-p" }, "Covering March & April 2015"), 
      //React.createElement("a", { className: "designer-link", href: "https://dribbble.com/shots/1978243-Latest-News", target: "_blank" }, "Design from ", React.createElement("i", { className: "fa fa-dribbble" }))
      React.createElement(SearchBar, {filterText: this.props.filterText, inStockOnly: this.props.inStockOnly, onFilterTextChange: this.handleFilterTextChange, onInStockChange: this.handleInStockChange})
      ));
  
  }}
  */
  class ProductCardList extends React.Component {
    
    constructor(props) {
        super(props);
        this.handlerDetails = this.handlerDetails.bind(this);  
    }

    handlerDetails(e) {
        this.props.handlerDetails(e);
        //this.setState({detail_clciked: !this.state.detail_clicked});
      }

    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
      
      /*
      const rows = [];
  
      this.props.products.forEach((product) => {
        if (product.title.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.availability) {  
          return;
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
      });
      
      return (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Description</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
      */

     
      return(
        
        React.createElement("div", { className: "app-card-list", id: "app-card-list" },
        Object.keys(this.props.posts).map(key => { 

          //this.setState({onTarget: key});
          /*#__PURE__*/
          
          //if ((this.props.posts[key].title).indexOf(filterText) === -1) {
          //  return false;
          //}
          //if ((this.props.posts[key].text).indexOf(filterText) === -1) {
          //  return false;
          //}
          if ((this.props.posts[key].first_name).indexOf(filterText) === -1 &&(this.props.posts[key].last_name).indexOf(filterText) === -1
                && (this.props.posts[key].about).indexOf(filterText) === -1
                ) {
            return false;
          }  

          if (inStockOnly && !this.props.posts[key].available) {  
            return false;
          }
          else
          return React.createElement(Card, { key: key, index: key, details: this.props.posts[key],  handlerDetails: this.handlerDetails});
        }
        ))

      );
    }
  }


  class Main extends React.Component {
    constructor() {
      super();
  
      this.state = {
        posts: {},
        filterText: '',
        inStockOnly: false,
        detail_shown: false,
        target:'',
        };

      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
      this.handlerDetails = this.handlerDetails.bind(this);
  
    }
    /*
    componentWillMount() {
      this.setState({
        posts: PostsData });
  
    }
    */
    componentDidMount(){
    //componentWillMount() {
        fetch('tutor.json', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( (data) => {
            this.setState({ posts: data });
            console.log( this.state.posts );
        })
        .catch(console.log);

        this.setState({target: '1'});
      }



  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }

    handlerDetails(key){
        this.setState({detail_shown: !this.state.detail_shown});
        this.setState({target: key});
    }

      
    render() {
    if (!this.state.detail_shown){    
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
      React.createElement("header", { className: "app-header" }), /*#__PURE__*/
      React.createElement(Title, null), /*#__PURE__*/
      //React.createElement(Title, {filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, onFilterTextChange: this.handleFilterTextChange, onInStockChange: this.handleInStockChange}), 
      React.createElement(SearchBar, {filterText: this.props.filterText, inStockOnly: this.props.inStockOnly, onFilterTextChange: this.handleFilterTextChange, onInStockChange: this.handleInStockChange}),
      //React.createElement("div", { className: "app-card-list", id: "app-card-list" },
      //Object.
      //keys(this.state.posts).
      //map(key => {
      //  /*#__PURE__*/
      //  if (true)
      //  return React.createElement(Card, { key: key, index: key, details: this.state.posts[key] });
      //}
      //))
      
      React.createElement(ProductCardList, { posts: this.state.posts, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, handlerDetails: this.handlerDetails, detail_shown: this.state.detail_shown})
      )
    }
    else{
        return React.createElement(Card, { key: this.state.target, index: this.state.target, details: this.state.posts[this.state.target],  handlerDetails: this.handlerDetails, detail_shown: this.state.detail_shown});
      }

    }}

    export default Main;
