import React, {Component} from 'react';
import './style.scss';
import './knyrnv.scss';
import { SearchBar, ProductTable } from './App';
import './style_heart.scss';
import './rating.css';

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
  
  
  
  
  // Start App
  
  class Main extends React.Component {
    constructor() {
      super();
  
      this.state = {
        posts: {},
        detail_shown: false,
        target:"",
      };

      this.handlerDetailShown = this.handlerDetailShown.bind(this);
  
    }
    componentWillMount() {
      this.setState({
        posts: PostsData });
  
    }
    
    handlerDetailShown(){
      this.setState({detail_shown: true});
    }
  
    render() {
      if (!this.state.detail_shown){
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
        React.createElement("header", { className: "app-header" }), /*#__PURE__*/
        React.createElement(Title, null), /*#__PURE__*/
        
        React.createElement("div", { className: "app-card-list", id: "app-card-list" },
        Object.
        keys(this.state.posts).
        map(key => {
          /*#__PURE__*/
          this.setState({target: key});
          return React.createElement(Card, { key: key, index: key, details: this.state.posts[key],  onDetailShown: this.handlerDetailShown});
        }
        )));
      }
      
      else{
        return React.createElement(Card, { key: this.state.target, index: this.state.target, details: this.state.posts[this.state.target],  onDetailShown: this.handlerDetailShown});
      }
  
    }}
  
  
  
  class Title extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("section", { className: "app-title" }, /*#__PURE__*/
      React.createElement("div", { className: "app-title-content" }, /*#__PURE__*/
      React.createElement("h1", null, "List of Tutors"), /*#__PURE__*/
      React.createElement("p", { className: "tile-p" }, "Updated March 2022"), /*#__PURE__*/
      //React.createElement("a", { className: "designer-link", href: "https://dribbble.com/shots/1978243-Latest-News", target: "_blank" }, "Design from ", /*#__PURE__*/React.createElement("i", { className: "fa fa-dribbble" }))

      ));
  
  
    }}
  
  class LikeButton extends React.Component {
    render(){
      return (
        <div id="heart-container">
          <input type="checkbox" id="toggle"></input>
            <div id="twitter-heart"></div>
          
        </div>
      );
    }
  }

  class Rating extends React.Component {
    render() {
      return (
      <div>
        <h1>Star Rating Widget</h1>
            <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>
        </div>
      );
    }
  }
  
  
  class Button extends React.Component {
    constructor(props) {
      super(props);

      this.state={
        detail_clicked: true
      };
      
      //this.handlerFindoutMore = this.handlerFindoutMore.bind(this);
      this.handlerDetails = this.handlerDetails.bind(this);
      this.handlerGoback = this.handlerGoback.bind(this);
    }
    /*
    handlerFindoutMore(){
      //this.props.handlerFindoutMore();
      this.props.handlerOption(0);
    }

    handlerDetails() {
      //this.props.handlerDetails();
      this.props.handlerOption(1);
    }
    */

    handlerDetails() {
      this.setState({detail_clicked: !this.state.detail_clicked});
      this.props.handlerOption();
      //this.setState({detail_clciked: !this.state.detail_clicked});
    }

    handlerGoback(){
      this.setState({detail_clicked: !this.state.detail_clicked});
      this.props.handlerGoback();
    }


    render() {
      return /*#__PURE__*/(
        React.createElement("div", null,
        //React.createElement("button", { className: "button button-primary" , onClick: this.handlerFindoutMore}, /*#__PURE__*/
        React.createElement("button", { className: "button button-primary"}, /*#__PURE__*/
        React.createElement("i", { className: "fa fa-chevron-right" }), " Send message"), /*#__PURE__*/
        !this.props.detail_shown ?
        React.createElement("button", { className: "button button-primary" , onClick: this.handlerDetails}, /*#__PURE__*/
        React.createElement("i", { className: "fa fa-chevron-right" }), " Details ") :  /*#__PURE__*/
        React.createElement("button", { className: "button button-primary" , onClick: this.handlerGoback}, /*#__PURE__*/
        React.createElement("i", { className: "fa fa-undo" }, " Go Back")), /*#__PURE__*/
        
        )
        );
  
  
    }}
  
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = {
        backgroundImage: 'url(' + image + ')' };

      if (!this.props.detail_shown){
      return /*#__PURE__*/(
        React.createElement("header", { style: style, className: "card-header" }, /*#__PURE__*/
        React.createElement("h4", { className: "card-header--title" }, category), /*#__PURE__*/
        React.createElement(LikeButton, null)
        /*
        React.createElement("div", { id: "heart-container" }, 
          React.createElement("input", { type: "checkbox", id: "toggle"},
            React.createElement("div", { id: "twitter-heart"})
          )
        )
        */


        
        ));
      }

      else{
        return /*#__PURE__*/(
          React.createElement("header", { className: "card-header" }, /*#__PURE__*/
          React.createElement("h4", { className: "card-header--title" }, category), /*#__PURE__*/
          React.createElement("img", { className: "hearder_image", src: image}), /*#__PURE__*/
          React.createElement(LikeButton, null)
          /*
          React.createElement("div", { id: "heart-container" }, 
            React.createElement("input", { type: "checkbox", id: "toggle"},
              React.createElement("div", { id: "twitter-heart"})
            )
          )
          */
  
  
          
          ));
      }
  
  
    }}
  
  
  
  class CardBody extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        option: 0,
        option_key: this.props.text
      };

      this.handlerOption = this.handlerOption.bind(this);
      //this.handlerDetails = this.handlerDetails.bind(this);
      //this.handlerFindoutMore = this.handlerFindoutMore.bind(this);
      this.handlerGoback = this.handlerGoback.bind(this);
    }

    handlerOption() {
      this.props.handlerDetailShown();
    }

    handlerGoback() {
      this.props.handlerGoback();
    }

    /*
    handlerOption(option) {
      switch(option) {
        case 0:
          this.setState({option_key: this.props.text});
          break;
        case 1:
          this.setState({option_key: this.props.title});
          break;
        default:
          this.setState({option_key: this.props.text});  
      }
      this.setState({option: option});
    }
    */

    /*
    handlerFindoutMore(){
      this.setState({option_key: this.props.text});
    }

    handlerDetails(){
      this.setState({option_key: this.props.title});
    }
    */

    render() {
    if(!this.props.detail_shown ){  
      return /*#__PURE__*/(
        React.createElement("div", { className: "card-body" }, /*#__PURE__*/
        React.createElement(Rating, null),
        React.createElement("p", { className: "date" }, "March 20 2015"), /*#__PURE__*/
        
        //React.createElement("h2", null, this.props.title), /*#__PURE__*/
        React.createElement("h2", null, this.props.details.first_name +"  "+ this.props.details.last_name ), /*#__PURE__*/
        //React.createElement("p", { className: "body-content" }, this.props.text), /*#__PURE__*/
        //React.createElement("p", { className: "body-content" }, this.state.option_key), /*#__PURE__*/
        React.createElement("p", { className: "body-content" }, this.props.details.about),

  
        //React.createElement(Button, { handlerFindoutMore: this.handlerFindoutMore, handlerDetails: this.handlerDetails })
        React.createElement(Button, { handlerOption: this.handlerOption, handlerGoback: this.handlerGoback, detail_shown: this.props.detail_shown }), /*#__PURE__*/

        
        )

        );
  
      }
    else{
      return /*#__PURE__*/(
        React.createElement("div", { className: "card-body" }, /*#__PURE__*/
        React.createElement(Rating, { className: "rating_position"}),
        React.createElement("p", { className: "date" }, "March 20 2015"), /*#__PURE__*/
        React.createElement(LikeButton, null),
        React.createElement("img", { className: "hearder_image", src: this.props.details.image}), /*#__PURE__*/
        //React.createElement("h2", null, this.props.title), /*#__PURE__*/
        React.createElement("h2", null, this.props.details.first_name +"  "+ this.props.details.last_name ), /*#__PURE__*/
        //React.createElement("p", { className: "body-content" }, this.props.text), /*#__PURE__*/
        //React.createElement("p", { className: "body-content" }, this.state.option_key), /*#__PURE__*/
        React.createElement("h3", null, "About"),
        React.createElement("p", null, this.props.details.about),
        React.createElement("h4", null, "Subject"),
        React.createElement("ul", null, (this.props.details.subject).map((item) => React.createElement("li", null, item))),
        React.createElement("h5", null, "Certificate"),
        React.createElement("ul", null, (this.props.details.certificate).map((item) => React.createElement("li", null, item))),
        React.createElement("h6", { className: "list_content" }, this.props.available? "Availability: Yes" : "Availability: No"),
  
        //React.createElement(Button, { handlerFindoutMore: this.handlerFindoutMore, handlerDetails: this.handlerDetails })
        React.createElement(Button, { handlerOption: this.handlerOption, handlerGoback: this.handlerGoback, detail_shown: this.props.detail_shown }), /*#__PURE__*/

        
        )

        );

    }
      
    }}
  
  
  
  class Card extends React.Component {

    constructor(props){
      super(props);
      this.state={
        DetailShown: false
      };
      
      this.handlerDetailShown = this.handlerDetailShown.bind(this);
      this.handlerGoback = this.handlerGoback.bind(this);
    }

    handlerDetailShown(){
      //this.setState({DetailShown: !this.state.DetailShown})
      //this.props.onDetailShown(true);
      //this.props.onDetailShown(false);
      this.props.handlerDetails(this.props.index);
      console.log("clcik");
      
    }
    handlerGoback() {
      this.props.handlerDetails(this.props.index);
      console.log("Go back");
    }
    
    render() {
      return /*#__PURE__*/(
        !this.props.detail_shown?
        React.createElement("article", { className: "card" }, /*#__PURE__*/
        React.createElement(CardHeader, { category: this.props.details.category, image: this.props.details.image }), /*#__PURE__*/
        React.createElement(CardBody, { title: this.props.details.title, text: this.props.details.text,  handlerDetailShown: this.handlerDetailShown, handlerGoback: this.handlerGoback, detail_shown: this.props.detail_shown, details: this.props.details}))
        :
        React.createElement("article", { className: "card_single" }, /*#__PURE__*/
        //React.createElement(CardHeader, { category: this.props.details.category, image: this.props.details.image, detail_shown: this.props.detail_shown }), /*#__PURE__*/
        React.createElement(CardBody, { title: this.props.details.title, text: this.props.details.text,  handlerDetailShown: this.handlerDetailShown, handlerGoback: this.handlerGoback, detail_shown: this.props.detail_shown, details: this.props.details}))
        );
       
    }}
  

    //export default Main;
    export {Title, Card};