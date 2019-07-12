import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,
    RefreshControl
} from 'react-native'
import {SearchBar} from 'react-native-elements'
import { zthui2 } from './momqjstyle';
// import {Top} from './compont/compont' 
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';
import {Button} from 'react-native-elements'

export default class DiiZhi extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
componentDidMount(){
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/lllst')
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
}
    render(){
        let tytt=[
            {
                tit:'Here,',
                con:'33 laifu road, jaingxia district, wuhan city, hubei province, China'
               },
            {
            tit:'Working time',
            con:'Monday through Friday,09:00-06:00'
            },
            {
            tit:'Contact phone number',
            con:'+861873567894',
            },
            
            {
              tit:'Email',
              tit:'Werfhy9@gmail.com'  
            }


        ]
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:zthui2.beijinsse,flex:1,width:'100%'}}>
             {/* <Top title='Here we are'/> */}
             <View style={styles.topbig}>

          <Button title='The map' type='clear' titleStyle={{
            color:'white',fontSize:zthui2.big_width*.06,fontWeight:'500'
          }}/> 
         
         </View>

                    <ScrollView contentContainerStyle={{
                        alignItems:'center'
                    }}>

                    <MapView 
          style={styles.dt}
          initialRegion={{
            latitude: 39.9863275788,
            longitude:116.3544845581,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker coordinate={{
             latitude: 39.9853275788,
             longitude:116.3644845581,
            }} pinColor={zthui2.zhutisee}>
            <Callout style={styles.aacallout} >
             <View style={{}}>
                <Text>Hubei DingKing street </Text>
             </View>
            </Callout>
          </Marker>
          </MapView>

          {
              tytt.map((i,l)=>{
                 return(
                     <View style={{width:zthui2.big_width*.95,marginTop:10}}>
                     <Button title={i.tit} 
                      buttonStyle={{backgroundColor:zthui2.zhutisee}}/>
                     <Text style={{marginTop:5,fontSize:zthui2.big_width*.05,color:zthui2.zthui2}}>{i.con}</Text>
                     </View>
                 )
              })

          }

                    </ScrollView>
         
                </View>
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({
    aacallout:{
        width:zthui2.big_width*.5,
        padding:6,
        opacity:.7
    },
    dt:{
        width:zthui2.big_width,
        height:zthui2.big_height*.25,
        marginTop:3
     },
     topbig:{
        width:zthui2.big_width,
        height:zthui2.big_height*.1,
        backgroundColor:zthui2.zhutisee,
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // padding:10
       }
})