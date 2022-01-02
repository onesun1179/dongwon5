import type { FC } from "react";

export interface TestProps {
}

const Test: FC<TestProps> = ({}) => {

    return <div>test</div>
}


Test.displayName = "Test"

export default Test 
