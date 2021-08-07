import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "./Config";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, // 바로 이동할 수 있는 버튼
      infinite: false, // 콘텐츠 끝까지 갔을 시에 처음으로 돌아옴
      speed: 500, // 콘텐츠 넘어갈 때 속도 단위(ms)
      slidesToShow: 4, // 한 화면에 보이는 콤텐츠 개수
      slidesToScroll: 1,
    };

    console.log(this.props);
    return (
      <div>
        {/* <img src={this.props.image}></img> */}

        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={`${IMAGE_BASE_URL}w500${this.props.backdrop_path}`}></img>
          </div>
          <div>
            <h3>ㄷ머비던가!</h3>
          </div>
          <div></div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            {/* <h3>6</h3>
                {items.map(item => {
                return (
                <div key={item.id}>
                    <ImageContainer>
                    <Image src={item.url} />
                    </ImageContainer>
                </div>
                );
            })} */}
          </div>
        </Slider>
      </div>
    );
  }
}
