import React , { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView,Button,ImageBackground,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './UserProfile.view.style.js';
import { StackNavigator } from 'react-navigation';
import Status from '../UserProfile/Status.js';
import Goal from '../UserProfile/Goal.js';
import Goaltwo from '../UserProfile/GoalTwo.js';
import GoalThree from '../UserProfile/GoalThree.js';
import Goalfour from '../UserProfile/GoalFour.js';
import GoalFive from '../UserProfile/GoalFive.js';
class Points extends React.Component {
  static navigationOptions ={
    headerTintColor: 'white',
    headerTitle: (
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Roboto',
          color: 'white',
          fontSize: 26
        }}
      >
        Points
      </Text>
    ),
    headerStyle: { backgroundColor: '#4C4240' },
  }
render(){
   const {navigate} = this.props.navigation;
    return(
      <ScrollView scrollEventThrottle = {16}>
<View style={{flex:1,backgroundColor:'#817977'}}>
   <TouchableOpacity
   onPress={()=>{ navigate('Second')}}
   >
   <View style={styles.box1}>
   <ImageBackground borderRadius={15}
          style={{flex:1,}}
          source={require("../UserProfile/points/iPhone1.png")}>
          <Text
                style={{   
                fontSize: 18,
                fontFamily: 'Gill Sans',
                color: '#fff',
                backgroundColor: 'transparent',top:23,left :21
                    }}>

                  Your status
                </Text>
                  <Text
                  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:28,left :21
                }}>

                Level 1
              </Text>
                <Text
              style={{   
              fontSize: 18,
              fontFamily: 'Gill Sans',
              color: '#fff',
              backgroundColor: 'transparent',top:33,left :21
            }}>

                Traveller
              </Text>
        <View style={{flexDirection:'row', top:50 ,justifyContent:'space-around'}}>
                  <View style={{flexDirection:'column',}}>
                            <Text
                      style={{   
                      fontSize: 15,
                      fontFamily: 'Gill Sans',
                      color: '#fff',
                      backgroundColor: 'transparent'
                    }}>

                        Points
                      </Text>
                        <Text
                      style={{   
                      fontSize: 15,
                      fontFamily: 'Gill Sans',
                      color: '#fff',
                      textAlign:'center',
                      backgroundColor: 'transparent'
                    }}>

                        499
                      </Text>
                  </View>

              <View style={{flexDirection:'column',}}>
                            <Text
                      style={{   
                      fontSize: 15,
                      fontFamily: 'Gill Sans',
                      color: '#fff',
                      backgroundColor: 'transparent'
                    }}>

                          Remaining Points
                      </Text>
                      <Text
                    style={{   
                    fontSize: 15,
                    fontFamily: 'Gill Sans',
                    color: '#fff',
                    textAlign:'center',
                    backgroundColor: 'transparent'
                  }}>

                      2001 points to go
                    </Text>
                 </View>

                <View style={{flexDirection:'column',right:21}}>
                            <Text
                      style={{   
                      fontSize: 15,
                      fontFamily: 'Gill Sans',
                      color: '#fff',
                      backgroundColor: 'transparent'
                    }}>

                        Next Level
                      </Text>
                      <Text
                    style={{   
                    fontSize: 15,
                    fontFamily: 'Gill Sans',
                    color: '#fff',
                    textAlign:'center',
                    backgroundColor: 'transparent'
                  }}>

                      2500
                    </Text>
                    </View>

                    
                </View>
