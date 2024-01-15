import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'

function Homescreen() {
  return (
   <>
   <Nav />
   <Banner />
   <Row title="" fetchUrl={requests.fetchTrending}/>
   </>
  )
}

export default Homescreen