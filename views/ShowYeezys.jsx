import React, { Component} from 'react'


export default class Show extends Component {
    render() {
        const yeezy = this.props.yeezy
        
        return(
            <>
            <head>
    <link rel="stylesheet" type="text/css" href="/yeezysStyle.css" />
</head>
<body class = "body">
    

                        <div class="jordansContainer">
                        <h1 class="title">{yeezy.name}</h1>
                        <h2 class="header2">Released in {yeezy.releaseDate}</h2>
                        <h2 class="header2">With Colorway of: {yeezy.colorWay}</h2>
                        <div class= "kickPics">
                            <img src="https://tse3.mm.bing.net/th?id=OIP.tBf6ij_Cs-XUhbSic7sM5AHaHa&pid=Api&P=0&h=220" alt="" />
                            <img src="https://tse3.mm.bing.net/th?id=OIP.6eNZ2GUoR-9cQtJcXWi_yAHaHa&pid=Api&P=0&h=220" alt="" />
                            <img src="https://tse2.mm.bing.net/th?id=OIP.uKrJHcIBWSZf1ancc-XdqgHaHa&pid=Api&P=0&h=220" alt="" />
                        </div>
                    </div>
                    </body>
            </>
            )
    }
}