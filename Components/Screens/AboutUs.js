import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class AboutUs extends React.Component {
    render(){
        return(
            <View style={{width:"100%",height:"100%"}}>
                <View style={{height:"7%",width:"100%",flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                        <Image
                            style={{width:40,height:40}}
                            source={require("../../Assets/Menu.png")}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:15,fontWeight:"bold",alignSelf:"center",marginLeft:"15%"}}>abbigliamentosumisura</Text>
                </View>

                <View style={{width:"100%",height:"93%"}}>

                    <ScrollView>
                        <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",marginTop:20}}>
                            <Image
                                style={{width:"50%",height:"100%",borderRadius:10}}
                                source={require("../../Assets/clothes.jpg")}
                            />
                            <View style={{width:"50%",marginLeft:5}}>
                                <Text style={{fontSize:13,fontWeight:"bold"}}>40 years of tailoring</Text>
                                <Text style={{fontSize:13}}>We have been present in the tailoring sector for four decades. Over the years we have developed the best techniques to guarantee a tailor-made service for every need. We have the best fabric suppliers, we have a highly specialized IT support team and we have our own production system.
                                    With 40 years of experience, we have in-depth knowledge of all physical types. We aim to achieve a line and cut that best suits your needs, providing the most comprehensive online experience of unique bespoke garments in the world.</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",marginTop:20}}>
                            <View style={{width:"50%"}}>
                                <Text style={{fontSize:13,fontWeight:"bold",marginRight:18}}>Tailored navigation experience</Text>
                                <Text style={{fontSize:13,marginRight:15}}>We boast the most important system of tailor-made garments. Our IT branch is responsible for everything from developing the network communication to the optimization process.
                                    You will always have all the data relating to your made-to-measure suit available: once your model is confirmed and tried on, it is registered, at any time you will be able to reorder it. We even keep older models of every piece you have ordered in the past! At any time you can indicate any changes you wish to make to satisfy your more detailed wishes.</Text>
                            </View>
                            <Image
                                style={{width:"50%",height:"100%",borderRadius:10}}
                                source={require("../../Assets/tailoredNavigation.jpg")}
                            />
                        </View>

                        <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",marginTop:20}}>
                            <Image
                                style={{width:"50%",height:"100%",borderRadius:10}}
                                source={require("../../Assets/silk.jpg")}
                            />
                            <View style={{width:"50%",marginLeft:5}}>
                                <Text style={{fontSize:13,fontWeight:"bold"}}>40 years of tailoring</Text>
                                <Text style={{fontSize:13}}>Our expert tailors, true masters, take care of everything related to cutting and sewing, thus ensuring maximum precision in every phase of the manufacturing processes.
                                    Our professional skill is second to none, so you will notice that neither threads nor chalk marks will remain on your product when it is delivered to you.
                                    You will always have the guarantee of being followed at every stage of processing: from taking the measurements to the choice of fabrics.</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",marginTop:20}}>
                            <View style={{width:"50%"}}>
                                <Text style={{fontSize:13,fontWeight:"bold",marginRight:18}}>High quality for a better experience</Text>
                                <Text style={{fontSize:13,marginRight:15}}>We pay the utmost attention and care to each piece of clothing because we have a lot of respect for each tailoring piece we produce. We have specific quality controls in each production department, to ensure full satisfaction with each order. The quality of our products is excellent. We can proudly say that we are the best in this work, because we put care and attention to detail: from the choice of the fabric to the implementation on the website!</Text>
                            </View>
                            <Image
                                style={{width:"50%",height:"100%",borderRadius:10}}
                                source={require("../../Assets/tie.jpg")}
                            />
                        </View>
                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        width: "90%",height:"10%",backgroundColor:"#F7A000",alignSelf: "center",borderRadius:20,flexDirection:"row",marginTop:"2%"
    },
    card1:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        width: "90%",height:"10%",backgroundColor:"#F7C900",alignSelf: "center",borderRadius:20,flexDirection:"row",marginTop:"2%"
    }
});
