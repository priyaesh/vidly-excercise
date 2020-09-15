import React, { Component } from 'react';
import { getMovies } from '../fakeMovieService';

class Movies extends Component {
    state ={
        movies: getMovies()
    };
    handleOnClick =(movie)=>{
        console.log("Button Clicked",movie);
        const movies = this.state.movies.filter(m=>m._id !== movie._id);
        this.setState({movies:movies});

    }
    render() {

        const {length:count} = this.state.movies

        if(count === 0)
        return <p> There is no movies in the database</p>;

        return ( 
     <>
        <p>There are {count} in the database</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>(
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={()=>this.handleOnClick(movie)} className="btn btn-danger btn-sm">Delete</button></td>  
                </tr>
                 ))}
                
            </tbody>
        </table>
        </>
        ); 
    }
}
 
export default Movies;