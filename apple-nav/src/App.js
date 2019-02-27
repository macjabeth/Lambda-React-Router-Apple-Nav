import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import data from './data';

class App extends Component {
  state = { data };

  render() {
    const { icons, links } = this.state.data;
    return (
      <React.Fragment>
        <GlobalStyle />
        <NavWrapper>
          <Nav>
            <NavLink to="/">
              <NavIcon src={icons.apple} alt="apple" />
            </NavLink>
            {links.map(({ cat, route }) => (
              <NavLink to={route} key={cat}>
                {cat}
              </NavLink>
            ))}
            <NavLink to="/search">
              <NavIcon src={icons.search} alt="search" />
            </NavLink>
            <NavLink to="/shop">
              <NavIcon src={icons.shop} alt="shop" />
            </NavLink>
          </Nav>
        </NavWrapper>
        <SubNavWrapper>
          <SubNav>
            {links.map(({ route, items }) => (
              <Route
                path={route}
                key={route}
                render={props => (
                  <div>
                    {items.map(({ name, route, icon }) => (
                      <SubNavItem key={name}>
                        <Link to={`/${route}`}>
                          <SubNavIcon icon={icon} />
                          <SubNavLabel>{name}</SubNavLabel>
                        </Link>
                      </SubNavItem>
                    ))}
                  </div>
                )}
              />
            ))}
          </SubNav>
        </SubNavWrapper>
      </React.Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`;

const NavWrapper = styled.div`
  background-color: rgba(45, 45, 45, 0.98);
  width: 100%;
  min-width: 1024px;
  height: 5rem;
  font-size: 1.7rem;
`;
const Nav = styled.nav`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  user-select: none;

  > a {
    text-decoration: none;
    color: white;
    transition: 200ms;

    &:hover {
      opacity: 0.65;
    }

    &.active {
      opacity: 0.65;
    }
  }
`;
const NavIcon = styled.img`
  display: flex;
`;

const SubNavWrapper = styled.div`
  background-color: rgba(242, 242, 242, 0.7);
  width: 100%;
  height: 9rem;
  text-align: center;
  padding: 1.2rem 0;
`;
const SubNav = styled.nav`
  padding: 0 3rem;
`;
const SubNavItem = styled.div`
  display: inline-block;
  padding: 0 2rem;

  > a {
    text-decoration: none;
    color: #111;
  }
`;
const SubNavIcon = styled.figure`
  display: block;
  width: 4.5rem;
  height: 5.5rem;
  margin: 0 auto 0.5rem;
  background-size: 4.5rem 5.5rem;
  background-repeat: no-repeat;
  background-image: url(${props => props.icon});
`;
const SubNavLabel = styled.span`
  font-size: 1.1rem;
  display: block;
`;

export default App;