</ImageBackground>
            </View>
    
     </TouchableOpacity>
    <TouchableOpacity onPress={()=>{ navigate('Third')}}>
    <View style={styles.box1}>
    <ImageBackground borderRadius={15}
          style={{flex:1,}}
          source={require("../UserProfile/points/iPhone2.png")}>
          <Text  style={{   
          fontSize: 18,
          fontFamily: 'Gill Sans',
          color: '#fff',
          backgroundColor: 'transparent',top:23,left :21
        }}>
                Your goal
              </Text>

                <Text
            style={{   
            fontSize: 18,
            fontFamily: 'Gill Sans',
            color: '#fff',
            backgroundColor: 'transparent',top:28,left :21
          }}>

                Level 2
              </Text>
                <Text
              style={{   
              fontSize: 18,
              fontFamily: 'Gill Sans',
              color: '#fff',
              backgroundColor: 'transparent',top:33,left :21
            }}>

                Pioneer
              </Text>
              <View style={{flexDirection:'row', top:50 ,justifyContent:'space-around'}}>
                  
                            <Text
                      style={{   
                      fontSize: 16,
                      fontFamily: 'Gill Sans',
                      color: '#fff',
                      backgroundColor: 'transparent',
                      justifyContent:'space-around'
                    }}>

                          You need 2500 points to reach Level 2 Earn 15 points per rating
                      </Text>
                

                    
                  
                  
                      </View>
         </ImageBackground>             
     </View>
   </TouchableOpacity>

  <TouchableOpacity onPress={()=>{ navigate('Forth')}} >
    <View style={styles.box1}>
    <ImageBackground borderRadius={15}
          style={{flex:1,}}
          source={require("../UserProfile/points/iPhone3.png")}>
                  <Text  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:23,left :21
                }}>
                    Your goal
                  </Text>

                      <Text
                  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:28,left :21
                }}>

                    Level 3
                  </Text>
                  <Text
                style={{   
                fontSize: 18,
                fontFamily: 'Gill Sans',
                color: '#fff',
                backgroundColor: 'transparent',top:33,left :21
              }}>

                  Adventurer
                </Text>
            <View style={{flexDirection:'row', top:50 ,justifyContent:'space-around'}}>
                
                        <Text
                    style={{   
                    fontSize: 16,
                    fontFamily: 'Gill Sans',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    justifyContent:'space-around'
                  }}>

                        You need 5000 points to reach Level 3 Earn 20 points per rating
                    </Text>
          </View>
          </ImageBackground>
        </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{ navigate('Fifth')}} >
    <View style={styles.box1}>
    <ImageBackground borderRadius={15}
          style={{flex:1,}}
          source={require("../UserProfile/points/iPhone4.png")}>
                  <Text  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:23,left :21
                }}>
                    Your goal
                  </Text>

                      <Text
                  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:28,left :21
                }}>

                    Level 4
                  </Text>
                  <Text
                style={{   
                fontSize: 18,
                fontFamily: 'Gill Sans',
                color: '#fff',
                backgroundColor: 'transparent',top:33,left :21
              }}>

                  Explorer
                </Text>
            <View style={{flexDirection:'row', top:50 ,justifyContent:'space-around'}}>
                
                        <Text
                    style={{   
                    fontSize: 16,
                    fontFamily: 'Gill Sans',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    justifyContent:'space-around'
                  }}>

                        You need 10000 points to reach Level 4 Earn 25 points per rating
                    </Text>
          </View>
          </ImageBackground>
        </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{ navigate('Sixth')}} >
    <View style={styles.box1}>
    <ImageBackground borderRadius={15}
          style={{flex:1,}}
          source={require("../UserProfile/points/iPhone5.png")}>
                  <Text  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:23,left :21
                }}>
                    Your goal
                  </Text>

                      <Text
                  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:28,left :21
                }}>

                    Level 5
                  </Text>
                  <Text
                style={{   
                fontSize: 18,
                fontFamily: 'Gill Sans',
                color: '#fff',
                backgroundColor: 'transparent',top:33,left :21
              }}>

                  Trailblazer
                </Text>
            <View style={{flexDirection:'row', top:50 ,justifyContent:'space-around'}}>
                
                        <Text
                    style={{   
                    fontSize: 16,
                    fontFamily: 'Gill Sans',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    justifyContent:'space-around'
                  }}>

                        You need 20000 points to reach Level 5 Earn 30 points per rating
                    </Text>
          </View>
          </ImageBackground>
        </View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>{ navigate('Seventh')}} >
    <View style={styles.box1}>
    <ImageBackground borderRadius={15}
          style={{flex:1,}}
          source={require("../UserProfile/points/iPhone6.png")}>
                  <Text  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:23,left :21
                }}>
                    Your goal
                  </Text>

                      <Text
                  style={{   
                  fontSize: 18,
                  fontFamily: 'Gill Sans',
                  color: '#fff',
                  backgroundColor: 'transparent',top:28,left :21
                }}>

                     Invite only level
                  </Text>
                  <Text
                style={{   
                fontSize: 18,
                fontFamily: 'Gill Sans',
                color: '#fff',
                backgroundColor: 'transparent',top:33,left :21
              }}>

                   Guardian
                </Text>
            <View style={{flexDirection:'row', top:50 ,justifyContent:'space-around'}}>
                
                        <Text
                    style={{   
                    fontSize: 16,
                    fontFamily: 'Gill Sans',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    justifyContent:'space-around'
                  }}>

                       This level is for OPR ambassadors, VIP's and users, Earn 100 points per rating
                    </Text>
          </View>
          </ImageBackground>
        </View>
</TouchableOpacity>
    </View>
    </ScrollView>
    );
}

}
export default App = StackNavigator({
  first:{screen: Points},
  Second:{screen: Status},
    Third:{screen: Goal},
    Forth:{screen: Goaltwo},
  Fifth:{screen: GoalThree},
  Sixth:{screen: Goalfour},
  Seventh:{screen: GoalFive},
});