const status = async (client)=>{
    const result = await client.raw("SELECT NOW()");
    if (result.rows[0].now){
        return "Database is up"
    } else {
        return "Database is down"
    }
}

export { status };