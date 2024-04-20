
import React, { Component} from 'react'
import { head } from '../routes/jordansRoutes'


export default class Show extends Component {
    render() {
        const jordan = this.props.jordan
      
        
        return(
            <>
            <head>
    <link rel="stylesheet" type="text/css" href="/styles.css" />
</head>
<body class = "body">
    

                        <div class="jordansContainer">
                        <h1 class="title">{jordan.name}</h1>
                        <h2 class="header2">Released in {jordan.releaseDate}</h2>
                        <h2 class="header2">With Colorway of: {jordan.colorWay}</h2>
                        <div class= "kickPics">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.5UEZdItjMd6YCD16zpeC-wHaEK&pid=Api&P=0&h=220" alt="" />
                            <img src="https://tse1.mm.bing.net/th?id=OIP.Hm2l004I27u0fE1tgQx52QHaFM&pid=Api&P=0&h=220" alt="" />
                            <img src="https://tse2.mm.bing.net/th?id=OIP.OTQOjeupp88VTLRa7-Kz1gHaFQ&pid=Api&P=0&h=220" alt="" />
                        </div>
                    </div>
                    </body>
            </>
            )
    }
}


