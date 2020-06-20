import styles from "./Footer.module.css"
import { Paper } from "@material-ui/core"
import Link from "next/link"
export default function Footer (){
    return(
        
        <div className={styles.footercard}>
            <div className={styles.footercardc1}>
                                

                <div className={styles.footercardc12}>
                    <div className={styles.footercardc121}>
                        <div>
                            
                            <Link href="">
                                <p> Contact</p>
                                </Link>
                        </div>
                        <div>
                        <Link href="">
                        <p> User Notice</p>
                        </Link>
                           
                        </div>
                        <div>
                        <Link href="">
                        <p> Support Center</p>
                        </Link>
                            
                        </div>
                
                    </div>
                    <div className={styles.footercardc122}>
                        <p>Copyright Cyber Intelligence House 2020.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        

    )


}
