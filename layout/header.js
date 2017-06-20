import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import  testdiv from '../style/style'
export default class Header extends Component {
  static async getInitialProps () {

    return {}
  }

  render () {
    return (
      <div>
        <style jsx>{testdiv}</style>
        <ul>
          <li className="navLink"><Link href="/index" prefetch><a>Home</a></Link></li>
          <li className="navLink"><Link href="/items" prefetch><a>Items</a></Link></li>
          <li className="navLink"><Link href="/not-found" prefetch><a>Page404</a></Link></li>
        </ul>
      </div>
    )
  }
}
//no more predefined route

