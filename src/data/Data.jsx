import axios from 'axios';

export const getData = () => {

    let url = 'https://limitless-island-55975.herokuapp.com/api/emprendedor/';
    axios.get(url)
    .then( ( result ) => {
        //console.log(result);

        return(result)

        }, ( error ) => {
            //console.log(error);
            return(error)
        } 
    )
}

export const shareData = getData();