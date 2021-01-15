<template>
  <div>
    <router-link :to="{ name: 'Home' }" tag="div">
      <div class="row">
        <div class="example-1 card ">
          <div class="wrapper ">
            <div class="date">
              <span class="day">{{ new Date(news.createdAt).getDay() }}</span>
              <span class="month">{{
                new Date(news.createdAt).toDateString().split(" ")[1]
              }}</span>
              <span class="year">{{
                new Date(news.createdAt).toDateString().split(" ")[3]
              }}</span>
            </div>
            <div class="data ">
              <div class="content">
                <h1 class="title pb-2">
                  <a href="#" class="workssan">{{ news.title }} </a>
                </h1>
                <p class="text">
                  The highly anticipated world championship fight will take
                  place at 10am and is the second major boxing blockbuster in
                  the nation after 43 years.
                </p>
              </div>
              <input type="checkbox" id="show-menu" />
            </div>
          </div>
        </div></div
    ></router-link>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// Variables
$regal-blue: #034378;
$san-juan: #2d4e68;
$bermuda: #5545a8;
$white: #fff;
$black: #000;
$open-sans: "Open Sans", sans-serif;
// clear-fix mixin
@mixin cf {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

// Base styles
.card {
  padding: 0 1.7rem;
  width: 100%;
  .wrapper {
    background-color: $white;
    height: 300px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px #ffffff inset, 0 1px 3px rgba(34, 25, 25, 0.4);
    &:hover {
      .data {
        transform: translateY(0);
      }
    }
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s;
    .content {
      padding: 1em;
      position: relative;
      z-index: 1;
    }
  }
  .author {
    font-size: 12px;
  }
  .title {
    margin-top: 10px;
  }
  .text {
    display: none;
    margin: 0;
  }
  input[type="checkbox"] {
    display: none;
  }
}

// First example styles
.example-1 {
  .wrapper {
    background: url("/img/mtu-img.jpg");
    background-size: cover;
  }
  .date {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $bermuda;
    color: $white;
    padding: 0.8em;
    span {
      display: block;
      text-align: center;
    }
    .day {
      font-weight: 700;
      font-size: 24px;
      text-shadow: 2px 3px 2px rgba($black, 0.18);
    }
    .month {
      text-transform: uppercase;
    }
    .month,
    .year {
      font-size: 12px;
    }
  }
  .content {
    background-color: $white;
    box-shadow: 0 5px 30px 10px rgba($black, 0.3);
  }
  .title {
    font-weight: 600;
    a {
      color: lighten($black, 50%);
    }
  }
  .menu-button {
    position: absolute;
    z-index: 999;
    top: 16px;
    right: 16px;
    width: 25px;
    text-align: center;
    cursor: pointer;
    span {
      width: 5px;
      height: 5px;
      background-color: lighten($black, 50%);
      color: lighten($black, 50%);
      position: relative;
      display: inline-block;
      border-radius: 50%;
      &::after,
      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background-color: currentColor;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        left: -10px;
      }
      &::after {
        right: -10px;
      }
    }
  }
}
</style>
