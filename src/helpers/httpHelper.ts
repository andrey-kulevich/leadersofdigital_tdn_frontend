
export const httpHelper = async (url:string, method:string, token:string|null, body:any = null) => {
    let headers:any = {}
    try {
        if(body){
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
        if(token)
            headers['Authorization'] = `Basic ${token}`
        const response = await fetch( `${process.env.REACT_APP_BASE_DEV_URL}${url}`,
            {method, body, headers})
        let data = null
        if (method === 'POST' || method === 'GET')
            data = await response.json()

        if(!response.ok)
            throw new Error(`Something wrong ${response.status}`)

        if (data)
            return {data, status: 'ok'}
        else
            return {status: 'ok'}
    }catch (e) {
        return {message:e.message, status: 'error'}
        throw e
    }
}