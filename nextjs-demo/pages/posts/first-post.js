import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Post from './[pid]';
export default function Firstpost() {
    return (
        <Layout>
            <Head>
                <title>Firstpost</title>
            </Head>
            <h1>Firstpost</h1>
            <h2>
                <Link href="/">
                    <a>
                        Back to home
                    </a></Link>
            </h2>
        </Layout>

    )
}