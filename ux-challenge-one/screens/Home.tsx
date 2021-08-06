import React from 'react'

import { View, Text, ScrollView, Image } from 'react-native'
import { BellIcon, CheckCircleIcon, ClipboardIcon, CurrencyDollarIcon, TruckIcon, XCircleIcon } from 'react-native-heroicons/solid'
import tw from 'tailwind-react-native-classnames'

const Home = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={tw`flex-row items-center justify-between px-4 py-3`}>
                <View style={tw`w-16 h-16 p-1 rounded-full border-2 border-purple-600 items-center justify-center`}>
                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2018/06/28/14/12/cat-3504008_960_720.jpg' }} style={tw`w-14 h-14 rounded-full`} />
                </View>
                <Text style={tw`flex-1 text-center text-xl font-bold text-gray-900`}>Home</Text>
                <View style={tw`w-12 h-12 rounded-xl bg-gray-100 items-center justify-center relative shadow-lg`}>
                    <View style={tw`w-3 h-3 rounded-full bg-purple-500 absolute z-10 top-2 right-3`} />
                    <BellIcon style={tw`w-16 text-purple-400`} />
                </View>
            </View>

            {/* Total */}

            <View style={tw`items-center my-3`}>
                <View style={tw`flex-row justify-center items-center w-64`}>
                    <Text style={tw`font-bold text-xl text-gray-900`}>Total:</Text>
                    <Text style={tw`text-purple-600 font-bold text-4xl mx-4 flex-1 text-center`}>40</Text>
                    <Text style={tw`text-gray-500 text-xl font-bold`}>Delivery</Text>
                </View>
            </View>

            {/* Componenets */}

            <View style={[tw`h-16 rounded-xl bg-gray-100 border border-gray-400 flex-row items-center justify-center px-5 mt-2`, { width: '90%' }]}>
                <TruckIcon style={tw`w-16 text-purple-400`} />
                <Text style={tw`text-gray-500 text-lg mx-2 flex-1`}>Pending Orders</Text>
                <Text style={tw`text-gray-500 text-xl font-bold`}>4</Text>
            </View>

            <View style={[tw`flex-row items-center justify-between my-3`, { width: '90%' }]}>
                <View style={[tw`bg-gray-100 border border-gray-400  rounded-xl h-16 flex-row p-2 px-3 items-center justify-between`, { width: '48%' }]}>
                    <TruckIcon style={tw`w-16 text-purple-400`} />
                    <View>
                        <Text style={tw`text-gray-500 text-xl font-bold`}>4</Text>
                        <Text style={tw`text-gray-500 text-xs flex-1`}>Delay Orders</Text>
                    </View>
                </View>

                <View style={[tw`rounded-xl h-16 flex-row p-2 px-3 items-center justify-between`, { width: '48%', backgroundColor: '#17DDD0' }]}>
                    <TruckIcon style={tw`w-16 text-purple-400 text-white`} />
                    <View>
                        <Text style={tw`text-gray-500 text-xl text-white font-bold`}>20</Text>
                        <Text style={tw`text-gray-500 text-xs flex-1 text-white`}>Completed</Text>
                    </View>
                </View>
            </View>


            <View style={[tw`flex-row items-center justify-between`, { width: '90%' }]}>
                <View style={[tw`bg-gray-100 border border-gray-400  rounded-xl h-16 flex-row p-2 px-3 items-center`, { width: '48%' }]}>
                    <CurrencyDollarIcon style={tw`w-16 text-purple-400`} />
                    <Text style={tw`text-gray-500 text-xl font-bold flex-1 text-right mx-1`}>1500</Text>
                    <Text style={tw`text-gray-500 text-xs`}>kwd</Text>
                </View>

                <View style={[tw`border border-gray-400 rounded-xl h-16 flex-row p-2 px-3 items-center bg-gray-100`, { width: '48%' }]}>
                    <CurrencyDollarIcon style={tw`w-16 text-purple-400`} />
                    <Text style={tw`text-gray-500 text-xl font-bold flex-1 text-right mx-1`}>205</Text>
                    <Text style={tw`text-gray-500 text-xs`}>kwd</Text>
                </View>
            </View>

            <View style={[tw`h-16 rounded-xl flex-row items-center justify-center px-5 my-3`, { width: '90%', backgroundColor: '#EC69AB' }]}>
                <XCircleIcon style={tw`w-16 text-gray-100`} />
                <Text style={tw`text-gray-100 text-lg mx-2 flex-1`}>Cancelled Orders</Text>
                <Text style={tw`text-gray-100 text-xl font-bold`}>5</Text>
            </View>


            <View style={[tw`flex-row justify-between bg-gray-100 rounded-xl h-32 mb-5`, { width: '78%' }]}>

                <View style={tw`flex-1 px-3 py-3`}>
                    <Text style={tw`font-bold text-gray-600 text-sm`}>Order Code</Text>
                    <Text style={tw`text-xs text-gray-600`} numberOfLines={1}>2020-1215-1205948</Text>
                    <Text style={tw`text-xs text-gray-600`}>07-05-2021</Text>
                    <Text style={tw`font-bold text-gray-600 text-sm`}>Payment Status</Text>
                    <Text style={tw`text-xs text-gray-600`}>Cash</Text>
                </View>

                <View style={tw`flex-1`}>
                    <View style={tw`flex-1 justify-center p-1`}>
                        <Text style={tw`text-center text-purple-700 font-bold text-xl`}>1.320 kwd</Text>
                    </View>
                    <View style={tw`flex-row`}>
                        <View style={[tw`flex-1 py-2 items-center justify-center bg-purple-100 rounded-xl`, { borderBottomLeftRadius: 0, borderTopRightRadius: 0 }]}>
                            <ClipboardIcon style={tw`w-16 text-purple-300`} />
                        </View>
                        <View style={[tw`rounded-xl flex-1 items-center justify-center py-2`, { backgroundColor: '#17DDD0', borderBottomLeftRadius: 0, borderTopRightRadius: 0 }]}>
                            <CheckCircleIcon style={tw`w-16 text-gray-100`} />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Home
