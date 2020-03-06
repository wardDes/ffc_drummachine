import React, { ReactNode} from 'react'
import DrumPad from '../components/DrumPad'

interface Sound {
    keyCode: number,
    keyTrigger: string,
    id: string,
    url: string,
  }

  

interface BankPadProps {
    power: boolean,
    updateDisplay(name: string): void,
    clipVolume: number,
    currentPadBank: Array<Sound>
}

const PadBank: React.FC<BankPadProps> = props => {
    let padBank;
    props.power ? 
        padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
                <DrumPad  
                    clipId = {padBankArr[i].id}
                    clip = {padBankArr[i].url}
                    keyTrigger = {padBankArr[i].keyTrigger}
                    keyCode = {padBankArr[i].keyCode}
                    updateDisplay={props.updateDisplay}
                    power={props.power}
                />
            )
        }) :
        padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
                <DrumPad 
                    clipId = {padBankArr[i].id}
                    clip = {padBankArr[i].url}
                    keyTrigger = {padBankArr[i].keyTrigger}
                    keyCode = {padBankArr[i].keyCode}
                    updateDisplay={props.updateDisplay}
                    power={props.power}
                />
            )
        })
    return(
        <div className="pad-bank">
            {padBank}
        </div>
    )
}

export default PadBank