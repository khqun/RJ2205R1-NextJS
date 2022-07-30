import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { pid, foo, user } = router.query;
    return (
        <div>
            <h1>ID: {pid} {foo} {user}</h1>
        </div>
    )
}
export default Post