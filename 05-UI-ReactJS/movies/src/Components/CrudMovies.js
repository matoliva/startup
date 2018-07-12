import React, { Component } from "react";
import { MovieAdd } from "./MovieAdd";
import { Movies } from "./Movies";

export class CrudMovies extends Component {
    constructor (props) {
      super(props);
      this.state = {
        items: []
      };
      this.onFavourite = this.onFavourite.bind(this);
    }

    onAdd = (value) => {
        this.setState({
            items: [ ...this.state.items, {
                value: value,
                favourite: false
            } ]
        });
    }

    onFavourite(index) {
        this.setState((state) => ({
            items: [
                ...state.items.slice(0, index),
                {
                    ...state.items[index],
                    favourite: !state.items[index].favourite
                },
                ...state.items.slice(index + 1)
            ]
        }));
    }

    onDelete = (index) => {
        this.setState({
            items: [
                ...this.state.items.slice(0, index),
                ...this.state.items.slice(index+1)
            ]
        });
    }

    render() {
        const { items } = this.state;
        const { onAdd, onFavourite, onDelete } = this;

        return (
            <div>
                <MovieAdd onAdd={onAdd}/>
                <Movies items={items} onFavourite={onFavourite} onDelete={onDelete}/>
            </div>
        );
    }
}

export default CrudMovies;