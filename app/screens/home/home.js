import React, { Component } from 'react'
import { Text, View, Dimensions, ActivityIndicator, FlatList, Image, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Input, ListItem, Item } from 'native-base';
import styles from'./home.styles.js'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window')
import Permissions from 'react-native-permissions'
var Contacts = require('react-native-contacts')
import { Images } from '../../themes/'

class Home extends Component {
	constructor() {
		super();
		this.state = {

		};
	}

	render() {
    return (
      <View style={styles.container}>
      <Header style={{backgroundColor:'#fff', borderBottomWidth:0.2, borderBottomColor: '#EFEDED'}}>
        <Left style={{flex: 0.2}}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name='arrow-back' style={{color:'#2C3137'}} />
          </Button>
        </Left>
        <Body style={{ flex:2}}>
					<Item style={styles.itemStyle}>
						<Icon active name='search' style={styles.searchIconStyle} />
						<Input
	            placeholder='Search'
							placeholderTextColor='#717171'
	            style={styles.inputStyle}
	            />
					</Item>
        </Body>
      </Header>
      <ScrollableTabView
        //style={{borderWidth: 0}}
				tabBarStyle={{borderWidth:0, height:40}}
				tabBarTabStyle={{paddingBottom:0}}
        scrollWithoutAnimation={false}
        tabBarActiveTextColor={'#2C3137'}
        tabBarInactiveTextColor={'#B7BEC5'}
        tabBarUnderlineStyle={styles.tabBorder}
        tabBarBackgroundColor={'white'}
        tabBarTextStyle={styles.tabBarTextStyle}
				renderTabBar={() => <DefaultTabBar style={{ borderBottomWidth:0.2, borderBottomColor: '#EFEDED' }} />} >
	        <Text tabLabel="Tab 1" />
	        <Text tabLabel="Tab 2" />
	        <Invite tabLabel="Invite" />
      </ScrollableTabView>
      </View>
    );
	}
}

class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactPermission: '',
      fetching: false,
      contacts: []
    }
  }
  componentDidMount() {
    Permissions.check('contacts').then(response => {
			console.log('REEE: ', response);
      if(response === 'authorized') {
        this.getContacts().then(() => {
            this.setState({ contactPermission: response })
        })
      }
    })
  }
  getPermission() {
		Permissions.check('contacts').then(response => {
      if(response === 'denied') {
				Alert.alert(
					'Can\'t access Your contacts',"Open phone settings and allow RNSampleProject to access your Contacts.\n" +
				    "\n" +
				    "Then come back!",
					[
				    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
						{text: 'Open Settings', onPress: () => Permissions.openSettings()}
				  ],
				  { cancelable: false }
				)
      } else if(response != 'authorized') {
					this.askForPermission()
			}
    })
  }

	askForPermission() {
		Permissions.request('contacts').then(userResponse => {
			console.log('Permission: ', userResponse);
			if(userResponse === 'authorized') {
				this.getContacts().then(() => {
						this.setState({ contactPermission: userResponse })
				})
			}
		})
	}

  async getContacts() {
    this.setState({ fetching: true })
    await Contacts.getAll((err, contacts) => {
      if (err) throw err;

      this.setState({ fetching: false, contacts })
    })
  }

  renderItem({ item, index }) {
    return <ListItem key={index} style={styles.listItem}>
        <Left style={{ flex: 1.2, borderWidth: 0 }}>
            <Image source={(item.hasThumbnail) ? { uri: item.thumbnailPath } : Images.defaultUserImage} style={styles.userImage} />
        </Left>
        <Body style={{ flex: 4.1, borderWidth: 0 }}>
            <Text style={styles.listName} numberOfLines={1}>{item.givenName} {item.familyName}</Text>
            <Text style={styles.listUsername} numberOfLines={1}>{(item.phoneNumbers.length > 0) ? item.phoneNumbers[0].number : '@nousername'}</Text>
        </Body>
        <Right style={{ flex: 1.7, borderWidth: 0 }}>
          <Button bordered style={styles.btnInvite}>
            <Text style={styles.txtInvite}>+ Invite</Text>
          </Button>
        </Right>
    </ListItem>
  }

  keyExtractor = (item, index) => index.toString();

  render() {

    if(this.state.fetching) {
      return(
        <View style={[styles.inviteContainer]}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else if(this.state.contactPermission != 'authorized') {
      return (
        <View style={[styles.inviteContainer]}>
          <Text style={styles.title}>
            To see who you know on Sample App
          </Text>
          <Text style={styles.subtitle}>
            Take a peak at your Phonebook
          </Text>
          <Button style={styles.btnAccess} onPress={() => this.getPermission()}>
            <Text style={styles.txtAccess}>Access Phonebook</Text>
          </Button>
        </View>
      );
    } else {
      return (
        <View style={[styles.inviteContainer]}>
          <FlatList
            data={this.state.contacts}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            style={{width: '100%'}}
          />
        </View>
      );
    }
  }
}



export default Home;
