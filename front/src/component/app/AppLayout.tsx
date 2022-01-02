import type { FC } from "react";
import { AppHeader } from "./AppHeader";
import { useEffect } from "react";

export interface LayoutProps {}

const AppLayout: FC<LayoutProps> = ({ children }) => {
    useEffect(() => {
        console.log(children);
    }, []);
    return <AppHeader>{children}</AppHeader>;
};

AppLayout.displayName = "AppLayout";

export default AppLayout;
