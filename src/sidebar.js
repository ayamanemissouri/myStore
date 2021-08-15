import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Navigation
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/register" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Register</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
              Products
              </CDBSidebarMenuItem>
            </NavLink>

            <a href='http://s278824855.onlinehome.fr'>
              <CDBSidebarMenuItem icon="th">
                About us
              </CDBSidebarMenuItem>
            </a>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;