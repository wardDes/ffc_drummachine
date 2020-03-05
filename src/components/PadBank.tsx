import React, { ReactNode} from 'react'
import DrumPad from '../components/DrumPad'

interface BankPadProps {
    power: boolean,
    updateDisplay(name: string): void,
    clipVolume: number,
    currentPadBank: Object[]
}

const PadBank: React.FC<BankPadProps> = props => {
    let padBank;
    props.power ? 
        padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
                <DrumPad  />
            )
        }) :
        padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
                <DrumPad />
            )
        })
    return(
        <div></div>
    )
}

export default PadBank