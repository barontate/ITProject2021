import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', firstName: 'Lawson', lastName: 'Pegler', highlight: "IT Project team leader", notes: "Loves dinosaurs. Third year unimelb student, does tutoring."},
  { id: '2', firstName: 'Jack', lastName: 'Whitehead', highlight: "Good music taste", notes: "Knowledgeable when it comes to API's. Originally from Darwin"},
  { id: '3', firstName: 'Nic', lastName: 'Rickard', highlight: "Rovers guy", notes: "Professional Dota 2 Player" },
  { id: '4', firstName: 'Nelson', highlight: "Has a boat", lastName: 'Walker', notes: "3rd year uni, breaking bad fan"},
  { id: '5', firstName: 'Tate', highlight: "Works for Government", lastName: 'de Klerk', notes: "Has a sweet car"},
  { id: '6', firstName: 'Lance', lastName: 'Franklin', highlight: "excellent front-end dev", notes: "Met him at brownlow medal night 2018. Great guy, kicks a lot of goals." },
  { id: '7', firstName: 'Alan', lastName: 'Watts', highlight: "Motivational consultant", notes: "Very wise man, met him on a trip to India." },
  { id: '8', firstName: 'John', lastName: 'Bonham', highlight: "SQL expert", notes: "Great drummer and computer scientist."},
  { id: '9', firstName: 'Christian', lastName: 'Petracca', highlight: "Agile expert, automates tasks with python", notes: "Met through 2021 premiership celebrations in 2021"},
  { id: '10', firstName: 'Walter', lastName: 'White', highlight: "excellent teacher", notes: "met in highschool" },
]

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { contactAdded, reverseOrder } = contactSlice.actions

export default contactSlice.reducer
