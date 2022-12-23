export const getEntriesByTerms = (state) =>(term=" ") => {

    //si el filtro es vacio nos devolvera todas las entradas
    if (term!=' ') {
      return state.entries;
    } else {
      //si no nos devolvera las entradas que coincide con el filtro de busqueda
      return state.entries.filter((entrada) =>
        entrada.text.toLowerCase().includes(term.toLowerCase())
      );
    }
  }

  //recuperamos una entrada por un id
  export const getEntriesById=(state)=>(id='')=>{

    const entrada =state.entries.find(entry=>entry.id===id)
    if(!entrada) return

    return {...entrada}

    
  }

