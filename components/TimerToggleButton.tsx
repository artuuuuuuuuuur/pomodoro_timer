import React from "react";
import { Button, Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    isTimerRunning: boolean;
    stopTimer: () => void;
    startTimer: () => void;
};



export const TimerToggleButton: React.FC<Props> = ({ isTimerRunning, stopTimer, startTimer }) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome 
                    name={isTimerRunning ? 'pause' : 'play'} 
                    size={isTimerRunning ? 50 : 140}
                    style={isTimerRunning ? styles.pause : styles.play }>
                </FontAwesome>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  
    pause: {
        alignSelf: 'center',
        color: 'white',
        top: 200,
        transition:'0.5s, transform 0.5s' 
    },

    play: {
        alignSelf: 'center',
        color: 'white'
    },
    
    container: {
        borderWidth: 5, 
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: "center",
        borderColor: '#fff',
        marginVertical: 50,
    }
})