const getCourses = async () => {
    try {
        const res = await fetch('http://localhost:5000/courses')
        return res.json()
    }
    catch (err) {
        console.log(err);
    }
}
export { getCourses }