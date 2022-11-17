import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';
// 引入路由出口
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
// 引入index.scss文件
import './index.scss';
import { useStore } from '@/store'
import { observer } from "mobx-react-lite";


const { Header, Sider, Content } = Layout;
const items = [
    {
        key: '/',
        icon: <UserOutlined />,
        label: 'nav 1',
        path: '/',
        title: '数据概览'
    },
    {
        key: '/article',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
        path: '/article',
        title: '内容管理',
    },
    {
        key: '/publish',
        icon: <UploadOutlined />,
        label: 'nav 3',
        path: '/publish',
        title: '发布文章',
    },
]



const MyLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();
    const { userStore, loginStore } = useStore();

    useEffect(() => {
        userStore.getUserInfo();
    }, [userStore]);

    const navigate = useNavigate()
    const popConfirm = (e) => {
        loginStore.loginOut()
        navigate('/login')
    }
    return (
        <Layout className='layout'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <div className='title'></div>
                </div>
                {/* 高亮原理：defaultSelectedKeys === item key */}
                {/* 获取当前激活的path路径？ */}
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                >
                    {items.map(v => {
                        return (
                            <Menu.Item icon={v.icon} key={v.key}>
                                <Link to={v.path}>{v.title}</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background layout-header"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className='user-info'>
                        <span className='user-name'>{userStore.userInfo.name}</span>
                        <span className='user-logout'>
                            <Popconfirm
                                title="是否确认退出？"
                                onConfirm={popConfirm}
                                okText="退出"
                                cancelText="取消">
                                <LogoutOutlined />退出
                            </Popconfirm>
                        </span>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {/* Content */}
                    {/* 二级路由出口 */}
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
export default observer(MyLayout);