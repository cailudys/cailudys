/**
 * 计算fn函数执行所用的毫秒数，打印在控制台
 * @param {*} fn 
 * @param  {...any} args fn函数的参数
 * @returns 
 */
const calculateRuntime = ( fn, ...args ) => {
    const startTime = Date.now()
    fn(...args)
    const endTime = Date.now()
    const timeDifference = endTime - startTime
    console.log(`耗时${timeDifference}毫秒`);
}

/**
 * 计算两个时间之间相隔了多少年月日
 * @param { '2021-04-03' } recentDate 
 * @param { '1995-01-06' } oldDate 
 * @returns 年月日
 */
const calculateYMDInterval = (recentDate, oldDate) => {
    // 1、start : 解析时间
    const recentDateArr = recentDate.split('-');
    const oldDateArr = oldDate.split('-');
    const recentDateObj = new Date(recentDateArr[0], recentDateArr[1], recentDateArr[2]);
    const oldDateObj = new Date(oldDateArr[0], oldDateArr[1], oldDateArr[2]);
    let recentDateYears = recentDateObj.getFullYear()
    let oldDateYears = oldDateObj.getFullYear()
    let recentDateMonth = recentDateObj.getMonth()
    let oldDateMonth = oldDateObj.getMonth()
    let recentDateDay =  recentDateObj.getDate()
    let oldDateDay =  oldDateObj.getDate()
    let yearInterval = recentDateYears - oldDateYears
    let monthInrerval = recentDateMonth - oldDateMonth 
    let dayInterval =  recentDateDay - oldDateDay
    if ( dayInterval < 0 ) {
        // 如果天数小于0，则借一个月，用上个月的天数加上这个负值即可
        // new Date()第3个参数默认为1，就是每个月的1号，把它设置为0时， new Date()会返回上一个月的最后一天，然后通过getDate()方法得到天数
        const lastMonthDays = new Date(recentDateYears, recentDateMonth-1  , 0).getDate()
        dayInterval = lastMonthDays  + dayInterval
        monthInrerval = monthInrerval -1
        if(monthInrerval < 0) {
            monthInrerval = 12 + monthInrerval
            yearInterval = yearInterval -1
        }
    }
    if (monthInrerval < 0 ) {
        monthInrerval = 12 + monthInrerval
        yearInterval = yearInterval -1
    }
    return `${yearInterval}年${monthInrerval}月${dayInterval}日`
} 
