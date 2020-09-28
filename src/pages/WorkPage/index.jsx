import React from 'react';
import styles from './works.module.scss';
import WorkLists from '../../components/WorkLists';
import datas from '../works.json';

const WorkPage = () => {
    return <div className={ styles.wrap }>
        <div className={ styles.title }>
            <h3>My Work</h3>
            <p>A collection of different things I have worked on.</p>
        </div>
        <WorkLists dataSource={ datas.data } />
    </div>
}

export default WorkPage;