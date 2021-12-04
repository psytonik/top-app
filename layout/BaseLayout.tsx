import React, {FunctionComponent} from 'react';import {BaseLayoutProps} from "./BaseLayout.props";import Sidebar from "./components/Sidebar/Sidebar";import Footer from "./components/Footer/Footer";import Header from "./components/Header/Header";import styles from "./BaseLayout.module.css";import {AppContextProvider, IAppContext} from '../context/app.context';const BaseLayout = ({children}:BaseLayoutProps):JSX.Element => {    return (        <div className={styles.wrapper}>            <Header className={styles.header}/>            <Sidebar className={styles.sidebar}/>            <div className={styles.body}>                {children}            </div>            <Footer className={styles.footer}/>        </div>    );};const withLayout = <T extends Record<string, unknown> & IAppContext>(Component:FunctionComponent<T>) => {    return function withLayoutComponent(props:T):JSX.Element {        return (            <AppContextProvider firstCategory={props.firstCategory} menu={props.menu}>                <BaseLayout>                    <Component {...props}/>                </BaseLayout>            </AppContextProvider>        );    };};export default withLayout;