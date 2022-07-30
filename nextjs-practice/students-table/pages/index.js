import { getStudents } from "./mock-data/data";
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {getStudents().map(student => (
              <tr key={student.id}>
                <td className={styles.td}>{student.name}</td>
                <td className={styles.td}>{student.id}</td>
                <td className={styles.td}>
                  <Link href={`/students/${encodeURI(student.id)}`}>
                    <a>Show</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
