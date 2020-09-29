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
        <div className={styles.box}>
          <Link to="/my-resume"><div className={styles.boxleft}>Leo's practice web</div></Link>
          <div className={styles.boxright}>
            <Link to="/my-resume"><p className={ location.pathname==="/my-resume" ? styles.selected : null }>HOME</p></Link>
            <Link to="/my-resume/works"><p className={ location.pathname==="/my-resume/works" ? styles.selected : null } >WORKS</p></Link>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <Route path="/my-resume" exact component={HomePage} />
        <Route path="/my-resume/works" exact component={WorkPage} />
        <Route path="/my-resume/works/:id" exact component={WorkDetailPage} />
      </section>
      <footer className={styles.footer}>
        <div className={styles.copyright}>個人練習用網頁</div>
      </footer>
    </div>
  );
}

export default withRouter(App);
