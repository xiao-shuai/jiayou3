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
    RefreshControl,Alert
} from 'react-native'
import { zthui2 } from './momqjstyle';
import {ButtonGroup,Input,Button} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import {NavigationActions} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
let whereIsMyMind = [
    "Ooooooh - stop",
    "With your feet in the air and your head on the ground",
    "Try this trick and spin it, yeah",
    "Your head will collapse",
    "But there's nothing in it",
    "And you'll ask yourself",
    "Where is my mind [3x]",
    "Ooooh",
    "With your feet in the air and your head on the ground",
    "Ooooh",
    "Try this trick and spin it, yeah",
    "Ooooh",
    "Ooooh"
  ];
  let tnt = [
    "See me ride out of the sunset",
    "On your color TV screen",
    "Out for all that I can get",
    "If you know what I mean",
    "Women to the left of me",
    "And women to the right",
    "Ain't got no gun",
    "Ain't got no knife",
    "Don't you start no fight",
    "'Cause I'm T.N.T. I'm dynamite",
    "T.N.T. and I'll win the fight",
    "T.N.T. I'm a power load",
    "T.N.T. watch me explode"
  ];  
  const appConfig = {
    // 用户的appkey
    // 用于在web demo中注册账号异步请求demo 服务器中使用
    test: {
      appkey: 'fe416640c8e8a72734219e1847ad2547',
      postUrl: 'https://apptest.netease.im',
    },
    online: {
      appkey: '45c6af3c98409b18a84451215d0bdd6e',
      postUrl: 'https://app.netease.im',
    },
  };
  const appConfig2 = {
    // 用户的appkey
    // 用于在web demo中注册账号异步请求demo 服务器中使用
    test: {
      appkey: 'fe416640c8e8a72734219e1847ad2547',
      postUrl: 'https://apptest.netease.im',
    },
    online: {
      appkey: '45c6af3c98409b18a84451215d0bdd6e',
      postUrl: 'https://app.netease.im',
    },
  };
class Logg extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      yyylkj=()=>{
          if(this.state.monlogzh==undefined){
              return this.refs.toast.show('Please enter the account number',1000)
  
          } else if(this.state.monlogmm==undefined){
             return  this.refs.toast.show('Please enter password',1000)
  
          }
          fetch('https://easy-mock.com/mock/5d27013085f8e619f910e282/jiayoumom/logggin',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
          AsyncStorage.setItem('ss','11')
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'rroott' })], 0)
          
      }
      reggg=()=>{
          if(this.state.qq_zc_zh==undefined){
              return this.refs.toast.show('Please enter account number',1000)
          }else if (this.state.qq_ww_zcpw==undefined){
            return this.refs.toast.show('Please enter password',1000)
          }else if (this.state.qq_ww_zcpw!==this.state.qq_ww_zcpw2){
              return this.refs.toast.show('Password inconsistency',1000)
          }
          fetch('https://easy-mock.com/mock/5d27013085f8e619f910e282/jiayoumom/zhuche',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
          AsyncStorage.setItem('ss','11')
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'rroott' })], 0)
      }
      
      ffforgit=()=>{
      Alert.alert('Warm prompt','If you forget your password, please contact us at 021-32349874',[{'text':'ok',onPress:()=>{}}])
      }
    render(){
        const buttons = ['Login', 'Registered']
       const { selectedIndex } = this.state
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <KeyboardAwareScrollView>
            <View style={styles.big_v}>
                <View style={{width:'100%',height:zthui2.big_height*.2,
            alignItems:'center',justifyContent:'center'
            }}>
                    <Image source={require('./img/thislogo.png')} style={{
                        width:zthui2.big_width*.3,
                        height:zthui2.big_width*.3,
                        borderRadius:zthui2.big_width*.15
                    }}/>
                </View>
            <ButtonGroup
            // buttonStyle={{backgroundColor:zthui2.zhutisee}}
            selectedButtonStyle={{backgroundColor:zthui2.zhutisee}}
            
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height:zthui2.big_height*.05}}
    />

    {
      selectedIndex==0?
      <View>
     <Input inputStyle={{}}
     
     containerStyle={styles.iiii_ccc} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='Please enter your account number'
     onChangeText={(monlogzh)=>{
     this.setState({monlogzh})
     }}

     />
     <Input inputStyle={{}}
     secureTextEntry={true}
     onChangeText={(monlogmm)=>{
     this.setState({monlogmm})
     }}
     containerStyle={styles.iiii_ccc} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='Please enter password'
     />
     
     <Button title='Login' buttonStyle={[{backgroundColor:zthui2.zhutisee,marginTop:20}]}
       onPress={()=>{
           this.yyylkj()
       }}
     />
     <View style={{width:zthui2.big_width*.95,flexDirection:'row',justifyContent:'space-between'}}>
     <Button title='' type='clear'/>
     <Button title='Forgot password' type='clear' titleStyle={{color:zthui2.zthui2}} onPress={()=>{
         this.ffforgit()
     }}/>
     </View>
      </View>
      :
      <View>
      <Input inputStyle={{}}
      onChangeText={(qq_zc_zh)=>{
        this.setState({qq_zc_zh})
      }}
      containerStyle={styles.iiii_ccc} 
      inputContainerStyle={{borderBottomWidth:0}}
      placeholder='Please enter your account number'
      />
      <Input inputStyle={{}}
      onChangeText={(qq_ww_zcpw)=>{
        this.setState({qq_ww_zcpw})
      }}
      secureTextEntry={true}
      containerStyle={styles.iiii_ccc} 
      inputContainerStyle={{borderBottomWidth:0}}
      placeholder='Please enter password'
      />
      <Input inputStyle={{}}
      onChangeText={(qq_ww_zcpw2)=>{
          this.setState({qq_ww_zcpw2})
      }}
      secureTextEntry={true}
      containerStyle={styles.iiii_ccc} 
      inputContainerStyle={{borderBottomWidth:0}}
      placeholder='Please confirm the password again'
      />
      <Button title='registered' buttonStyle={[{backgroundColor:zthui2.zhutisee,marginTop:20}]}
       onPress={()=>{
           this.reggg()
       }}
      />
       </View>
    }

            </View>
            </KeyboardAwareScrollView>
    <Toast
ref="toast"
position='top'
opacity={0.8}
/>
         </SafeAreaView>
        )
    }
}

export default Logg
const styles=StyleSheet.create({
    iiii_ccc:{
        width:zthui2.big_width*.95,
        // height:zthui2.big_height*.05,
        borderColor:zthui2.zthui2,borderWidth:1,borderRadius:5,marginTop:20
    },
    big_v:{
        flex:1,alignItems:'center',width:'100%',
        // backgroundColor:zthui2.beijinsse
    }
})