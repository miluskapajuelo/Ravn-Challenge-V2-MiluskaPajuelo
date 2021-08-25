import 'antd/dist/antd.css';
import { Spin, message } from 'antd';

export const loadingPage = <Spin tip="Loading..."  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>
export  const errorPage = <p className="error">Failed to load data</p> //message.info('Error to load')