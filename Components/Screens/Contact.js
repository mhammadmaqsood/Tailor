import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Contact extends React.Component{
    render(){
        return(
            <View style={{width:"100%",height:"100%",backgroundColor:"#EBBA2E",justifyContent:"center"}}>

                <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                    <Image
                        style={{width:40,height:40}}
                        source={require("../../Assets/Menu.png")}
                    />
                </TouchableOpacity>

                <View style={{width:"90%",height:"90%",alignSelf:"center",backgroundColor:"#E5E5E5",borderRadius:10,justifyContent:"center"}}>

                    <TextInput
                        keyboardType='default'
                        placeholder="Name"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='Sur Name'
                        placeholder="First Name"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='default'
                        placeholder="Email"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />
                    <TextInput
                        keyboardType='default'
                        placeholder="Message"
                        placeholderTextColor="gray"
                        style={styles.textInput}
                    />

                    <TouchableOpacity style={styles.card}>
                        <View style={{width: "85%",backgroundColor:"white",height:"100%",borderRadius:20,justifyContent:"center"}}>
                            <Text style={{marginLeft:"10%",textAlign:"center"}}>Submit</Text>
                        </View>
                        <Icon name="arrow-right" size={15} style={{color:"white",margin:"5%"}} />
                    </TouchableOpacity>

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
    },
    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        width: "90%",height:"10%",backgroundColor:"#F7A000",alignSelf: "center",borderRadius:20,flexDirection:"row",marginTop:"40%"
    },
});
