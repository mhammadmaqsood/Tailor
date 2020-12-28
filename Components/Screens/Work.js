import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Work extends React.Component{
    render(){
        return(
            <View style={{width:"100%",height:"100%"}}>

                <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                    <Image
                        style={{width:40,height:40}}
                        source={require("../../Assets/Menu.png")}
                    />
                </TouchableOpacity>

                <Text style={{fontSize:17,fontWeight:"bold",textAlign:"center"}}>How does it work</Text>
                <Text style={{fontSize:17,fontWeight:"bold",textAlign:"center"}}>All the answers to your questions</Text>
                <Text style={{textAlign:"center",marginTop:"3%"}}>Do you have any doubts about how it works? We have the page dedicated to you! Discover our FAQs.</Text>

                <View style={{flexDirection:"row",width:"100%",height:"45%",justifyContent:"space-between"}}>
                    <View style={{width:"50%",height:"80%",backgroundColor:"#F7C900",borderRadius:10,marginTop:"5%"}}>
                        <Text style={{fontWeight:"bold",textAlign:"center",marginTop:"6%",color:"white"}}>What is bespoke clothing?</Text>
                        <Text style={{fontSize:12,marginTop:"10%",color:"white"}}>Tailored clothing simply means that you can design your own shirt / suit / jacket from scratch from the comfort of your home! From the choice of fabric and style, among unlimited color and design possibilities, you will receive your clothes exactly as you thought them.</Text>
                    </View>

                    <View style={{width:"47%",height:"80%",backgroundColor:"#008140",borderRadius:10,marginTop:"5%"}}>
                        <Text style={{fontWeight:"bold",textAlign:"center",marginTop:"6%",fontSize:13,color:"white"}}>How can you offer such affordable prices?</Text>
                        <Text style={{fontSize:12,marginTop:"10%",color:"white"}}>Because we are a specialized tailor with the right infrastructure to produce fine bespoke garments. Our aim is to offer everyone the unique experience of ordering tailored clothing at reasonable prices, while maintaining quality and class.</Text>
                    </View>
                </View>

                <View style={{flexDirection:"row",width:"100%",height:"45%",justifyContent:"space-between"}}>
                    <View style={{width:"50%",height:"70%",backgroundColor:"#431D5A",borderRadius:10}}>
                        <Text style={{fontWeight:"bold",textAlign:"center",marginTop:"6%",color:"white"}}>What is bespoke clothing?</Text>
                        <Text style={{fontSize:12,marginTop:"10%",color:"white"}}>Tailored clothing simply means that you can design your own shirt / suit / jacket from scratch from the comfort of your home! From the choice of fabric and style, among unlimited color and design possibilities, you will receive your clothes exactly as you thought them.</Text>
                    </View>

                    <View style={{width:"47%",height:"70%",backgroundColor:"#7C0000",borderRadius:10}}>
                        <Text style={{fontWeight:"bold",textAlign:"center",marginTop:"6%",fontSize:13,color:"white"}}>How can you offer such affordable prices?</Text>
                        <Text style={{fontSize:12,marginTop:"10%",color:"white"}}>Because we are a specialized tailor with the right infrastructure to produce fine bespoke garments. Our aim is to offer everyone the unique experience of ordering tailored clothing at reasonable prices, while maintaining quality and class.</Text>
                    </View>
                </View>

            </View>
        )
    }
}
