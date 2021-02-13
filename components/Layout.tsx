import NavBar from "./NavBar"

type Props= {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
}

export default Layout;
