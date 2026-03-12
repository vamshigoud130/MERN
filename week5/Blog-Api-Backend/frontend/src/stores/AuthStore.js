import { create } from 'zustand'
import axios from 'axios'

export const useAuth = create((set) => ({
    currentUser: null,
    loading: false,
    isAuthenticated: false,
    error: null,
    articles:[],


    login: async (userCred) => {
        try {
            // set loading true
            set({ loading: true, error: null });

            // API call
            let res = await axios.post(
                "http://localhost:4000/common-api/login",
                userCred,
                { withCredentials: true }
            );

            console.log(res.data);

            // update state
            set({
                loading: false,
                isAuthenticated: true,
                currentUser: res.data.payload,
            });

        } catch (err) {
            console.log("error is ", err);

            set({
                loading: false,
                isAuthenticated: false,
                currentUser: null,
                error: err,
            });
        }
    },

    logout: async () => {
        try{

            //set loading state
            set({
                loading: true,
                error: null,
            }) 
            //make logout API call
            await axios.get("http://localhost:4000/common-api/logout", { withCredentials: true })
                
            //update states
            set({
                loading:false,
                isAuthenticated: false,
                currentUser: null,
            })
        }
        
        catch(err){
            console.log("Error in Logout", err)
        }
        
    },

    
}));