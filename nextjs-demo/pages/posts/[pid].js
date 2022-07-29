import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { pid, foo } = router.query;
    return (
        <div>
            <h1>ID: {pid} {foo}</h1>
        </div>
    )
}
export default Post