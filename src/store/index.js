import {createStore} from 'vuex'
import dayBookStore from '../modules/daybook/store/day-book/index'

export default createStore({

    //declaramos los modulos que iremos utilizando
    modules:{
         dayBookStore

    }

})