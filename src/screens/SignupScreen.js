import React,{useState,useEffect}from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Separator from '../components/Separator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts,Images} from '../constants';
import {Display} from '../utils';

const SignupScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);  //no password showing
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />

      

      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sign UP</Text>
      </View>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.content}>
        Enter your Name,Email and password for sign up.
        <Text style={styles.forgotPasswordText}  onPress={() => navigation.navigate('Sign')}>Already have account?</Text>
      </Text>
      {/* <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Already have account?</Text>
      </View> */}
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather 
          name="user" 
          size={22} 
          color={Colors.DEFAULT_GREY} 
          style={{marginRight:10}}
          />
          <TextInput  
          placeholder="Username" 
          placeholderTextColor={Colors.DEFAULT_GREY}
          selectionColor={Colors.DEFAULT_GREY}    
          />
        </View>
      </View>
      <Separator
      height={15}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather 
          name="mail" 
          size={22} 
          color={Colors.DEFAULT_GREY} 
          style={{marginRight:10}}
          />
          <TextInput  
          placeholder="Email address"  
          placeholderTextColor={Colors.DEFAULT_GREY}
          selectionColor={Colors.DEFAULT_GREY}    
          />
        </View>
      </View>
      <Separator
      height={15}
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
        <Feather
         name="lock" 
         size={22} 
         color={Colors.DEFAULT_GREY} 
         style={{marginRight:10}}
         />
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1,}}>
        <TextInput
        secureTextEntry={isPasswordShow ? false : true}
        placeholder="Password" 
        placeholderTextColor={Colors.DEFAULT_GREY}
        selectionColor={Colors.DEFAULT_GREY}    
        />
        <Feather
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: 10}}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
        </View>
      </View>
      </View>
      <Text></Text>
      {/* <View style={styles.forgotPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.5}/>
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <Text style={styles.forgotPasswordText}>Already have account?</Text>
      </View> */}
      <TouchableOpacity style={styles.signinButton}>
        <Text style={styles.signinButtonText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        {/* <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.signupText}>Sign Up</Text> */}
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK}  style={styles.signinButtonLogo}/>
          </View>
          <Text style={styles.socialSigninButtonText}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} >
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo}/>
          </View>
          <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: Colors.DEFAULT_BLACK,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: Colors.DEFAULT_BLACK,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    color: Colors.DEFAULT_BLACK,
  },
  content: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    color: Colors.DEFAULT_BLACK,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
    fontSize: 15,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    alignSelf: 'center',
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },

});

export default SignupScreen;
