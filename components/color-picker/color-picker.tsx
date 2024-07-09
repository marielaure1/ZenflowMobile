import React, { useState } from 'react';
import { Button, Modal, View } from 'react-native';
import ColorPicker, { Panel1, Panel5, Swatches, Preview, OpacitySlider, HueSlider, InputWidget } from 'reanimated-color-picker';
import ButtonIcon from '@components/buttons/button-icon';

const ColorPickerBtn = ({foreground, background, setForeground, setBackground}) => {
    const [showModal, setShowModal] = useState(false);
    const onSelectBackground = ({ hex }) => {
        setBackground(hex)
    };

    const onSelectForeground = ({ hex }) => {
        setForeground(hex)
    };

    return (
        <>
            <View className='flex-row justify-between items-center'>
                <ButtonIcon icon="Brush" action={() => setShowModal(true)} />
            </View>
            <Modal visible={showModal} animationType='slide'>
                <View className='flex-col items-center justify-center px-[20px] py-[50px]' style={{ flex: 1 }}>
                    <ColorPicker style={{ width: '70%' }} value={background} onComplete={onSelectBackground}>
                        <View className='flex-col gap-xl'>
                            <Panel1 />
                            <HueSlider />
                            <InputWidget formats={['HEX', 'RGB', 'HSL', 'HWB', 'HSV']} />
                        </View>
                    </ColorPicker>
                
                    <ColorPicker style={{ width: '70%' }}  onComplete={onSelectForeground}>
                        <View className='flex-col gap-xl'>
                            <Panel1 />
                            <HueSlider />
                            <InputWidget formats={['HEX', 'RGB', 'HSL', 'HWB', 'HSV']} />
                        </View>
                    </ColorPicker>
                
                    <Button title='Ok' onPress={() => setShowModal(false)} />
                </View>
            
            </Modal>
        </>
    )
}

export default ColorPickerBtn;