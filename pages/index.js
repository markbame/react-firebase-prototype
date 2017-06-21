import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../layout/header'
import  testdiv, { globalcss } from '../style/style'
import axios from 'axios'

import fireapp from '../utils/firebaseapp'


export default class Index extends Component {
  static async getInitialProps () {
    var data = {};
    await new Promise((resolve) => {

      let messagesRef = fireapp.database().ref('messages').orderByKey().limitToLast(100);

      messagesRef.on('value', snapshot => {

         data = {message: snapshot.val()}
         console.log("message", data.message)
         resolve()
      });
      //fireapp.database().ref('messages').push( "this is a test value 1111 0000"+Math.random() );
    })

    return {data: data.message}
  }

  componentWillMount(){


  }
 Shows(props) {
   //console.log("props",props.message)
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


          <style jsx>{ testdiv }</style>
          <style jsx global>{ globalcss }</style>
        </div>
      </div>
    )
  }
}
