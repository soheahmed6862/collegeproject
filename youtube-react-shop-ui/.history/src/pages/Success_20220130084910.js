import React from 'react'
import { useLocation } from 'react-router-dom';
import "./succsee.css"
import Printer, { print } from 'react-pdf-print'
function Success() {
  

const ids = ['1']

    const location=useLocation()
    console.log(location.state)
    console.log("asdfasdfasdfasfdafs")
    return (
       
     <div className='App'>
        <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                Hello World!
            </div>
        </Printer>
        <input type='button' style={{ position: 'relative', float: 'right' }}
          onClick={() => print(ids)} value='Stampa' />
      </div>
    )
}

export default Success;