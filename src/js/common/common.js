export default {
    /**
     * Hàm chuyển đổi ngày tháng về dạng ngày/tháng/năm
     * CreatedBy: DNDINH 10.06.2021
     * @param {*} dateString tham số có kiểu dữ liệu bất kì
     * @returns 
     */
    formatDate(dateString) {
        let date = new Date(dateString);
        if (Number.isNaN(date.getTime())) {
            return '';
        } else {
            let day = date.getDate(),
                month = date.getMonth() + 1,
                year = date.getFullYear();

            day = day < 10 ? `0${day}` : day;
            month = month < 10 ? `0${month}` : month;
            return `${day}/${month}/${year}`;
        }
    },

    /**
     * Hàm định dạng hiển thị tiền tệ
     * CreatedBy: DNDINH 10.06.2021
     * @param {string} money Số tiền 
     * @returns 
     */
    formatMoney(money) {
        if (money) {
            let result = money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            return result;
        } else {
            return "";
        }
    }
}