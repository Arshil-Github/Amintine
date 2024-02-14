import styles from './LoginCard.module.css'

import {React, useState} from 'react'


function LoginCard({setLoginDataCallback})
{
    const [selectedHostel, setSelectedHostel] = useState(0);
    const [dropdown, setDropdown] = useState(false);

    return(
        <>
        <div className={styles.card}>

        <p className = {styles.cardTitle}>Enter your Info</p>

        <input type="text" placeholder="Name" className={styles.nameInput} id='nameInput'/>

        <div className={styles.hostelDropDown}>
            <button className = {styles.selectHostelButton} onClick={() => {
                setDropdown(true);
            }}>
                {GetHostelText()}
                </button>


            <div className={dropdown ? styles.hostelDropDownContent: styles.hostelDropDownContentInactive}>


                <button onClickCapture={
                    ()=>{
                        ChangeSelectedHostel(1)
                    }
                } className={styles.singleHostelBuutton}>Hostel H1</button><br />

                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(4)
                    }
                }>Hostel H4</button><br />

                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(5)
                    }
                }>Hostel H5 Girls</button><br />
                
                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(15)
                    }
                }>Hostel H5 Boys</button><br />
                
                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(6)
                    }
                }>Hostel 6</button><br />
                
                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(7)
                    }
                }>Hostel 7</button><br />
                
                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(8)
                    }
                }>Day Scholar Boy</button><br />
                <button onClick={
                    ()=>{
                        ChangeSelectedHostel(9)
                    }
                }>Day Scholar Girl</button><br />
            </div>
        </div>

        <input type="number" placeholder="Room (as a unique id) (only use numbers)" className={styles.roomInput} id='roomInput'/>

        <input type="text" placeholder="Instagram Id" className={styles.instaInput} id='instaInput'/>

        <input type="text" placeholder="Something about you" className={styles.bioInput} id='bioInput'/>

        <button className={styles.submitButton} onClick={()=>{
            let nameValue = document.getElementById("nameInput").value;
            let hostelValue = GetHostelNumber();
            let roomValue = document.getElementById("roomInput").value;
            let instaValue = document.getElementById("instaInput").value;
            let bioValue = document.getElementById("bioInput").value;

            let isValid = (nameValue != "") && (roomValue != "") && (hostelValue != 0)

            
            let roomTemp = roomValue.match(/(\d+)/);
            let numbericRoomNumber = roomTemp[0]

            if(isValid)
            {
                setLoginDataCallback({
                    name: nameValue,
                    hostel: hostelValue,
                    room: numbericRoomNumber,
                    insta: instaValue,
                    bio: bioValue,
                    isValid: true
                })
            }
        }}>
            SUBMIT
            </button>

        </div>
        </>
    )
    
    function GetHostelNumber()
    {
        if(isHostelNumberValid(selectedHostel))
        {
            let output = selectedHostel
            return output
        }
        else{
            return 0
        }
    }

    function ChangeSelectedHostel(hostelNumber)
    {
        if(!dropdown) return;

        let isValid = isHostelNumberValid(hostelNumber);

        if(isValid)
        {
            setSelectedHostel(hostelNumber);
            setDropdown(false)
        }
        else{
            console.log(hostelNumber)
            console.log("Invalid value of selected hostel given")
            // alert("Invalid value of selected Hostel")
        }
    }

    function GetHostelText()
    {
        if(isHostelNumberValid(selectedHostel))
        {
            let outputString = `Hostel ${selectedHostel}`
            return outputString
        }
        else{
            return "Select your Hostel"
        }
    }

    function isHostelNumberValid(hostelNumber)
    {
        let isValid = hostelNumber > 0;
        return isValid
    }

}

export default LoginCard