import React, { Suspense, lazy } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
// import Card from './components/Card';

import { getPokedata } from './actions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import loading from './assets/loading.gif'
const Card = lazy(() => import('./components/Card'));


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
}));


function NestedGrid(props) {
  const classes = useStyles();
  const loadingImg = <div className="album-img">
    <img alt="loading" src={loading} />
  </div>
  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        {props.cards && props.cards.map(item =>

          <Grid item xs={3}>
            <Suspense fallback={loadingImg}>
              <Card key={item.imageUrl} card={item.imageUrl} />
            </Suspense>
          </Grid>

        )};
      </Grid>
    </div>
  );
}


class App extends React.Component {
  state = {
    pokename: '',
    cards: [],
    currentPage: 1,
    cardsPerPage: 8
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ cards: nextProps.searchedPokeCards.cards });
  }

  handleChangeInput(e) {
    this.setState({ pokename: e.target.value });
  }


  handlePaginationClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  getThePokemon() {
    this.setState({ cards: null })
    this.props.getPokedata(this.state.pokename);
  }
  render() {

    const { cards, currentPage, cardsPerPage } = this.state;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    let currentCards = [];
    const pageNumbers = [];

    if (cards) {
      currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
      for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
        pageNumbers.push(i);
      }
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          id={number}
          key={number}
          onClick={this.handlePaginationClick.bind(this)}
        >{number}</li>
      );
    });

    return (
      <div className="App">
        <h1>
          Pokemon search
        </h1>

        <Input
          type='Text'
          label='Pokemon name'
          value={this.state.pokename}
          handleChange={this.handleChangeInput.bind(this)} />

        <div>
          <Button variant='contained' size="large" color="primary" name='Search' onClick={this.getThePokemon.bind(this)} />
        </div>

        {/* <NestedGrid cards={this.state.cards} /> */}
        <NestedGrid cards={currentCards} />
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    getPokedata: (name) => dispatch(getPokedata(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
