import {create} from 'zustand';

const UserDetail = create((set)=>({

    user:null,
    login:(userData)=>set({user:userData}),
    logout:()=>set({user:null}),
}))
export default UserDetail;