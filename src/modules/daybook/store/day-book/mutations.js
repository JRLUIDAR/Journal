//actualizamos las entradas existentes, añadiendole la nueva
export const setEntries= (state, entries)=>{
    state.entries=[...state.entries, ...entries]
    state.isLoading=false
} 


//actualizamos la entrada que ha sido modificada
export const updateEntry= (state, entrada)=>{

    //primero recuperamos la posicion de la entrada que coincide con la entrada que le llega
    let idx=state.entries.map(entry=>entry.id).indexOf(entrada.id)

    /*ya que tenemos la entrada, modificamos el array de entradas, en la posicion ...que nos  
    llega  desde la linea anterior, y la igualamos a la entrada que nos llega por paramentro */
    state.entries[idx]=entrada
}