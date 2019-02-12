import React from 'react';
import { Container, Header, Fab, View, Text,Icon, Title, Left, Right, Body, Button } from 'native-base';

export default class CounterScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };


  state = {counter: 0};

  addHandler = () =>  {
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  };

  resetHandler = () =>  {
    this.setState((state) => ({
      counter: 0
    }))
  };
  render() {
    return (
     

      <Container>
        <Header>
          <Body>
            <Title>Awesome Counter</Title>
          </Body>
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
              onPress={this.addHandler}
              style={{backgroundColor: '#5067FF'}}
              position="bottomRight"
          >
            <Icon transparent name="add"/>
          </Fab>

          <Fab
              style={{ backgroundColor: '#5067FF' }}
              position="bottomLeft"
              onPress={this.resetHandler}
          >
            <Icon name="refresh" />
          </Fab>
        </View>

      </Container>
    );
  }
}