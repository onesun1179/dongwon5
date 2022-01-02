import type { FC } from "react";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../gatsby-plugin-apollo/gql/client/user/user.query";

export interface TestProps {
}

const Test: FC<TestProps> = ({}) => {

// const [login, { error, reset }] = useMutation<LoginObject, { loginInput : LoginInput}>(LOGIN_MUTATION);
    const { data, error, loading } = useQuery(GET_USER)

    useEffect(() => {
        console.log(data, error, loading)
    }, [loading])
    return <div>test</div>
}


Test.displayName = "Test"

export default Test 
