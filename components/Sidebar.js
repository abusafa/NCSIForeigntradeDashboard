/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'بحري',
    content: [
    'ميناء صلالة التجاري',
    'ميناء السلطان قابوس'
    ],
  },
  {
    title: 'جوي',
    content: [
      'مطار مسقط الدولي',
      'مطار صلالة'
    ],
  },
  {
    title: 'بري',
    content: [
      'مركز شرطة البريمي',
      'مركز شرطة الوجاجة'
    ],
  }
];

export default class Sidebar extends Component {
  _renderHeader(section) {
     return (
       <View style={styles.header}>
         <Text style={styles.headerText}>{section.title}</Text>
       </View>
     );
   }

   _renderContent(section) {
     return (
       <View style={styles.content}>
         {section.content.map((item, key) => (
           <TouchableOpacity key={key} style={styles.contentWrapper}>
             <Text  style={styles.contentText}>{item}</Text>
           </TouchableOpacity>
         ))}

       </View>
     );
   }

   render() {
     return (
       <View style={styles.container}>
         <View style={{borderLeftWidth:1, borderColor:'#f1f1f1', backgroundColor:"#fff", width:200, alignItems:'center',}}>
           <Image
             resizeMode='contain'
             style={styles.logo}
            source={require('../resources/ncsi.png')}
          />
         </View>

         <Accordion
           sections={SECTIONS}
           initiallyActiveSection={0}
           renderHeader={this._renderHeader}
           renderContent={this._renderContent}
         />
       </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09307b',
    alignItems: 'flex-end'


  },
  logo:{
    width:150,
    marginTop:10,
    backgroundColor:"#fff"
  },
  text:{
    color: '#fff',

  },
  header:{

    alignItems: 'flex-end',
    width:200,
    padding:10,
    backgroundColor: '#021333',
    borderBottomWidth:1,
    borderColor:'rgba(255, 255, 255, 0.1)'
  },
  headerText:{
    color: '#108ee9',
    fontFamily:'Cairo-Black'
  },
  content:{


  },
  contentWrapper:{
    padding:10,
    width:200,
    alignItems: 'flex-end',

  },
  contentText: {
    color: 'rgba(255, 255, 255, 0.67)',
    fontFamily:'Cairo'
  }
});
