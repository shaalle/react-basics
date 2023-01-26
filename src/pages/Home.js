import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';
export const Home = () => {
    const { data, isLoading, refetch } = useQuery(["cat"], () => {return Axios.get('https://catfact.ninja/fact/').then((res) => res.data);
    });

    return isLoading ? <h1 style={{color:"teal"}}>Loading..</h1> : <h1>This Is The Home Page  <p>{data?.fact}</p> <button onClick={refetch}>Update Data</button></h1>
}