import type { FC } from "react";
import {
    Header,
    HeaderContainer,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton,
    HeaderName,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SkipToContent,
} from "carbon-components-react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import { Login20, Login32, Logout20 } from "@carbon/icons-react";
// import { signIn, signOut, useSession } from "next-auth/react";

export interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = ({ children }) => {
    // const { data: session } = useSession();

    // console.log(session);
    return (
        <div className="container">
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="IBM Platform Name">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="#" prefix="UNIT SOFT">
                            test
                        </HeaderName>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction aria-label="Search">
                                <Search20 />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction aria-label="Notifications">
                                <Notification20 />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction aria-label="App Switcher">
                                <AppSwitcher20 />
                            </HeaderGlobalAction>
                            {/*<HeaderGlobalAction*/}
                            {/*    aria-label="login / logout"*/}
                            {/*    onClick={() => {*/}
                            {/*        session ? signOut() : signIn();*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    {session ? <Logout20 /> : <Login20 />}*/}
                            {/*</HeaderGlobalAction>*/}
                        </HeaderGlobalBar>
                        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                            <SideNavItems>
                                <SideNavMenu title="Category title">
                                    <SideNavMenuItem href={"#"}>Link</SideNavMenuItem>
                                    <SideNavMenuItem aria-current="page" href="">
                                        Link
                                    </SideNavMenuItem>
                                    <SideNavMenuItem href="">Link</SideNavMenuItem>
                                </SideNavMenu>
                            </SideNavItems>
                        </SideNav>
                    </Header>
                )}
            />
            {children}
        </div>
    );
};
