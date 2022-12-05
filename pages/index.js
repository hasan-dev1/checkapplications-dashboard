import styles from '../styles/Home.module.css'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      
      <div className={styles.container}>
        <div className="h-[90vh] bg-slate-200 text-black">
          <h2>its home page</h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
