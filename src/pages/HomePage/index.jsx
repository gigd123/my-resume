import React from 'react';
import styles from './HomePage.module.scss';
import WorkLists from '../../components/WorkLists';

const HomePage = () => {
  return <div className={styles.wrap}>
    <section className={styles.brief}>
    </section>
    <section className={styles.works}>
      <div className={styles.title}>
        <h3>A section of work</h3>
        <p>You can find more in the work overview.</p>
      </div>
      <WorkLists />
    </section>
  </div>
}

export default HomePage;