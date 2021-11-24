class DueDateBuilder {

    constructor(dueDateInDays, baseDate){
        this.baseDate = baseDate
        this.baseDate.setDate( this.baseDate.getDate() + dueDateInDays)
    }

    getDueDate(){
        let date = this.baseDate
        let month = (date.getMonth() + 1)
        if( month < 10 ) month = "0" + month
        let day = date.getDate()
        if( day < 10 ) day = "0" + day
        return date.getFullYear() + "-" + month + "-" + day
    }
}

export default DueDateBuilder