class DueDateBuilder {

    constructor(baseDate){
        this.baseDate = baseDate
    }

    getDueDate(dueDateInDays){
        this.baseDate.setDate( this.baseDate.getDate() + dueDateInDays)
        let date = this.baseDate
        let month = (date.getMonth() + 1)
        if( month < 10 ) month = "0" + month
        let day = date.getDate()
        if( day < 10 ) day = "0" + day
        return date.getFullYear() + "-" + month + "-" + day
    }
}

export default DueDateBuilder