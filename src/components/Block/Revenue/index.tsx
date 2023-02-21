import dynamic from 'next/dynamic'
import Styles from '@/styles/Revenue.module.scss'

const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false })

const RevenueComponent = () => {
  return (
    <>
        <div>
            <div className="d-flex px-4">
                <span className={Styles.RevenueTitle}>Revenue</span>
            </div>
            <div className='my-4'>
                <GaugeChart
                id="gauge-chart1"
                arcsLength={[0.7, 0.3]}
                colors={['#51A7FF', '#A9D1FF']}
                percent={0.7}
                />
            </div>
            <div className='d-flex justify-content-between px-4 my-4'>
                <div className={Styles.RevenueFooter}>TOTAL REVENUE <br /> <span className={Styles.RevenueFooterVal}>$9.32K</span></div>
                <div className={Styles.RevenueFooter}>MISSED <br /> <span className={Styles.RevenueFooterVal}>$3.71K</span></div>
            </div>
        </div>
    </>
  )
}

export default RevenueComponent
