import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import api from '../api'


export default function Games() {
    let [games,setGames] = useState([])
    const [pagination, setPagination] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/games/top')
            let dataArray = result.data.data;
            let viewArray = result.data;
            let page = viewArray.pagination.cursor
            console.log(page)
            setPagination(page)

            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace('{width}', '300')
                    .replace('{height}', '300')
                game.box_art_url = newURL
                return game 
            })
            setGames(finalArray)
            console.log(finalArray)
        }
        fetchData()
    },[])

    function LoadMore(){
        console.log(pagination)
        const fetchData = async () => {
            const result = await api.get(`https://api.twitch.tv/helix/games/top?after=${pagination}`)
            let dataArray = result.data.data;
            let viewArray = result.data;
            let page = viewArray.pagination.cursor
            setPagination(page)

            console.log(dataArray)
           
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace('{width}', '300')
                    .replace('{height}', '300')
                game.box_art_url = newURL
                return game 
            })

            let tempArray = games.concat(finalArray)
            setGames(tempArray)
            
        }
        fetchData()
    }

    return (
        <div className="container-fluid">
            <h1>Most Popular Games</h1>
            <div className="row">
                { games.map(game => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12  mt-5">
                        <div className="card">
                            <img className="card-img-top" 
                                 src={game.box_art_url} />
                            <div className="card-body">
                                <h5 className="card-title">{game.name}</h5>
                                <button className="btn btn-success">
                                <Link 
                                    className="link" 
                                    to={{
                                    pathname: "game/" + game.name,
                                    state: {
                                        gameID: game.id
                                    }
                                    }}
                                >
                                        {game.name} streams{" "}
                                </Link>
                                </button>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
            <div className="mx-auto text-center" style={{margin: 20}}>
                <button className=" btn btn-secondary" onClick={LoadMore}> Load More </button>
            </div>
        </div>
    )
}
