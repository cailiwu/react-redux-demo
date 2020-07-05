import React from 'react';
import ReactDOM from 'react-dom';
import {Book} from './page/book.jsx'
import {Provider, connect} from 'react-redux';
import {store, addNum} from './store.js'
// https://reacttraining.com/react-router/web/example/url-params

const mapStateToProps = state => {
  return {data: state.num}
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: num => dispatch(addNum(num))
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(Book)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('root'))