import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    HomeOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    PlusOutlined,
    CheckOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const DefaultLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    function logoutUser(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('code'); // Clear the code on logout
        window.location.href = "/login";
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const code = localStorage.getItem('code'); // Get the code from localStorage

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} width={250} collapsedWidth={80}
                style={{ position: 'sticky', overflow: 'auto', height: '100vh', top: 0,backgroundColor: 'orange', }}
            >
                <div  className="logo"  style={{ marginBottom: '45px' }}>
                    {collapsed ? <h1>Vs</h1> : <h1>Vishnu Skillboard</h1>}
                </div>
                <Menu
                className="custom-menu"
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={[
                        {
                            key: '/',
                            icon: <HomeOutlined />,
                            label: <Link to="/">Home</Link>,
                        },
                        {
                            key: '/profile',
                            icon: <UserOutlined />,
                            label: <Link to="/profile">My Profile</Link>,
                        },
                        {
                            key: '/appliedjobs',
                            icon: <UploadOutlined />,
                            label: <Link to='/appliedjobs'>Applied Oppurtunities</Link>,
                        },
                        // Conditionally render these items based on the code
                        ...(code === "teachervit001" ? [
                            {
                                key: '/postjob',
                                icon: <PlusOutlined />,
                                label: <Link to="/postjob">Post Oppurtunity</Link>,
                            },
                            {
                                key: '/posted',
                                icon: <CheckOutlined />,
                                label: <Link to="/posted">Posted Oppurtunities</Link>,
                            },
                        ] : []),
                        {
                            key: '/logout',
                            icon: <LogoutOutlined />,
                            label: <Link onClick={logoutUser}>Logout</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: 'sticky',
                        zIndex: 9999,
                        top: 0,
                    }}
                >
                    <div className="flex justify-content-between m-3">
                        <Button
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '15px',
                                width: 34,
                                height: 64,
                                background: colorBgContainer,
                            }}
                        />
                        
                        <div style={{ display: collapsed ? 'none' : 'inline' }} className="circle">
                            <Link to="/profile">
                                <h5 className="circle-inner"><b>{user?.username?.slice(0, 1).toUpperCase()}</b></h5>
                            </Link>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        padding: 13,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default DefaultLayout;
