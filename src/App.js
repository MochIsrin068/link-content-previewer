import React from "react";
import "./styles.css";
import { LinkPreviewer } from "./LinkPreviewer";

export default function App() {
  return (
    <div className="App">
      <div>
        <p>Hi there! 👋</p>
        <p>
          I would like to share some frontend tips and tricks that I have
          already applied to some of my projects.
        </p>
        <p>
          Happily coming back with <br /> my
          <LinkPreviewer
            href="https://dev.to/ilonacodes/frontend-shorts-vue-js-vanilla-js-digital-dices-og"
            image="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
            title="Frontend Shorts: Vue.js + Vanilla.js — Digital Dices"
            text="Let me show you how you can implement a dice-rolling simulator in less than 30 minutes of your time on the front-end."
          >
            frontend shorts
          </LinkPreviewer>
          series on
          <LinkPreviewer
            href="https://dev.to"
            image="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
            title="DEV Community"
            text="Where programmers share ideas and help each other grow—A constructive and inclusive social network."
          >
            dev.to
          </LinkPreviewer>
          developed by
          <LinkPreviewer
            href="http://rindev.surge.sh/"
            image="http://rindev.surge.sh/static/media/person.b1408d84.jpg"
            title="Moch Isrin"
            text="Moch Isrin is fullstack javacsript developer, problem solver and lead of tech in southeast sulawesi"
          >
            rindev
          </LinkPreviewer>
        </p>
      </div>
    </div>
  );
}
