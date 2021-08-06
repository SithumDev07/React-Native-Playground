import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, ScrollView, FlatList, Dimensions, Image } from 'react-native'
import Animated from 'react-native-reanimated'
import tw from 'tailwind-react-native-classnames'
import data from '../data';

const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = width * 0.9;

const Earning = () => {
    return (
        <>
            <Text style={tw`text-center font-bold text-purple-700 text-3xl mt-2`}>Earnings</Text>
            <ScrollView style={tw`flex-1 py-3`} contentContainerStyle={{ alignItems: 'center' }}>
                {/* <Text style={tw`text-center font-bold text-purple-700 text-3xl mb-6`}>Earnings</Text> */}
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    renderItem={({ item }) => {
                        return (
                            // <View style={[tw``, { width: ITEM_SIZE, }]}>
                            <LinearGradient colors={['#A59CF8', '#7466F8']} style={[tw`h-36 mx-2 p-4 `, { borderRadius: 24, width: ITEM_SIZE }]}>
                                <Text style={tw`text-lg font-bold text-gray-100`} numberOfLines={1}>Today</Text>
                                <Text style={tw`text-3xl text-gray-100 my-3`} numberOfLines={1}>200.00 kwd</Text>
                                <Text style={tw`text-lg font-bold text-gray-100`} numberOfLines={1}>26 July 2021</Text>
                            </LinearGradient>
                            // </View>
                        )
                    }}
                />

                <View style={tw`flex-row justify-between px-4 my-4`}>
                    <Text style={tw`font-bold text-gray-700 text-base flex-1 text-left`}>Order Code</Text>
                    <Text style={tw`font-bold text-gray-700 text-base flex-1 text-right`}>Earning</Text>
                </View>

                {data.map((item) => {
                    return (
                        <View style={[tw`h-16 rounded-lg flex-row justify-between px-3 bg-white mb-3 py-2`, { width: '90%' }]} key={item.id}>
                            <View>
                                <Text style={tw`font-bold text-gray-500 text-sm`} numberOfLines={1}>2020-1215-1205946</Text>
                                <Text style={tw`font-bold text-gray-800 text-sm mt-1`}>07-05-2021</Text>
                            </View>
                            <View>
                                <Text style={tw`font-bold text-purple-900 text-xl`}>+20 kwd</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>

        </>
    )
}

export default Earning
