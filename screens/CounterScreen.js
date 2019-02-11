import React from 'react';
import { Container, Header, Content, Fab, View, Text,Icon, Title, Left, Right, Body, Button } from 'native-base';

import { WebBrowser,Font } from 'expo';

export default class CounterScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };


  state = {counter: 0}

  addHandler = () =>  {
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  }

  resetHandler = () =>  {
    this.setState((state) => ({
      counter: 0
    }))
  }
  render() {
    return (
     

      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Awesome Counter</Title>
          </Body>
          <Right>
            <Button transparent ripple>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <View 
          style={{
            flex:1,
            alignItems: "center" ,
            justifyContent: 'center'
          }}
        >
          <Text>
            { this.state.counter }
          </Text>
          <Fab

            style={{ backgroundColor: '#5067FF', borderRadius:50                                                                                                                                                                                                                                                        }}
            position="bottomRight"
            onPress={this.addHandler}>

            <Icon name="add"/>


          </Fab>

          <Fab
      
            style={{ backgroundColor: '#5067FF' }}
            position="bottomLeft"
            onPress={this.resetHandler}>
            
            <Icon name="refresh" />

            
          </Fab>

        
        </View>
       
      </Container>
    );
  }
}