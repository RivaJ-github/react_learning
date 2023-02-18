function createResource(pending) {
    let error, response;
    pending.then(r => (response = r)).catch(e => (error = e))
    return {
        read() {
            if (error) throw error
            if (response) return response
            throw pending
        }
    }
}

export default createResource