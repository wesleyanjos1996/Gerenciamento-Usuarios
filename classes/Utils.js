class Utils 
{
    static dateFormat(date) {
        return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()
    }
}