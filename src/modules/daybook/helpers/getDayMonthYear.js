const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear=(dateString)=>{

    const date= new Date(dateString)
    
    return{
        dia:date.getDate(),
        mes:months[date.getMonth()],
        año:date.getFullYear()
    }
}

export default getDayMonthYear