import axios from 'axios'
import { EDIT_LAWYER, GET_LAWYER, ADD_FAMILY, ADD_SON } from '../../actions/lawyer'

const API =  "http://localhost:3000/";
const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
const proxy = { host: 'localhost', port: 3000 }

const state = {
    lawyer: { 
        name: '',
        lastname_father: '',
        lastname_mother: '',
        birthday: '',
    },
    families:[] || '',
    family: { name: '', lastname: '', link: '' },
    sons: [] || '',
    son: { dni:'', birthday: '', names: '' }
}
const actions = {
    editLawyer({ commit, dispatch }, data){
        if(data) throw new Error('BAD_ROUTE');
        axios({
            url: API + 'lawyer' + data.id,
            method: 'POST',
            headers: headers,
            proxy: proxy
        }).then(res => {
            commit(EDIT_LAWYER, res.data)
        }).catch(err => {
            console.log(err)
        })
    },
    logIn({ commit, dispatch }, data){
        if(data){
            axios({
                url: API + 'lawyer',
                method: 'POST',
                headers: headers,
                proxy: proxy,
                data: data
            }).then(res => {
                window.location.pathname = '/'
                commit(GET_LAWYER, res.data);
            }).catch(err => {
                console.log(err)
            })
        }
    },
    addFamily({ dispath, commit }, data){
        if(data){
            console.log("ADD_FAMILY", data)
            commit(ADD_FAMILY, data)
        }
    },
    addSon({ dispath, commit }, data){
        if(data){
            console.log("ADD_SON", data)
            commit(ADD_SON, data)
        }
    }
}
const mutations = {
    EDIT_LAWYER: (state, lawyer) => { state.lawyer = lawyer },
    GET_LAWYER: (state, lawyer) => { state.lawyer = lawyer },
    ADD_FAMILY:(state, family) => { state.families.push(family) },
    ADD_SON:(state, son) => { state.sons.push(son) }
}
const getters = {
    getlawyer: state => state.lawyer,
    allFamily: state => state.families,
    allSon: state => state.sons
}
export default { state, getters, actions, mutations }