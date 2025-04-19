interface Titel {
    titel: string;
    sumititel?: string;
}
const Titel = ({ titel, sumititel }: Titel) => {
    return (
        <div
            className='bg-[#113c4a] w-10/12 sm:w-full mx-auto text-center py-10 flex flex-col'
        >
            <span
                className='text-white text-2xl  font-bold'
            >{titel}</span>
            <span
                className='text-white flex mt-5 mx-auto'

            >{sumititel}</span>
        </div>
    )
}

export default Titel