import React, { Component } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';


class Home extends Component {
  render() {
    return (
      <div className="app">
        <Header history={this.props.history}/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
