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
