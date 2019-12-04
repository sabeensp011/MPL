import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'yellow'}}>

          <View style={{flex:1,backgroundColor:'#008EEC'}}>
          <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:20}}> 
               Header !
            
               I Love My Mama 
              </Text>
         </View>
              
          <View style={{flex:4,backgroundColor:'green',flexDirection:'row'}}>
                <View style={{flex:2,backgroundColor:'#1034A6'}}> 
                    <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:14,marginTop:80}}> 
                      Left
                  </Text>
                </View>
                <View style={{flex:4,backgroundColor:'blue',flexDirection:'column'}}>
                    <View style={{flex:1,backgroundColor:'blue'}}>
                       <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:14,marginTop:50}}> 
                      Title
                  </Text>
                    </View>
                    <View style={{flex:1,backgroundColor:'pink'}}>
                         <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:14,marginTop:50}}> 
                      Image
                  </Text>
                    </View>
                     <View style={{flex:1,backgroundColor:'blue'}}> 
                         <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:14,marginTop:50}}> 
                      Content
                  </Text>
                     </View> 
                </View>
                <View style={{flex:2,backgroundColor:'#1034A6'}}>
                   <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:14,marginTop:100}}> 
                      Right
                  </Text>
                </View>
               
                
          </View>
          <View style={{flex:1,backgroundColor:'#008EEC'}}>
          <Text style={{fontWeight: 'bold', color:'white', textAlign:"center", fontSize:20}}> 
               Mama is my Besti
              </Text>
          </View>
      </View>
    )
  }
}