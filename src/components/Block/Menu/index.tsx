import Link from 'next/link'

const MenuComponent = () => {
  return (
    <>
      <div id="navbarMenu">
        <Link href="/" className='mx-4'>Chart</Link>
        <Link href="upload" className='mx-4'>Upload</Link>
        <Link href="report" className='mx-4'>Reports</Link>
      </div>
    </>
  )
}

export default MenuComponent
