import { useRouter } from 'next/router'
import styles from '../styles/toolbar.module.css'
export default function Toolbar() {

    const router = useRouter();
    return(
<div className= {styles.ToolBar}>
    <div onClick={() => router.push('/')}>Home</div>
    <div onClick={() => router.push('/feed/1')}>Feed</div>
    <div onClick={() => router.push('/eom')}>Eom</div>
    <div onClick={() => window.location.href = 'https://twitter.com/techfriar?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>Twitter</div>
    
</div>
    );
    
    
}