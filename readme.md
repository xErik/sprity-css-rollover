# sprity-css-rollover

> A css-rollover style processor for [sprity](https://npmjs.org/package/sprity)

>Provides a video preview-effect on ***mouse-hover***

> Allows for a default image, if no ***mouse-hover*** takes place

>Check out the [demo](https://xerik.github.io/sprity-css-rollover)

## Requirements

- [sprity](https://npmjs.org/package/sprity) version >= 1.0

## Install

```sh
npm i sprity-css-rollover
```

## Usage

```html
<!-- Change cursor manually, if needed -->
<style type="text/css">.icon:hover {cursor: pointer; cursor: hand;}</style>

<!-- Load CSS -->
<link rel="stylesheet" type="text/css" href="style.css" />

<!-- Set default image: icon-sprite008 -->
<div class="icon icon-sprite008"></div>
```

## Generated output

This module generated a CSS file, similiar to this one:

```css
.icon:hover {
  -webkit-animation: play 5s steps(13) infinite;
  -moz-animation: play 5s steps(13) infinite;
  -ms-animation: play 5s steps(13) infinite;
  -o-animation: play 5s steps(13) infinite;
  animation: play 5s steps(13) infinite;
  animation-play-state: running;
}
.icon {
  background-image: url("sprite.jpg");
  width: 192px;
  height: 146px;
  animation-play-state: paused;
}
@-webkit-keyframes play {
  from {
    background-position: -0px -0px;
  }
  to {
    background-position: -0px -1898px;
  }
}
@-moz-keyframes play {
  from {
    background-position: -0px -0px;
  }
  to {
    background-position: -0px -1898px;
  }
}
@-ms-keyframes play {
  from {
    background-position: -0px -0px;
  }
  to {
    background-position: -0px -1898px;
  }
}
@-o-keyframes play {
  from {
    background-position: -0px -0px;
  }
  to {
    background-position: -0px -1898px;
  }
}
@keyframes play {
  from {
    background-position: -0px -0px;
  }
  to {
    background-position: -0px -1898px;
  }
}
.icon-sprite007 {
  background-position: -0px -0px;
}
.icon-sprite001 {
  background-position: -0px -146px;
}
.icon-sprite003 {
  background-position: -0px -292px;
}
.icon-sprite004 {
  background-position: -0px -438px;
}
.icon-sprite005 {
  background-position: -0px -584px;
}
.icon-sprite006 {
  background-position: -0px -730px;
}
.icon-sprite002 {
  background-position: -0px -876px;
}
.icon-sprite008 {
  background-position: -0px -1022px;
}
.icon-sprite009 {
  background-position: -0px -1168px;
}
.icon-sprite010 {
  background-position: -0px -1314px;
}
.icon-sprite011 {
  background-position: -0px -1460px;
}
.icon-sprite012 {
  background-position: -0px -1606px;
}
.icon-sprite013 {
  background-position: -0px -1752px;
}

```

## Test images

Images have been extracted from the public domain movie [Little Tich and his Big Boot Dance (1900)](http://publicdomainreview.org/collections/little-tich-and-his-big-boot-dance-1900/).

## License

MIT
