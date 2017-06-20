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
      resolve()
    })
    return {data}
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fireapp.database().ref('messages').orderByKey().limitToLast(100);
    //console.log("messageREF : ",fireapp.database().ref('messages'))
    //console.log("message from firebase server REF: ", messagesRef)
    messagesRef.on('child_added', snapshot => {
    //  console.log('snapshot',snapshot)
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key, author: snapshot.val().author };
        console.log("message from",message)
        // snapshot.forEach(function(childSnapshot) {
        //   var childKey = childSnapshot.key;
        //   var childData = childSnapshot.val();
        //
        //   console.log("Key",childKey)
        //   console.log("Data",childData)
        // });

    })

  
    fireapp.database().ref('messages').push( "this is a test value 1111 0000"+Math.random() );
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
