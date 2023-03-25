import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {
    timerDate: Date;
    playButton: boolean;
}
export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate, playButton }) => {
    return (<View>
        <Text style={playButton ? styles.timerCountDownTextPause : styles.timerCountDownTextPlay}>
            {timerDate.getMinutes().toString().padStart(2, "0")}:
            {timerDate.getSeconds().toString().padStart(2, "0")}
        </Text>
    </View>
    )
};

const styles = StyleSheet.create({
    
    timerCountDownTextPlay: {
        fontSize: 40,
        fontWeight: "800",
        color: "#fff"
    },

    timerCountDownTextPause: {
        fontSize: 40,
        fontWeight: "800",
        color: '#fff',
        top: -200    
    }
})

