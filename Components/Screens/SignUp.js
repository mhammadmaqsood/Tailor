import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class SignUp extends React.Component{
    render(){
        return(
            <View style={{width:"100%", height:"100%", backgroundColor:"#EBBA2E"}}>

                <StatusBar backgroundColor="#EBBA2E" />

                <View style={styles.body}>
                    <Text style={{fontSize:20,fontWeight:"bold",margin:25}}>Sign Up</Text>
                    <TextInput
                        keyboardType='default'
                        placeholder="First Name"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='Last Name'
                        placeholder="First Name"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='default'
                        placeholder="Email Address"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='default'
                        placeholder="Password"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='default'
                        placeholder="Confirm Password"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='numeric'
                        placeholder="Phone Number"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />

                    <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate("Dashboard")}>
                        <View style={{width: "85%",backgroundColor:"white",height:"100%",borderRadius:20,justifyContent:"center"}}>
                            <Text style={{marginLeft:"10%",textAlign:"center"}}>Sign Up</Text>
                        </View>
                        <Icon name="arrow-right" size={15} style={{color:"white",margin:"5%"}} />
                    </TouchableOpacity>

                    <View style={{flexDirection: "row",alignSelf:"center",marginTop:"5%"}}>
                        <Text>Already have an account?</Text>
                        <Text style={{color: "#EBBA2E"}} onPress={()=>this.props.navigation.navigate("SignIn")}> Sign In</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        width:"85%",
        borderBottomWidth:1,
        borderBottomColor:"#CDCDCD",
        alignSelf: "center"
        // marginTop:15
    },
    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        width: "90%",height:"10%",backgroundColor:"#011842",alignSelf: "center",borderRadius:20,marginTop:"10%",flexDirection:"row"
    },
    Button:{
        margin: 10,
        width:"90%",
        backgroundColor:"#00007C",
        alignSelf:"center",
        justifyContent:"center",
        borderRadius:50,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    body: {
        width: "100%",
        height: "80%",
        backgroundColor: "#F2F2F2",
        marginTop: "40%",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60
    }
});
