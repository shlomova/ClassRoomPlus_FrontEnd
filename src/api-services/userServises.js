const createUser = async (user) => {
    try{
        const res = await fetch('http://localhost:5000/users', {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Request-Headers": "*",
                "Access-Control-Request-Method": "*",
            },
                    body: JSON.stringify(user)


        })
        return res
    }
    catch(err){
        console.log(err);
    }

}
export {createUser}