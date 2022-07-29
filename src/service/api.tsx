import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.1.2:3333',
  // headers: {
  //   'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVuaWNlc3VtYXIiLCJpYXQiOjE2NTg3ODMyNDIsImV4cCI6MTY1ODg2OTY0Miwic3ViIjoiOTVhNDM3YzEtYTY1Ni00MTA3LWE5ZmItZjk1MDIwMjIwMjVkIn0.sRehyPiKXRZtZW0_BP90e-VHoVLtW5NgFtxPeHDw3VI'
  // }
})