import React ,{useState}from "react";
import { Layout, Menu,Modal } from 'antd';
import {Link} from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    CaretRightOutlined,
    ContactsOutlined,
    AntDesignOutlined
  } from '@ant-design/icons';
  import 'antd/dist/antd.css';
  import "./index.css";
  import RegistrationForm from "./signup";
  import MyHeader from "./Header";
  const { Header, Sider, Content } = Layout;


const DashboardLayout =({children})=> {

    const [collapsed,setCollapsed] =useState(false);

    const toggle =()=>{
        setCollapsed(!collapsed);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
      const [current, setCurrent]=useState("home");
  
  
    const handleClick = e => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    const state = {
      collapsed: false,
    };
  
    const toggleCollapsed = () => {
      this.setState({
        collapsed: !state.collapsed,
      });
    };
    

    return(
    <>
    
      <Modal title="Registration Form" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<RegistrationForm/>

</div>
    </Modal>
        <MyHeader/>
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{height:"95vh"}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/dashboard">   Sessions      </Link>
              
            </Menu.Item>
            <Menu.Item key="5" icon={<CaretRightOutlined />}>
            <Link onClick={handleClick} to="/about">About Us</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/dashmentors">   All Sectors      </Link>
           
            </Menu.Item>
            <Menu.Item key="6" icon={<VideoCameraOutlined />}>
                <Link to="/">   All Appointments      </Link>
           
            </Menu.Item>
            <Menu.Item key="7" icon={<VideoCameraOutlined />}>
                <Link to="/">   All Scheduler      </Link>
           
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/profile">   Profile      </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ContactsOutlined />}>
            <Link onClick={handleClick} to="/contact">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="Register" onClick={showModal} icon={<AntDesignOutlined />}> 
         Register
        </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      </>
    )
}

export default DashboardLayout;