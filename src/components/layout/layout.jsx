import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import './layout.css';
import Home from '../home/home';
const { Header, Content } = Layout;


export default class layout extends React.Component  {
render(){
    return (
    <div>
    <Layout className="layout">
    <Navbar></Navbar>
    {/* <Home/> */}
  </Layout>
  </div>
    )}}