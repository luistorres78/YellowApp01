import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { WebBrowser } from 'expo';
import { Icon, SearchBar } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import { Content, Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { MonoText } from '../components/StyledText';

// Categorias
const items = [
  { name: 'MASCOTAS', code: '#1abc9c' }, { name: 'BIENES RAICES', code: '#2ecc71' },
  { name: 'AUTOS', code: '#3498db' }, { name: 'ENSERES', code: '#9b59b6' },
  { name: 'MUEBLES', code: '#34495e' }, { name: 'ARTICULOS', code: '#16a085' },
  { name: 'ELECTRONICOS', code: '#FFA07A' }, { name: 'EMPLEOS', code: '#F0E68C' }, { name: 'LIBROS', code: '#1abc9c' }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={{ flexDirection: 'column', flex: 1 }}>
      
      <Header>
        
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Drawer')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('Loading')}>
              <Icon name="user" type="evilicon" />
            </Button>
          </Right>
          
        </Header>

        <SearchBar
          round lightTheme
          /* onChangeText={someMethod}
          onClear={someMethod} */
          placeholder='¡Encuéntrelo!' />
      
      
      <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={item => (

            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
