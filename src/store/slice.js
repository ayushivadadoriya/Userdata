import {createSlice} from '@reduxjs/toolkit'

const data=[
        {id:1 , name:'Employee1' , email:'Employee1@gmail.com'},
        {id:2 , name:'Employee2' , email:'Employee2@gmail.com'},
        {id:3 , name:'Employee3' , email:'Employee3@gmail.com'},
]


const slice = createSlice({
    name:'users',
    initialState:data,
    reducers:{
        addData:(state,action)=>{
            state.push(action.payload)
        },
        deleteData:(state,action)=>{
            const {id}=action.payload;
            const ndata=state.find(user=> user.id===id);
            if(ndata){
                return state.filter(f=> f.id !== id)
            }
        },
        removeData:(state)=>{
            return []
        },
        editData:(state,action)=>{
            const {id,name,email}=action.payload;
            const newdata=state.find(user=> user.id==id);
            if(newdata){
                newdata.name=name
                newdata.email=email
            }
        },
    }
})

export const {addData , deleteData , removeData , editData }=slice.actions;
export default slice.reducer;