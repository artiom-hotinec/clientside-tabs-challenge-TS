import axios from "axios";
import {useEffect, useState} from "react";
import { URLType } from "../types/Url";
import {FOOTBALL, TRAVEL} from "../utils/articleTitleConstants";

export interface IData {
    id: string
    type: string
    sectionId: string
    sectionName: string
    webPublicationDate: string
    webTitle: string
    webUrl: string
    apiUrl: string
    isHosted: boolean
    pillarId: string
    pillarName: string
}

export const useFetch = (parametersUrl: string | undefined) => {

    const [data, setData] = useState<IData[]>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | unknown>('');

    let url: string = URLType.ukNews
    if (parametersUrl === FOOTBALL){
        url = URLType.football
    }else if(parametersUrl === TRAVEL){
        url = URLType.travel
    }

    async function fetchNow() {

        setLoading(true)
        try {

            const response = await axios.get('https://content.guardianapis.com/search?' + url);
            setLoading(false);
            setData(response.data.response.results);

        } catch (error: string | unknown) {
            setLoading(false)
            setError(error)
        }
    }

    useEffect( () => {
        fetchNow()
    }, [parametersUrl]);

    return {data, isLoading, error};
}

