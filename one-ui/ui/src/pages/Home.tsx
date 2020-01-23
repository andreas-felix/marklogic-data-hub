import React from 'react';
import styles from './Home.module.scss';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
const Home: React.FC = () => {

  return (
    <div>
      <div className={styles.content}>
        <div style={{ color: '#666', fontSize: '20px'}}>Authenticated!</div>
        <Tooltip title="Click to navigate to Load Data Screen" placement="bottom"><button className={styles.loadDataIcon}><Link to="/load-data"><i><FontAwesomeIcon icon={faCubes} size="3x"/></i></Link></button></Tooltip>
      </div>
    </div>
  );
}

export default Home;