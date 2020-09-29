import React from 'react';
import styles from './workLists.module.scss';
import { Link } from 'react-router-dom';

const WorkLists = ({workListData}) => {
  return <div className={styles.workLists}>
    <ul>
        {
          workListData && workListData.map(item=>
            <li key={item.id}>
              <Link to={ `/my-resume/works/${item.id}` }>
                <div className={ styles.cover }>
                  <img src={ item.cover } />
                </div>
                <div className={styles.workbrief}>
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                  <div className={styles.tag}>
                    { item.tags && item.tags.map(i=><span key={i}>{i}</span>) }
                  </div>
                </div>                       
              </Link>
            </li>
          )
        }
    </ul>
  </div>
}

export default WorkLists;