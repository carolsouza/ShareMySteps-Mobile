import React from 'react';
import { VideoButton, ChatIcon } from './styles';
import { TouchableOpacityProps } from "react-native";

import chat from '../../assets/speech-bubble.png';
import microphone from '../../assets/microphone.png';
import turnoff from '../../assets/call.png';
import goback from '../../assets/back.png';

interface RoundedButtonProps extends TouchableOpacityProps {
    icon: string;
}

export const RoundedButton: React.FC<RoundedButtonProps> = ({onPress, icon}) => {

    const buttons:any = {
        "chat": chat,
        "microphone": microphone,
        "turnoff": turnoff,
        "goback": goback
    }

    return(
        <VideoButton onPress={onPress}>
            <ChatIcon source={buttons[icon]}/>
        </VideoButton>
    )
}