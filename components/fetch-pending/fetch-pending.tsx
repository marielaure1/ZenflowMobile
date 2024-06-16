import Loading from "@components/loading/loading";
import { Text } from "react-native";
import React from "react";
import Alert from "@components/alert/alert";

interface FetchPendingProps{
    isLoading: boolean;
    error: string;
    type: string;
}
export default function FetchPending({isLoading, error, type} : FetchPendingProps){
    return(
        <>
            {isLoading &&  <Loading />}
            {error && <Alert error={error} message={error} type={type}/>}
        </>
    )
}