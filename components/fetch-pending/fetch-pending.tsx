import Loading from "@components/loading/loading";
import { Text } from "react-native";
import React from "react";
import Alert from "@components/alert/alert";

interface FetchPendingProps{
    isLoading: boolean;
    error: string;
}
export default function FetchPending({isLoading, error} : FetchPendingProps){
    return(
        <>
            {isLoading &&  <Loading />}
            {error && <Alert error={error} message="Une erreur c'est produite" type="error"/>}
        </>
    )
}