import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined, SettingFilled, HomeOutlined, AuditOutlined, InfoCircleOutlined, SearchOutlined,
    VideoCameraOutlined, BellTwoTone
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HeaderDesign from '../layout/HeaderDesign';

import { Divider } from 'antd'

import { Col, Row } from 'antd';
import { Link, Outlet } from 'react-router-dom'; 
import Submission from './Submission';
const { Header, Sider, Content, Footer } = Layout;
const SubmissionLayoutDesign = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#2457d3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined style={{ color: "white" }} /> : <MenuFoldOutlined style={{ color: "white" }} />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '46px',
                        width: '50px', height: '60px'
                    }}
                />
                {!collapsed && <h4 style={{ color: 'white', textAlign: 'center' }}>Underwriting Workbench</h4>}

                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6ccf97ba0270962e77c546c4769ceb9568acdf197d37473c8380510eab3531?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa"
                    alt="User avatar"
                    style={{
                        borderRadius: '10px',
                        height: collapsed ? '50px' : '100px', // Dynamic size based on collapsed state
                        display: 'block',
                        margin: '20px auto',
                        transition: 'height 0.3s ease' // Smooth transition for size change
                    }}
                />

                {!collapsed && <h4 style={{ color: 'white', textAlign: 'center' }}>Wilson Properties</h4>}

                {!collapsed && (
                    <address style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/400be7cb3efa8c57f2495018b33cfff53bce52364b7b7798751d7c5f5c7d1dac?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa"
                            alt="Location icon"
                            style={{ margin: '0 auto' }}
                        />
                    </address>
                )}

                <Divider
                    variant="dotted"
                    style={{
                        borderColor: 'black',
                        width: '100%',
                    }}
                />

                <div className="demo-logo-vertical" />

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}>
                    
                      
                    <Menu.Item key="1" icon={<SettingFilled />} >
                    {!collapsed ? <Link to="/submission">Submission</Link> : ''}
                           
                    </Menu.Item>
                    <Menu.Item key="2" icon={<HomeOutlined />}>
                           {!collapsed ? <Link to="/dashboard">Dashboard</Link> : ''} 
                            
                        </Menu.Item>
                        
                        <Menu.Item key="3" icon={<AuditOutlined />}>
                        {!collapsed ? <Link to="/audit-trail">Audit Trail</Link> : ''}
                            
                       </Menu.Item>
                       <Menu.Item key="4" icon={<InfoCircleOutlined />}>
                            {!collapsed ? <Link to="/accountinfo">Account Information</Link> : ''}
                            
                     </Menu.Item>
                    
                </Menu>
            </Sider>


            <Layout>



                <HeaderDesign />

                


                <Content
                    style={{
                        margin: '5px 9px',
                        padding: 24,
                        minHeight: 560,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                      
                 
                       
                    }}
                >
                  
                    <Submission/>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
                
            </Layout>
        </Layout>
    );
};
export default SubmissionLayoutDesign;