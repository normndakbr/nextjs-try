import "../components/ViewUserButton";
import "../components/CardList";
import CardList from "../components/CardList";
import ViewUserButton from "../components/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface PostsData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async () => {
    const response = await fetch(base_url, {
        cache: "no-store",
    });
    const posts: PostsData[] = await response.json();

    return (
        <>
            <p>{new Date().toLocaleTimeString()}</p>
            <h1 className="text-fuchsia-500">POST PAGE</h1>
            {posts.map((post) => {
                return (
                    <>
                        <CardList>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                            <ViewUserButton userId={post.userId} />
                        </CardList>
                    </>
                )
            })}
        </>
    )
}

export default Posts