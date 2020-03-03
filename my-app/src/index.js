import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Icon, Image, Input, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png" centered />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Dropdown item text="MENS">
                <Dropdown.Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                  <Dropdown.Item>ALOHA SHIRTS</Dropdown.Item>
                  <Dropdown.Item>HATS</Dropdown.Item>
                  <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="WOMENS">
                <Dropdown.Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
                  <Dropdown.Item>HATS</Dropdown.Item>
                  <Dropdown.Item>BAGS & WALLETS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="KIDS">
                <Dropdown.Menu>
                  <Dropdown.Item>SHIRTS</Dropdown.Item>
                  <Dropdown.Item>ONESIES</Dropdown.Item>
                  <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
                  <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="BRAND">
                <Dropdown.Menu>
                  <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                  <Dropdown.Item>AMUSE SOCIETY</Dropdown.Item>
                  <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
                  <Dropdown.Item>HAWAII DOMESTIC MARKET</Dropdown.Item>
                  <Dropdown.Item>HERSCHEL SUPPLY CO.</Dropdown.Item>
                  <Dropdown.Item>HILIFE</Dropdown.Item>
                  <Dropdown.Item>ICONS OF ALOHA</Dropdown.Item>
                  <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>SALE</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {

    return (
        <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png"/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
               <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Store Locations</List.Item>
                  <List.Item>Employment</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Shipping & Returns</List.Item>
                  <List.Item>Terms & Conditions</List.Item>
                  <List.Item>Privacy Policy</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                  <List.Item>Brands</List.Item>
                  <List.Item>Sale</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h4>Sign up for our latest updates!</h4>
                <h4>Join our mailing list for updates</h4>
                <Input
                    action={ { color: 'black', content: 'Join'} }
                    placeholder="Enter Email Address"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <IslandSnow/>,
    document.getElementById('root')
);