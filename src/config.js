import axios from 'axios';

const API_BASE_URL = "http://localhost:2300";

export const addNewRefer = async (Name, Email, Phone, Message, refereeName, refereeEmail) => {
    const phoneInt = parseInt(Phone, 10);
    if (isNaN(phoneInt)) {
        throw new Error('Invalid phone number');
      }
  
  try {
    const res = await axios.post(`${API_BASE_URL}/referrals`, {
      Name,
      Email,
      Phone:phoneInt,
      Message,
      refereeName,
      refereeEmail,
    });
    console.log('Referral added:', res.data);
    return res.data;
  } catch (err) {
    console.error('Error adding referral:', err);
  }
};
