import React, { Component } from "react";
import Slider from "react-slick";

class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://dummyimage.com/600x400/000/7CFC00",
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc",
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd",
        },
        {
          img: "https://dummyimage.com/600x400/000/fff",
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222",
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00",
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc",
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd",
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222",
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00",
        },
      ],
    };
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
