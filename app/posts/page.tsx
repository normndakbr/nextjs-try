import "../components/ViewUserButton";
import "../components/CardList";
import CardList from "../components/CardList";
// import ViewUserButton from "../components/ViewUserButton";

const Posts = () => {
    return (
        <>
            <h1 className="text-fuchsia-500">POST PAGE</h1>
            <CardList>
                <p>Hello</p>
                <i>Hi!</i>
            </CardList>
            {/* <ViewUserButton /> */}
        </>
    )
}

export default Posts