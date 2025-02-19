import "../components/ViewUserButton";
import "../components/CardList";
import CardList from "../components/CardList";
// import ViewUserButton from "../components/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface PostsData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async () => {
    const response = await fetch(base_url)
    const posts: PostsData[] = await response.json();

    return (
        <>
            <h1 className="text-fuchsia-500">POST PAGE</h1>
            <p>{posts[0].id}</p>
            <CardList>
                <p>Hello</p>
                <i>Hi!</i>
            </CardList>
            {/* <ViewUserButton /> */}
        </>
    )
}

export default Posts