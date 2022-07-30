import { useRouter } from 'next/router'
const Student = () => {
    const router = useRouter();
    const {pid} = router.query;
    return (
        <div>
            <h1>Student Information</h1>
            <p>Student: {pid}</p>
        </div>
    )
}
export default Student