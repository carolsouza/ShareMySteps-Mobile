import React from 'react';
import { RoundedButton } from '../../components/RoundedButton';
import { TopBar } from '../../components/TopBar';
import { HomeContainer } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Home() { 

    const {navigate} = useNavigation<any>();

    function handleChatButton() {
        navigate('VideoCall')
    }

    return(
        <>
            <TopBar topButton="home"/>
            <HomeContainer>
                <RoundedButton icon="chat" onPress={handleChatButton}/>
            </HomeContainer>
        </>
        
    )
}