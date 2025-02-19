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
            {posts.map((post) => {
                return (
                    <CardList>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </CardList>
                )
            })}
            {/* <ViewUserButton /> */}
        </>
    )
}

export default Posts