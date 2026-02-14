import Nav from "../Navigation/Nav"

const Home = ({cartItems})=> {

    return (
        <>
            <Nav 
                cartItems = {cartItems}
            />
            <h1>Welcome to the home page of My Store!</h1>
        </>
    )
}

export default Home