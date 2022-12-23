import journalApi from "@/api/journalApi"

export const loadEntries= async({commit})=>{

    //o asi
    const {data}=await journalApi.get('/entries.json')
    const entries=[] 

    for(let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }  
    //utilizamos la mutation para modificar las entradas de nustros state
    commit('setEntries',entries)
    //console.log(entries)
} 

export const updateEntries= async ({commit}, entry)=>{

   //desestructuramos el obj que nos llega por parametro
   const {date , text ,picture } = entry

   //creamos un obj temporal que va ser el que bamos a guardar
   const entryToSave={date , text ,picture }

   //llamamos a la api
    const res= await journalApi.put(`/entries/${entry.id}.json`, entryToSave)
    //console.log(res)

    //llamamos a la mutation para actualizar el state en tiempo real
    commit('updateEntry',{...entry})
}
