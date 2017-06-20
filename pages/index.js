import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../layout/header'
import  testdiv, { globalcss } from '../style/style'
import axios from 'axios'

import fireapp from '../utils/firebase-app'

export default class Index extends Component {
  static async getInitialProps () {
    var data = {};
    await new Promise((resolve) => {

      resolve()
    })
    return {data}
  }

 Shows(props) {
    // const listShows = props.shows.map((tv) =>
    //   <li key={ tv.show.id }>
    //     Title: { tv.show.name } | Score: { tv.score }
    //   </li>
    // );
    // return (
    //   <ul>{ listShows }</ul>
    // );
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>Index</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header />
          <p>Index Page!</p>

          <style jsx>{ testdiv }</style>
          <style jsx global>{ globalcss }</style>
        </div>
      </div>
    )
  }
}
