import React, { Component} from 'react'


export default class Show extends Component {
    render() {
        const airMax = this.props.airMax
        
        return(
            <>
            <head>
    <link rel="stylesheet" type="text/css" href="/airMaxsStyle.css" />
</head>
<body class = "bodyAirM" >
    

                        <div class="airMaxsContainer">
                        <h1 class="title">{airMax.name}</h1>
                        <h2 class="header2">Released in {airMax.releaseDate}</h2>
                        <h2 class="header2">With Colorway of: {airMax.colorWay}</h2>
                        <div class= "airMaxsPics">
                            <img src="https://tse1.mm.bing.net/th?id=OIP._f7Cg58waZvJ-4NGMMMhRgHaE7&pid=Api&P=0&h=220" alt="" />
                            <img src="https://tse4.mm.bing.net/th?id=OIP.zNvEs7y-G4fxL2HINcuyrAHaFS&pid=Api&P=0&h=220" alt="" />
                            <img src="https://tse3.mm.bing.net/th?id=OIP.-9lMtGtQ-HgIMr0LXN0AwQHaFM&pid=Api&P=0&h=220" alt="" />
                        </div>
                    </div>
                    </body>
            </>
            )
    }
}