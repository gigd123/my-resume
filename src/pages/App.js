import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, withRouter } from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkDetailPage from './WorkDetailPage'

const App = (props) => {
  const { location } = props;
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.siteName}>
            Leo's Website
          </div>
        </Link>
        <div className={styles.menu}>
          <Link to="/"><span className={location.pathname === '/' ? styles.active : ''}>Home</span></Link>
          <Link to="/works"><span className={location.pathname === '/works' ? styles.active : ''}>Works</span></Link>
        </div>
      </header>
      <section className={styles.content}>
        <Route path="/" exact component={HomePage} />
        <Route path="/works" exact component={WorkPage} />
        <Route path="/works/:id" exact component={WorkDetailPage} />
      </section>
      <footer className={styles.footer}>
        <div className={styles.copyright}>Copyright © 2020 LeoLiu All rights reserved.</div>
      </footer>
    </div>
  );
}

export default withRouter(App);
