import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Dashboard extends React.Component {

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

                    <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",height:"35%",marginTop:20}}>
                        <Image
                            style={{width:"50%",height:"50%"}}
                            source={require("../../Assets/machine.png")}
                        />
                        <View style={{width:"50%"}}>
                            <Text style={{fontSize:13,fontWeight:"bold",marginRight:15}}>The wonder of unique garment</Text>
                            <Text style={{fontSize:13,marginRight:15}}>Choose from more than 220 exclusive quality fabrics to create your tailored suits. Each garment is unique, made to measure for your measurements. You can customize every detail: cut, fabric, collar, cuffs, sleeve length, pocket, buttons and monogram. You can even add your initials !</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",height:"35%",marginTop:20}}>
                        <View style={{width:"50%"}}>
                            <Text style={{fontSize:13,fontWeight:"bold",marginRight:18}}>3D program</Text>
                            <Text style={{fontSize:13,marginRight:15}}>We have specially developed software to guarantee you the best browsing experience .

                                Equipped with the best three-dimensional program to create models that meet your expectations</Text>
                        </View>
                        <Image
                            style={{width:"50%",height:"55%"}}
                            source={require("../../Assets/tailor-pants.jpg")}
                        />
                    </View>


                    <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate("Shirt")}>
                        <View style={{width: "85%",backgroundColor:"white",height:"100%",borderRadius:20,justifyContent:"center"}}>
                            <Text style={{marginLeft:"10%",textAlign:"center"}}>Made To Measure Shirt</Text>
                        </View>
                        <Icon name="arrow-right" size={15} style={{color:"white",margin:"5%"}} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card1} onPress={()=>this.props.navigation.navigate("Suit")}>
                        <View style={{width: "85%",backgroundColor:"white",height:"100%",borderRadius:20,justifyContent:"center"}}>
                            <Text style={{marginLeft:"10%",textAlign:"center"}}>Tailored Dress</Text>
                        </View>
                        <Icon name="arrow-right" size={15} style={{color:"white",margin:"5%"}} />
                    </TouchableOpacity>

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
