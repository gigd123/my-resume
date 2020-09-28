import React from 'react';
import styles from './homePage.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

const HomePage = () => {
  return <div className={styles.wrap}>
    <section className={ styles.brief }>
      <img src={ require("../../assets/images/kururu.jpg") } />
      <h2>LeoLiu</h2>
      <ul>
          <li>front-end engineer</li>
      </ul>
      <p>I am a front-end developer.</p>
      <p>Contact me at test@gmail.com</p>
    </section>  

    <section className={ styles.work }>
      <div className={ styles.title }>
        <h3>A selection of work</h3>
        <p>You can find more in the work overview.</p>
      </div>
      <WorkLists workListData={ worksData.data } />
    </section>
  </div>
}

export default HomePage;