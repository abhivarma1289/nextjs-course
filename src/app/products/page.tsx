import Link from "next/link"

export default function ProductsList(){
    return (
        <>
        <h1>Product List</h1>
        <h2>product 1</h2>
        <h2>product 2</h2>
        <h2>product 3</h2>

        <Link href='/'>home</Link>
        </>
    )
}