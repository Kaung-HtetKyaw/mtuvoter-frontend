<template>
  <div class="container">
    <blockquote>
      Our lives begin to end the day we become silent about things that matter.
      <cite>- Dr. Martin Luther King, Jr.</cite>
    </blockquote>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body,
html {
  background: #fff;
  color: #333;
  font-size: 20px;
  line-height: 1.8em;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  margin-left: 10%;
  margin-top: 10%;
}

.container {
  max-width: 960px;
  padding: 0 6em 3em;
}

blockquote {
  border-left: 3px solid #5545a8;
  color: #1a1a1a;
  font-family: "Cinzel", serif;
  font-size: 1.25em;
  font-style: italic;
  line-height: 1.8em;
  margin: 1.1em -4em;
  padding: 1em 2em;
  position: relative;
  transition: 0.2s border ease-in-out;
  z-index: 0;
}
blockquote:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -4px;
  height: 2em;
  background-color: #fff;
  width: 5px;
  margin-top: -1em;
}
blockquote:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -0.5em;
  color: #5545a8;
  font-family: "Ionicons";
  font-style: normal;
  line-height: 1em;
  text-align: center;
  text-indent: -2px;
  width: 1em;
  margin-top: -0.5em;
  transition: 0.2s all ease-in-out, 0.4s transform ease-in-out;
}

blockquote:active:after {
  transform: rotateY(360deg);
}
blockquote cite {
  display: block;
  font-size: 0.75em;
  line-height: 1.8em;
  margin-top: 1em;
}

@media (max-width: 1200px) {
  body,
  html {
    font-size: 18px;
  }
}
@media (max-width: 980px) {
  body,
  html {
    font-size: 16px;
    margin-left: 0;
    margin-top: 0;
  }

  .container {
    max-width: 720px;
    padding: 0 3em 3em;
  }

  blockquote {
    font-size: 1.1em;
    margin: 1.1em -2em;
  }
}
@media (max-width: 767px) {
  body,
  html {
    font-size: 16px;
    margin-left: 0;
    margin-top: 0;
  }

  .container {
    padding: 0 2em 0em;
  }

  blockquote {
    border-top: 2px solid #5545a8;
    border-bottom: 2px solid #5545a8;
    border-left: none;

    padding: 1.5em 1em;
  }
  blockquote:before {
    left: 50%;
    top: 0;
    height: 4px;
    margin-top: -3px;
    margin-left: -1em;
    width: 2em;
  }
  blockquote:after {
    font-size: 0.75em;
    left: 50%;
    top: 0;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  blockquote cite {
    text-align: right;
  }
}
</style>
