export const getPokedata = (name) => {
    return{
        type: 'POKENAME',
        payload: name
    }
}