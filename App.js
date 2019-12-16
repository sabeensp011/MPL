import React, {Component} from 'react';
import {Text,View,StyleSheet,TextInput, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

class register extends Component{
  render(){
    
    return(
      
      <Text >Welcome  Login Page</Text>
      
    );
  }
}
class retry extends Component{
  render(){
    return(
      
      <Text >Try again</Text>
    );
  }
}
registeruser=()=>{
  if (this.state.username=='' || this.state.useremail=='' ||this.state.userpasword=='')
  {
    this.props.navigation.navigate('retry');
  }
}
 class Layout extends Component{

  constructor (props){
    super(props);
    this.state={
      username:" ",
      useremail:" ",
      userpasword:" "
      };
  }

  render(){
    return(

        <View style={styles.container}>
            <View style={styles.head}>
            <Text style={styles.logo}>Logo</Text>
            </View>


            <View style={styles.mid}>
                <View style={styles.mid1}>
                  <View style={{backgroundColor:'blue',flex:1}}>
                  </View>
                  <View style={{backgroundColor:'white',flex:1}}>
                  </View>
                  <View style={{backgroundColor:'pink',flex:1}}>
                    
                  </View>
                  <View style={{backgroundColor:'green',flex:1}}>
                    
                  </View>
                  <View style={{backgroundColor:'black',flex:1}}>
                    
                  </View>
                  </View>

                <View style={styles.mid2}>
                    <TextInput placeholder="Enter User Name" onChangeText={text=>this.setState({username:text})} autoFocus={true} onChangeText={(username)=>this.setState({username})} style={{textAlign:'center',justifyContent:'center',backgroundColor:'white',marginTop:50}}/>
                    <TextInput placeholder="Enter User Email" onChangeText={text=>this.setState({userpasword:text})} style={{textAlign:'center',justifyContent:'center',backgroundColor:'white',marginTop:50}}/>
                    <TextInput placeholder="Enter User Password" secureTextEntry={true} onChangeText={text=>this.setState({useremail:text})} style={{textAlign:'center',justifyContent:'center',backgroundColor:'white',marginTop:50}}/>
                   
                <Button title={"Login"} onPress={()=>this.props.navigation.navigate('register')}></Button>
                </View>

                {/* <Text style={{color:'white',fontWeight:'bold',marginTop:50}}>  Welcome to {this.state.username}</Text> */} 
            </View>


            <View style={styles.footer}>
            <Text style={styles.foot}>2019 Copyright</Text>
            </View>
        </View>
    );
  }
}

export function Username(props){
  return <TextInput value={props.username} style={{color:'red'}}/>;
}


const styles =StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  head:{
    flex:1,
    backgroundColor:'pink',
  },
  mid:{
    flex:6,
    backgroundColor:'red',
    flexDirection:'row',
  },
  mid1:{
    flex:2,
    backgroundColor:'green',
    flexDirection:'column',
  },
  mid2:{
    flex:4,
    backgroundColor:'deepskyblue',
  },
  footer:{
    flex:1,
    backgroundColor:'lightpink',
  },
  logo:{
    color:'blue',
    textAlign:'center',
    fontSize:25,

  },
  foot:{
    color:'blue',
    textAlign:'center',
    fontSize:25,
  }
});
const navigationapp=createStackNavigator({
  Layout:Layout,
  register:register,
  retry:retry
});
export default createAppContainer(navigationapp)