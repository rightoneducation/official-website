import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import SingleAdvisor from "../atoms/SingleAdvisor";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel'

/*function Advisors({ advisorProfiles }) {
  const [current, setCurrent] = useState(0);
  const length = advisorProfiles.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  console.log(current)

  return (
    <Grid container justify="space-evenly" >
      <Grid container>
        <FaArrowAltCircleLeft onClick={prevSlide} />
        <FaArrowAltCircleRight onClick={nextSlide} />
      </Grid>
      <Grid container justify="space-around">
        {advisorProfiles.map((advisor, index) => {
          return (
            <Grid item className={index === current ? 'slide active' : 'slide'}>
              {index === current &&
                (

                  <SingleAdvisor
                    key={index}
                    advisor={advisor}
                  />
                )}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}


/*function Advisors({ advisorProfiles }) {

  return (
    <Grid container justify="space-evenly" >
      
        {advisorProfiles.map((advisor, index) => {
          return (
            <Grid item >

              <SingleAdvisor
                key={index}
                advisor={advisor}
              />
            </Grid>
          );
        })}
      </Grid>
  );
}*/

/*var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Advisors extends React.Component {

  constructor(props) {

    const { advisorProfiles } = props

    console.log(props)
    super(props)
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: ''
    }
    this.rightClick = this.moveRight.bind(this)
    this.leftClick = this.moveLeft.bind(this)

    console.log(items)
  }

  generateItems() {
    var items = []
    var level
    console.log(this.state.active)
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      items.push(<Item key={index} id={this.state.items[index]} level={level} />)
    }
    console.log(items)
    console.log(level)

    return items
  }

  moveLeft() {
    var newActive = this.state.active
    newActive--
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left'
    })
  }

  moveRight() {
    var newActive = this.state.active
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right'
    })
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
        <ReactCSSTransitionGroup
          transitionName={this.state.direction}>
          {this.generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
        <div className="basedOn">Based on: <strong><a href="https://codepen.io/andyNroses/pen/KaENLb" target="_blank">andyNroses</a></strong></div>
      </div>
    )
  }
}

class Item extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      level: this.props.level
    }
  }

  render() {
    const className = 'item level' + this.props.level
    return (
      <div className={className}
        style={{
          backgroundImage: "url(http://lorempixel.com/400/200/)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
      </div>
    )
  }
}

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

export default Advisors;*/

function Advisors({ advisorProfiles }) {

  return (
    <Grid container justify="space-evenly" >
      <Carousel>
        {advisorProfiles.map((advisor, index) => {
          console.log(index)
          console.log(advisor)
          var prev = ((index === 6) ? 0 : index - 1)
          console.log(prev)
          console.log(advisorProfiles[0])
          var first = advisorProfiles[prev]
          return (
            < Grid item >
              <SingleAdvisor
                key={index}
                advisor={advisor}
              />
              <SingleAdvisor
                key={index}
                advisor={first}
              />
            //</Grid>
          );
        })}
      </Carousel>
    </Grid>
  )
}
export default Advisors;
